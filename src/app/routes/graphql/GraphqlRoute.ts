import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "../root/RootRoute";
import { PeopleListPage } from "@/pages/graphql";

export const GraphqlRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/graphql",
  component: PeopleListPage,
});