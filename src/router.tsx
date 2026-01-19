import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

// Create a new router instance
export const getRouter = () => {
  return routerWithQueryClient(
    createRouter({
      routeTree,
      defaultPreload: "viewport",
      scrollRestoration: true,
      defaultPreloadStaleTime: 0,
      context: { queryClient },
    }),
    queryClient
  );
};
