import { Divider } from "@nextui-org/react";
import type { FC } from "react";

import type { StarWarsSpecies } from "~/api/types";

import { ResourceLink, ResourceLinkList } from "./resource_link";

/**
 * The viewer component for a species resource.
 */
export const SpeciesViewer: FC<{ species: StarWarsSpecies }> = ({
  species,
}) => {
  return (
    <>
      <h1 className="text-center text-3xl">{species.name}</h1>
      <Divider className="my-2" />
      <ul>
        <li>
          <span className="font-bold">Classification:</span>{" "}
          <span className="text-primary">{species.classification}</span>
        </li>
        <li>
          <span className="font-bold">Designation:</span>{" "}
          <span className="text-primary">{species.designation}</span>
        </li>
        <li>
          <span className="font-bold">Average Height:</span>{" "}
          <span className="text-primary">{species.average_height}</span>
        </li>
        <li>
          <span className="font-bold">Skin Colors:</span>{" "}
          <span className="text-primary">{species.skin_colors}</span>
        </li>
        <li>
          <span className="font-bold">Hair Colors:</span>{" "}
          <span className="text-primary">{species.hair_colors}</span>
        </li>
        <li>
          <span className="font-bold">Eye Colors:</span>{" "}
          <span className="text-primary">{species.eye_colors}</span>
        </li>
        <li>
          <span className="font-bold">Average Lifespan:</span>{" "}
          <span className="text-primary">{species.average_lifespan}</span>
        </li>
        <li>
          <span className="font-bold">Homeworld:</span>{" "}
          {species.homeworld ? (
            <ResourceLink url={species.homeworld} />
          ) : (
            <span className="italic text-primary">None</span>
          )}
        </li>
        <li>
          <span className="font-bold">Language:</span>{" "}
          <span className="text-primary">{species.language}</span>
        </li>
      </ul>
      <Divider className="my-2" />
      <div className="flex flex-col gap-2">
        <ResourceLinkList title="People" urls={species.people} />
        <ResourceLinkList title="Films" urls={species.films} />
      </div>
    </>
  );
};
