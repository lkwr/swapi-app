import { Divider } from "@nextui-org/react";
import type { FC } from "react";

import type { StarWarsFilm } from "~/api/types";

import { ResourceLinkList } from "./resource_link";

/**
 * The viewer component for a film resource.
 */
export const FilmViewer: FC<{ film: StarWarsFilm }> = ({ film }) => {
  return (
    <>
      <h1 className="text-center text-3xl">{film.title}</h1>
      <p>
        <span className="font-bold">Opening Crawl: </span>
        <br />
        <span className="italic text-primary">{film.opening_crawl}</span>
      </p>
      <Divider className="my-2" />
      <ul>
        <li>
          <span className="font-bold">Episode ID:</span>{" "}
          <span className="text-primary">{film.episode_id}</span>
        </li>

        <li>
          <span className="font-bold">Director:</span>{" "}
          <span className="text-primary">{film.director}</span>
        </li>
        <li>
          <span className="font-bold">Producer:</span>{" "}
          <span className="text-primary">{film.producer}</span>
        </li>
        <li>
          <span className="font-bold">Release Date:</span>{" "}
          <span className="text-primary">{film.release_date}</span>
        </li>
      </ul>
      <Divider className="my-2" />
      <div className="flex flex-col gap-2">
        <ResourceLinkList title="Characters" urls={film.characters} />
        <ResourceLinkList title="Planets" urls={film.planets} />
        <ResourceLinkList title="Starships" urls={film.starships} />
        <ResourceLinkList title="Vehicles" urls={film.vehicles} />
        <ResourceLinkList title="Species" urls={film.species} />
      </div>
    </>
  );
};
