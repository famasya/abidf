import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/c")({
  component: BlogLayout,
});

function BlogLayout() {
  return <Outlet />;
}
