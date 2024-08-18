import { Divider } from "@nextui-org/react";
import type { FC } from "react";

import type { StarWarsPerson } from "~/api/types";

import { ResourceLink, ResourceLinkList } from "./resource_link";

/**
 * The viewer component for a person resource.
 */
export const PersonViewer: FC<{ person: StarWarsPerson }> = ({ person }) => {
  return (
    <>
      <h1 className="text-center text-3xl">{person.name}</h1>
      <Divider className="my-2" />
      <ul>
        <li>
          <span className="font-bold">Height:</span>{" "}
          <span className="text-primary">{person.height}</span>
        </li>
        <li>
          <span className="font-bold">Mass:</span>{" "}
          <span className="text-primary">{person.mass}</span>
        </li>
        <li>
          <span className="font-bold">Hair Color:</span>{" "}
          <span className="text-primary">{person.hair_color}</span>
        </li>
        <li>
          <span className="font-bold">Skin Color:</span>{" "}
          <span className="text-primary">{person.skin_color}</span>
        </li>
        <li>
          <span className="font-bold">Eye Color:</span>{" "}
          <span className="text-primary">{person.eye_color}</span>
        </li>
        <li>
          <span className="font-bold">Birth Year:</span>{" "}
          <span className="text-primary">{person.birth_year}</span>
        </li>
        <li>
          <span className="font-bold">Gender:</span>{" "}
          <span className="text-primary">{person.gender}</span>
        </li>
        <li>
          <span className="font-bold">Homeworld:</span>{" "}
          <ResourceLink url={person.homeworld} />
        </li>
      </ul>
      <Divider className="my-2" />
      <div className="flex flex-col gap-2">
        <ResourceLinkList title="Films" urls={person.films} />
        <ResourceLinkList title="Species" urls={person.species} />
        <ResourceLinkList title="Vehicles" urls={person.vehicles} />
        <ResourceLinkList title="Starships" urls={person.starships} />
      </div>
    </>
  );
};
