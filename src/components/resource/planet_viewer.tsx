import { Divider } from "@nextui-org/react";
import type { FC } from "react";

import type { StarWarsPlanet } from "~/api/types";

import { ResourceLinkList } from "./resource_link";

/**
 * The viewer component for a planet resource.
 */
export const PlanetViewer: FC<{ planet: StarWarsPlanet }> = ({ planet }) => {
  return (
    <>
      <h1 className="text-center text-3xl">{planet.name}</h1>
      <Divider className="my-2" />
      <ul>
        <li>
          <span className="font-bold">Rotation Period:</span>{" "}
          <span className="text-primary">{planet.rotation_period}</span>
        </li>
        <li>
          <span className="font-bold">Orbital Period:</span>{" "}
          <span className="text-primary">{planet.orbital_period}</span>
        </li>
        <li>
          <span className="font-bold">Diameter:</span>{" "}
          <span className="text-primary">{planet.diameter}</span>
        </li>
        <li>
          <span className="font-bold">Climate:</span>{" "}
          <span className="text-primary">{planet.climate}</span>
        </li>
        <li>
          <span className="font-bold">Gravity:</span>{" "}
          <span className="text-primary">{planet.gravity}</span>
        </li>
        <li>
          <span className="font-bold">Terrain:</span>{" "}
          <span className="text-primary">{planet.terrain}</span>
        </li>
        <li>
          <span className="font-bold">Surface Water:</span>{" "}
          <span className="text-primary">{planet.surface_water}</span>
        </li>
        <li>
          <span className="font-bold">Population:</span>{" "}
          <span className="text-primary">{planet.population}</span>
        </li>
      </ul>
      <Divider className="my-2" />
      <div className="flex flex-col gap-2">
        <ResourceLinkList title="Residents" urls={planet.residents} />
        <ResourceLinkList title="Films" urls={planet.films} />
      </div>
    </>
  );
};
