import { createFileRoute } from "@tanstack/react-router";
import type { FC } from "react";

const IndexRoute: FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">SWAPI App</h1>
      <p>A simple app to explore the Star Wars API.</p>
      <p className="mt-4 text-primary">
        Select a resource from the top menu to get started.
      </p>
      <p className="mt-16">
        Made by{" "}
        <a href="https://github.com/lkwr" className="underline">
          Lukas Heizmann
        </a>
      </p>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: IndexRoute,
});
