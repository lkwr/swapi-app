import { createLazyFileRoute } from "@tanstack/react-router";
import type { FC } from "react";

import { ResourceViewer } from "~/components/resource_viewer";
import { parseResourceType } from "~/utils/resource.util";

const ResourceRoute: FC = () => {
  const { resource, id } = Route.useParams();

  // Parse the resource type from the route parameter
  const resourceType = parseResourceType(resource);
  if (!resourceType) return <>Invalid resource type</>;

  // Parse the id from the route parameter
  const idNumber = parseInt(id);
  if (isNaN(idNumber)) return <>Invalid id</>;

  return <ResourceViewer type={resourceType} id={idNumber} />;
};

export const Route = createLazyFileRoute("/$resource/$id")({
  component: ResourceRoute,
});
