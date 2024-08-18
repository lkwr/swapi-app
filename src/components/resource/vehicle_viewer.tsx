import { Divider } from "@nextui-org/react";
import type { FC } from "react";

import type { StarWarsVehicle } from "~/api/types";

import { ResourceLinkList } from "./resource_link";

/**
 * The viewer component for a vehicle resource.
 */
export const VehicleViewer: FC<{ vehicle: StarWarsVehicle }> = ({
  vehicle,
}) => {
  return (
    <>
      <h1 className="text-center text-3xl">{vehicle.name}</h1>
      <Divider className="my-2" />
      <ul>
        <li>
          <span className="font-bold">Model:</span>{" "}
          <span className="text-primary">{vehicle.model}</span>
        </li>
        <li>
          <span className="font-bold">Manufacturer:</span>{" "}
          <span className="text-primary">{vehicle.manufacturer}</span>
        </li>
        <li>
          <span className="font-bold">Cost in Credits:</span>{" "}
          <span className="text-primary">{vehicle.cost_in_credits}</span>
        </li>
        <li>
          <span className="font-bold">Length:</span>{" "}
          <span className="text-primary">{vehicle.length}</span>
        </li>
        <li>
          <span className="font-bold">Max Atmosphering Speed:</span>{" "}
          <span className="text-primary">{vehicle.max_atmosphering_speed}</span>
        </li>
        <li>
          <span className="font-bold">Crew:</span>{" "}
          <span className="text-primary">{vehicle.crew}</span>
        </li>
        <li>
          <span className="font-bold">Passengers:</span>{" "}
          <span className="text-primary">{vehicle.passengers}</span>
        </li>
        <li>
          <span className="font-bold">Cargo Capacity:</span>{" "}
          <span className="text-primary">{vehicle.cargo_capacity}</span>
        </li>
        <li>
          <span className="font-bold">Consumables:</span>{" "}
          <span className="text-primary">{vehicle.consumables}</span>
        </li>
        <li>
          <span className="font-bold">Vehicle Class:</span>{" "}
          <span className="text-primary">{vehicle.vehicle_class}</span>
        </li>
      </ul>
      <Divider className="my-2" />
      <div className="flex flex-col gap-2">
        <ResourceLinkList title="Pilots" urls={vehicle.pilots} />
        <ResourceLinkList title="Films" urls={vehicle.films} />
      </div>
    </>
  );
};
