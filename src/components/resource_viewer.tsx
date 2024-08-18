import { Card, CardBody } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { type FC, useMemo } from "react";

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

import { FilmViewer } from "./resource/film_viewer";
import { PersonViewer } from "./resource/person_viewer";
import { PlanetViewer } from "./resource/planet_viewer";
import { SpeciesViewer } from "./resource/species_viewer";
import { StarshipViewer } from "./resource/startship_viewer";
import { VehicleViewer } from "./resource/vehicle_viewer";

/**
 * The component to display any star wars resource.
 */
export const ResourceViewer: FC<{ type: StarWarsResource; id: number }> = ({
  type,
  id,
}) => {
  /**
   * Query the resource based on the type and id from the api.
   */
  const query = useQuery<AnyStarWarsResource>({ queryKey: [type, id] });

  /**
   * Determine the content to display based on the resource type.
   */
  const content = useMemo(() => {
    if (!query.data) return "Loading...";

    // Switch over the resource type and render the corresponding component
    switch (type) {
      case StarWarsResource.People:
        return <PersonViewer person={query.data as StarWarsPerson} />;
      case StarWarsResource.Planets:
        return <PlanetViewer planet={query.data as StarWarsPlanet} />;
      case StarWarsResource.Films:
        return <FilmViewer film={query.data as StarWarsFilm} />;
      case StarWarsResource.Starships:
        return <StarshipViewer starship={query.data as StarWarsStarship} />;
      case StarWarsResource.Vehicles:
        return <VehicleViewer vehicle={query.data as StarWarsVehicle} />;
      case StarWarsResource.Species:
        return <SpeciesViewer species={query.data as StarWarsSpecies} />;
      default:
        return "Unknown resource type";
    }
  }, [query.data, type]);

  return (
    <Card>
      <CardBody>{content}</CardBody>
    </Card>
  );
};
