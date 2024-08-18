/**
 * Type of the query key used for tanstack query.
 */
export type StarWarsResourceQueryKey =
  | [type: StarWarsResource, id: number]
  | [type: StarWarsResource, id: "all", page: number];

/**
 * Type of the resource list response from swapi.dev.
 */
export type StarWarsResourceList<T extends StarWarsResource> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarWarsResourceTypeMapping[T][];
};

/**
 * Enum of all the available resources.
 */
export enum StarWarsResource {
  People = "people",
  Films = "films",
  Planets = "planets",
  Species = "species",
  Vehicles = "vehicles",
  Starships = "starships",
}

/**
 * The base interface which all resources inherit from.
 */
export interface BaseStarWarsResource {
  id: number;
  url: string;
  created: string;
  edited: string;
}

/**
 * The interface for a person (people) resource.
 */
export interface StarWarsPerson extends BaseStarWarsResource {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string; // planet link;
  films: string[]; // film links
  species: string[]; // species links
  vehicles: string[]; // vehicle links
  starships: string[]; // starship links
}

/**
 * The interface for a film resource.
 */
export interface StarWarsFilm extends BaseStarWarsResource {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[]; // people links
  planets: string[]; // planet links
  starships: string[]; // starship links
  vehicles: string[]; // vehicle links
  species: string[]; // species links
}

/**
 * The interface for a planet resource.
 */
export interface StarWarsPlanet extends BaseStarWarsResource {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[]; // people links
  films: string[]; // film links
}

/**
 * The interface for a species resource.
 */
export interface StarWarsSpecies extends BaseStarWarsResource {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string | null; // planet link;
  language: string;
  people: string[]; // people links
  films: string[]; // film links
}

/**
 * The interface for a vehicle resource.
 */
export interface StarWarsVehicle extends BaseStarWarsResource {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[]; // people links
  films: string[]; // film links
}

/**
 * The interface for a starship resource.
 */
export interface StarWarsStarship extends BaseStarWarsResource {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[]; // people links
  films: string[]; // film links
}

/**
 * Type mapping from {@link StarWarsResource} to the corresponding resource type.
 */
export type StarWarsResourceTypeMapping = {
  [StarWarsResource.People]: StarWarsPerson;
  [StarWarsResource.Films]: StarWarsFilm;
  [StarWarsResource.Planets]: StarWarsPlanet;
  [StarWarsResource.Species]: StarWarsSpecies;
  [StarWarsResource.Vehicles]: StarWarsVehicle;
  [StarWarsResource.Starships]: StarWarsStarship;
};

/**
 * Type of any resource.
 */
export type AnyStarWarsResource =
  StarWarsResourceTypeMapping[keyof StarWarsResourceTypeMapping];
