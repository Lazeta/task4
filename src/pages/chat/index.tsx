import { useState } from "react";
import useChat from "@features/chat/model/useChat";
import { ChatMessages } from "@features/chat/ui/ChatMessages";
import { ChatInput } from "@features/chat/ui/ChatInput";

export default function ChatPage() {
  const { connected, messages, sendMessage } = useChat();
  const [input, setInput] = useState("");

  return (
    <div className="space-y-4 max-w-[750px] mx-auto">
      <span className="text-sm">
        {connected ? "Connected..." : "Disconnected..."}
      </span>
      <ChatMessages messages={messages} />
      <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
    </div>
  );
}
