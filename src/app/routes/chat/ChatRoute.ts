import { ChatPage } from "@/pages/chat";
import { RootRoute } from "../root/RootRoute";
import { createRoute } from "@tanstack/react-router";

export const ChatRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/chat",
  component: () => ChatPage,
});