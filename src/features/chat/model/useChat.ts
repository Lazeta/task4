import { useEffect, useRef, useState, useCallback } from "react";
import type { ChatMessage } from "./types";
import { ECHO_URL } from "@/shared/config/api";

export const useChat = () => {
  const wsRef = useRef<WebSocket | null>(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Connecting to a WebSocket when mounting
  // we are signing up event listeners
  useEffect(() => {
    const ws = new WebSocket(ECHO_URL);
    wsRef.current = ws;

    ws.addEventListener("open", () => setConnected(true));
    ws.addEventListener("close", () => setConnected(false));
    ws.addEventListener("message", (event) => {
      // We guarantee that we will receive a string from WebSocket
      const text = typeof event.data === "string" ? event.data : String(event.data);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          text, // this is the message from the server
          at: Date.now(),
          author: "server",
        },
      ]);
    });
    return () => ws.close();
  }, []);

  // Sending a message without reloading
  // everything we send to the server will also return as a response from the server    
  const sendMessage = useCallback((text: string) => {
    const ws = wsRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    ws.send(text);
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text,
        at: Date.now(),
        author: "me",
      },
    ]);
  }, []);

  return { connected, messages, sendMessage }
}