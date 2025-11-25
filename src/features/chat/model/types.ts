export type ChatMessage = {
  id: string;
  text: string;
  at: number;
  author: "me" | "server";
};