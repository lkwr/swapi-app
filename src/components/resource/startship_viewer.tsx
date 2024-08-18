import { Divider } from "@nextui-org/react";
import type { FC } from "react";

import type { StarWarsStarship } from "~/api/types";

import { ResourceLinkList } from "./resource_link";

/**
 * The viewer component for a starship resource.
 */
export const StarshipViewer: FC<{ starship: StarWarsStarship }> = ({
  starship,
}) => {
  return (
    <>
      <h1 className="text-center text-3xl">{starship.name}</h1>
      <Divider className="my-2" />
      <ul>
        <li>
          <span className="font-bold">Model:</span>{" "}
          <span className="text-primary">{starship.model}</span>
        </li>
        <li>
          <span className="font-bold">Manufacturer:</span>{" "}
          <span className="text-primary">{starship.manufacturer}</span>
        </li>
        <li>
          <span className="font-bold">Cost in Credits:</span>{" "}
          <span className="text-primary">{starship.cost_in_credits}</span>
        </li>
        <li>
          <span className="font-bold">Length:</span>{" "}
          <span className="text-primary">{starship.length}</span>
        </li>
        <li>
          <span className="font-bold">Max Atmosphering Speed:</span>{" "}
          <span className="text-primary">
            {starship.max_atmosphering_speed}
          </span>
        </li>
        <li>
          <span className="font-bold">Crew:</span>{" "}
          <span className="text-primary">{starship.crew}</span>
        </li>
        <li>
          <span className="font-bold">Passengers:</span>{" "}
          <span className="text-primary">{starship.passengers}</span>
        </li>
        <li>
          <span className="font-bold">Cargo Capacity:</span>{" "}
          <span className="text-primary">{starship.cargo_capacity}</span>
        </li>
        <li>
          <span className="font-bold">Consumables:</span>{" "}
          <span className="text-primary">{starship.consumables}</span>
        </li>
        <li>
          <span className="font-bold">Hyperdrive Rating:</span>{" "}
          <span className="text-primary">{starship.hyperdrive_rating}</span>
        </li>
        <li>
          <span className="font-bold">MGLT:</span>{" "}
          <span className="text-primary">{starship.MGLT}</span>
        </li>
        <li>
          <span className="font-bold">Starship Class:</span>{" "}
          <span className="text-primary">{starship.starship_class}</span>
        </li>
      </ul>
      <Divider className="my-2" />
      <div className="flex flex-col gap-2">
        <ResourceLinkList title="Pilots" urls={starship.pilots} />
        <ResourceLinkList title="Films" urls={starship.films} />
      </div>
    </>
  );
};
