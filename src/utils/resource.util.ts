import { type BaseStarWarsResource, StarWarsResource } from "~/api/types";

/**
 * Determines the id of a resource based on its url.
 * It expects the url to be end with`/{id}`.
 *
 * @param resource The resource to determine the id from.
 * @returns The id of the resource.
 */
export const determineResourceId = (
  resource: Omit<BaseStarWarsResource, "id">,
): number => {
  const urlSplit = resource.url.split("/");
  const id = urlSplit[urlSplit.length - 2];

  return parseInt(id);
};

/**
 * Parses a resource type from a string.
 * It returns null if the resource type is not valid.
 *
 * @param resourceType The resource type to parse.
 * @returns The parsed resource type or null if the resource type is not valid.
 */
export const parseResourceType = (
  resourceType: string,
): StarWarsResource | null => {
  if (Object.values<string>(StarWarsResource).includes(resourceType)) {
    return resourceType as StarWarsResource;
  } else {
    return null;
  }
};

const URL_PARSE_REGEX = /^https:\/\/swapi\.dev\/api\/([a-z]+)\/([0-9]+)\/$/;

/**
 * Parse a resource url (from swapi.dev) into a resource type and id.
 *
 * @param url The swapi.dev url to parse.
 * @returns The parsed resource type and id or null if the url is invalid.
 */
export const parseResourceUrl = (
  url: string,
): { type: StarWarsResource; id: number } | null => {
  const result = URL_PARSE_REGEX.exec(url);

  if (!result) return null;

  const [, type, id] = result;

  const resourceType = parseResourceType(type);
  if (!resourceType) return null;

  const resourceId = parseInt(id);
  if (isNaN(resourceId)) return null;

  return { type: resourceType, id: resourceId };
};
