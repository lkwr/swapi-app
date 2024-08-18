import { StarWarsResource } from "~/api/types";

type Columns = Array<{
  name: string;
  uid: string;
}>;

/**
 * The columns for each resource type to display in the resource list.
 */
export const columns = {
  [StarWarsResource.People]: [
    { name: "Name", uid: "name" },
    { name: "Height", uid: "height" },
    { name: "Mass", uid: "mass" },
    { name: "Birth Year", uid: "birth_year" },
    { name: "Gender", uid: "gender" },
  ],
  [StarWarsResource.Films]: [
    { name: "Title", uid: "title" },
    { name: "Episode ID", uid: "episode_id" },
    { name: "Release Date", uid: "release_date" },
    { name: "Producer", uid: "producer" },
  ],
  [StarWarsResource.Planets]: [
    { name: "Name", uid: "name" },
    { name: "Rotation Period", uid: "rotation_period" },
    { name: "Orbital Period", uid: "orbital_period" },
    { name: "Climate", uid: "climate" },
    { name: "Gravity", uid: "gravity" },
    { name: "Population", uid: "population" },
  ],
  [StarWarsResource.Species]: [
    { name: "Name", uid: "name" },
    { name: "Classification", uid: "classification" },
    { name: "Designation", uid: "designation" },
    { name: "Language", uid: "language" },
  ],
  [StarWarsResource.Vehicles]: [
    { name: "Name", uid: "name" },
    { name: "Model", uid: "model" },
    { name: "Cost in Credits", uid: "cost_in_credits" },
    { name: "Manufacturer", uid: "manufacturer" },
    { name: "Vehicle Class", uid: "vehicle_class" },
  ],
  [StarWarsResource.Starships]: [
    { name: "Name", uid: "name" },
    { name: "Model", uid: "model" },
    { name: "Cost in Credits", uid: "cost_in_credits" },
    { name: "Manufacturer", uid: "manufacturer" },
    { name: "Starship Class", uid: "starship_class" },
  ],
} satisfies Record<StarWarsResource, Columns>;
