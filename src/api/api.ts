import { QueryClient, type QueryFunction } from "@tanstack/react-query";

import { determineResourceId } from "~/utils/resource.util";

import {
  StarWarsResource,
  type StarWarsResourceList,
  type StarWarsResourceQueryKey,
  type StarWarsResourceTypeMapping,
} from "./types";

const API_BASE_URL = "https://swapi-617.pages.dev/api/";

const defaultQueryFn: QueryFunction = ({ queryKey }) => {
  const [resourceType, id, page] = queryKey as StarWarsResourceQueryKey;

  if (id === "all") {
    return getResourceList(resourceType, page);
  } else {
    return getResource(resourceType, id);
  }
};

const getResourceList = async <T extends StarWarsResource>(
  resourceType: T,
  page: number,
): Promise<StarWarsResourceList<T>> => {
  const url = new URL(`${resourceType}/?page=${page}`, API_BASE_URL);
  const response = await fetch(url);

  // in case of a request error, throw it
  if (!response.ok) throw new Error("Failed to fetch data");

  // parse the response as JSON
  const result = (await response.json()) as StarWarsResourceList<T>;

  for (const resource of result.results) {
    // determine the id of the resource and set it
    resource.id = determineResourceId(resource);

    // automatically cache the resource with their id
    queryClient.setQueryData([resourceType, resource.id], resource);
  }

  return result;
};

const getResource = async <T extends StarWarsResource>(
  resourceType: T,
  id: number,
): Promise<StarWarsResourceTypeMapping[T]> => {
  const url = new URL(`${resourceType}/${id}`, API_BASE_URL);
  const response = await fetch(url);

  // in case of a request error, throw it
  if (!response.ok) throw new Error("Failed to fetch data");

  // parse the response as JSON
  const resource = (await response.json()) as StarWarsResourceTypeMapping[T];

  // determine the id of the resource and set it
  resource.id = determineResourceId(resource);

  return resource;
};

export const queryClient = new QueryClient({
  defaultOptions: { queries: { queryFn: defaultQueryFn } },
});
