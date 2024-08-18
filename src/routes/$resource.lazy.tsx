import { createLazyFileRoute } from "@tanstack/react-router";
import type { FC } from "react";

import { ResourceList } from "~/components/resource_list/resource_list";
import { parseResourceType } from "~/utils/resource.util";

const ResourcesRoute: FC = () => {
  const { page } = Route.useSearch<{ page: number }>();
  const { resource } = Route.useParams();

  // Parse the resource type from the route parameter
  const resourceType = parseResourceType(resource);
  if (!resourceType) return <>Invalid resource type</>;

  return <ResourceList type={resourceType} page={page ?? 1} />;
};

export const Route = createLazyFileRoute("/$resource")({
  component: ResourcesRoute,
});
