
import { Button } from "@/shared/ui/shadcn/ui/button";
import type { FormEvent } from "react";

type Props = {
  input: string;
  setInput: (value: string) => void;
  sendMessage: (text: string) => void;
};

export const ChatInput = ({ input, setInput, sendMessage }: Props) => {
  return (
    <form
      className="flex gap-2"
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        const text = input.trim();
        if (text) {
          sendMessage(text);
          setInput("");
        }
      }}
    >
      <input
        area-label="chat input"
        className="flex-1 rounded border px-2 py-1 bg-primary text-primary-foreground"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <Button variant="default" size="lg" aria-label="Submit">
        Send
      </Button>
    </form>
  );
};
