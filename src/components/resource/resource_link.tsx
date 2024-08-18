import { Link } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { type FC, type ReactNode, useMemo } from "react";

import {
  type AnyStarWarsResource,
  type StarWarsFilm,
  type StarWarsPerson,
  type StarWarsPlanet,
  StarWarsResource,
  type StarWarsSpecies,
  type StarWarsStarship,
  type StarWarsVehicle,
} from "~/api/types";
import { parseResourceUrl } from "~/utils/resource.util";

/**
 * A component to display a link to a other resource.
 */
export const ResourceLink: FC<{ url: string }> = ({ url }) => {
  /**
   * Parses the url and returns the resource if it is valid.
   */
  const resource = useMemo(() => parseResourceUrl(url), [url]);

  /**
   * Query the resource to display the name/title.
   */
  const query = useQuery<AnyStarWarsResource>({
    enabled: resource !== null,
    queryKey: resource ? [resource.type, resource.id] : [],
  });

  /**
   * Determine the name/title of the resource based on the resource type and the query data.
   */
  const name = useMemo(() => {
    if (!resource || !query.data) return null;

    switch (resource.type) {
      case StarWarsResource.People:
        return (query.data as StarWarsPerson).name;
      case StarWarsResource.Films:
        return (query.data as StarWarsFilm).title;
      case StarWarsResource.Planets:
        return (query.data as StarWarsPlanet).name;
      case StarWarsResource.Species:
        return (query.data as StarWarsSpecies).name;
      case StarWarsResource.Vehicles:
        return (query.data as StarWarsVehicle).name;
      case StarWarsResource.Starships:
        return (query.data as StarWarsStarship).name;
      default:
        return "Unknown resource type";
    }
  }, [query.data]);

  return resource ? (
    <Link
      href={`/${resource?.type}/${resource?.id}`}
      color="primary"
      underline="always"
    >
      {name ?? "Loading..."}
    </Link>
  ) : (
    <span className="italic text-primary">None</span>
  );
};

/**
 * A component to display a list of resource links.
 */
export const ResourceLinkList: FC<{ title: ReactNode; urls: string[] }> = ({
  title,
  urls,
}) => {
  return (
    <div>
      <p className="font-bold">{title}:</p>
      {urls.length === 0 ? (
        <p className="pl-2 italic">None</p>
      ) : (
        <ul className="pl-2">
          {urls.map((url) => (
            <li key={url}>
              <ResourceLink url={url} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
