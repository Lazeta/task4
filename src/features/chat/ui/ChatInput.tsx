import type { FormEvent } from "react";

type Props = {
  input: string;
  setInput: (value: string) => void;
  sendMessage: (text: string) => void;
};

export function ChatInput({ input, setInput, sendMessage }: Props) {
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
  );
}
