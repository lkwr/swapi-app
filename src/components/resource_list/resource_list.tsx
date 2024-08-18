import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { type FC, type Key, type ReactNode, useEffect, useState } from "react";

import {
  type AnyStarWarsResource,
  StarWarsResource,
  type StarWarsResourceList,
} from "~/api/types";

import { columns } from "./resource_list_columns";

/**
 * The number of items to display per page.
 * swapi.dev has a total of 10 items per page.
 */
const ITEMS_PER_PAGE = 10;

export const ResourceList: FC<{ type: StarWarsResource; page: number }> = ({
  type,
  page,
}) => {
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState<number>();

  const query = useQuery<StarWarsResourceList<StarWarsResource>>({
    queryKey: [type, "all", page],
    placeholderData: keepPreviousData,
  });

  /**
   * Determine the total number of pages from the query data.
   */
  useEffect(() => {
    if (!query.data?.count) return;
    setTotalPages(Math.ceil((query.data?.count ?? 0) / ITEMS_PER_PAGE));
  }, [query.data?.count]);

  /**
   * Gets the cell data for a given resource and column key.
   *
   * @param resource The resource to render the cell for.
   * @param columnKey The column key to render the cell for.
   * @returns The cell data
   */
  const getCellData = (
    resource: AnyStarWarsResource,
    columnKey: Key,
  ): ReactNode => {
    if (typeof columnKey !== "string") return null;

    // Check if the column key exists as property in the resource
    if (!(columnKey in resource)) return null;

    // Get the value from the resource
    const value = resource[columnKey as keyof AnyStarWarsResource];

    // If the value is not a string, return the null
    if (typeof value !== "string") return null;

    return value;
  };

  return (
    <div className="flex h-full flex-col gap-2">
      <Table
        aria-label={`List of ${type} resources`}
        selectionMode="single"
        selectedKeys={[]}
        onSelectionChange={(keys) => {
          // Filter out some NextUI-specific stuff which is not needed
          if (keys === "all" || keys.size !== 1) return;
          navigate({ to: `/${type}/${keys.values().next().value}` });
        }}
        bottomContent={
          totalPages && totalPages > 1 ? (
            <div className="flex justify-center">
              <Pagination
                className="mb-2"
                total={totalPages}
                page={page}
                onChange={(newPage) => navigate({ search: { page: newPage } })}
              />
            </div>
          ) : null
        }
      >
        <TableHeader columns={columns[type]}>
          {(column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={query.data?.results ?? []}
          loadingContent="Loading..."
          loadingState={
            query.isLoading || query.isFetching ? "loading" : "idle"
          }
        >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{getCellData(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
