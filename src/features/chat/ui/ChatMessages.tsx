import { formatTime } from "@shared/lib/formatTime";
import type { ChatMessage } from "@features/chat/model/types";

type Props = {
  messages: ChatMessage[];
};

export function ChatMessages({ messages }: Props) {
  return (
    <div className="h-120 overflow-auto border rounded p-3 space-y-2 bg-primary text-primary-foreground">
      {messages.map((m) => (
        <div
          key={m.id}
          className={`flex ${m.author === "me" ? "justify-end" : "justify-start"}`}
        >
          <div className="flex flex-col max-w-full">
            <span
              key={m.id}
              className={
                "block px-3 py-2 rounded-lg text-sm wrap-break-words w-fit max-w-[90%] sm:max-w-[90%] " +
                (m.author === "me"
                  ? "bg-chat-outgoing text-chat-outgoing-foreground"
                  : "bg-chat-incoming text-chat-incoming-foreground")
              }
            >
              {m.text}
            </span>
            <span className="text-xs text-muted-foreground ml-1">
              {formatTime(m.at)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
