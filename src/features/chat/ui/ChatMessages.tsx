import { formatTime } from "@shared/lib/formatTime";
import type { ChatMessage } from "@features/chat/model/types";

type Props = {
  messages: ChatMessage[];
};

export function ChatMessages({ messages }: Props) {
  return (
    <div className="h-140 overflow-auto rounded border bg-gray-100 p-3 space-y-2">
      {messages.map((m) => (
        <div
          key={m.id}
          className={m.author === "me" ? "text-right" : "text-left"}
        >
          <span
            key={m.id}
            className={
              "inline-block rounded px-2 py-1 " +
              (m.author === "me" ? "bg-blue-200" : "bg-gray-200")
            }
          >
            {m.text}
          </span>
          <span className="ml-2 text-xs text-gray-500">{formatTime(m.at)}</span>
        </div>
      ))}
    </div>
  );
}
