import { useEffect, useRef, useState, useCallback } from "react";

type ChatMessage = {
  id: string;
  text: string;
  at: number;
  author: "me" | "server";
};

export default function ChatPage() {
  const wsRef = useRef<WebSocket | null>(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  // Connecting to a WebSocket when mounting
  // we are signing up event listeners
  useEffect(() => {
    const ws = new WebSocket("wss://ws.ifelse.io"); // testing server
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

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <div className="text-sm">{connected ? "Connected" : "Disconnected"}</div>

      <div className="h-140 overflow-auto rounded border bg-white p-3 space-y-2">
        {messages.map((m) => (
          <div
            key={m.id}
            className={m.author === "me" ? "text-right" : "text-left"}
          >
            <span
              key={m.id}
              className={
                "inline-block rounded px-2 py-1 " +
                (m.author === "me" ? "bg-blue-100" : "bg-gray-100")
              }
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>

      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          const text = input.trim();
          if (text) {
            sendMessage(text);
            setInput("");
          }
        }}
      >
        <input
          className="flex-1 rounded border px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="rounded bg-blue-600 text-white px-3 py-1"
        >
          Send
        </button>
      </form>
    </div>
  );
}
