import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute, useNavigate } from "@tanstack/react-router";

import { queryClient } from "~/api/api";
import { Layout } from "~/components/layout/layout";

const RootRoute = () => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={(path) => navigate({ to: path })}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Outlet />
        </Layout>
      </QueryClientProvider>
    </NextUIProvider>
  );
};

export const Route = createRootRoute({
  component: RootRoute,
});
