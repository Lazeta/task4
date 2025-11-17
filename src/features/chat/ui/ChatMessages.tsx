import { formatTime } from "@/shared/lib/formatTime";
import type { ChatMessage } from "@/features/chat/model/types";

type Props = {
  messages: ChatMessage[];
};

export const ChatMessages = ({ messages }: Props) => {
  return (
    <div className="h-120 overflow-auto border rounded p-3 space-y-2 bg-primary text-primary-foreground">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.author === "me" ? "justify-end" : "justify-start"}`}
        >
          <div className="flex flex-col max-w-full">
            <span
              key={message.id}
              className={
                "block px-3 py-2 rounded-lg text-sm wrap-break-words w-fit max-w-[90%] sm:max-w-[90%] " +
                (message.author === "me"
                  ? "bg-chat-outgoing text-chat-outgoing-foreground"
                  : "bg-chat-incoming text-chat-incoming-foreground")
              }
            >
              {message.text}
            </span>
            <span className="text-xs text-muted-foreground ml-1">
              {formatTime(message.at)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
