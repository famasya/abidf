import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/writings")({
  component: BlogLayout,
});

function BlogLayout() {
  return <Outlet />;
}
