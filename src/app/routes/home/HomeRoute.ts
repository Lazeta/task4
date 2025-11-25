import { HomePage } from "@/pages/home";
import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "../root/RootRoute";

export const HomeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: HomePage,
});