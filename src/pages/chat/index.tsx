import { useState } from "react";
import useChat from "@features/chat/model/useChat";
import { ChatMessages } from "@features/chat/ui/ChatMessages";
import { ChatInput } from "@features/chat/ui/ChatInput";

export default function ChatPage() {
  const { connected, messages, sendMessage } = useChat();
  const [input, setInput] = useState("");

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <div className="text-sm">
        {connected ? "Connected" : "Disconnected"}
      </div>
      <ChatMessages messages={messages} />
      <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
    </div>
  );
}
