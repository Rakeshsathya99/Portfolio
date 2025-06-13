import React, { useState, useRef } from "react";

// You may use axios or fetch. Here, fetch is used for simplicity.
// WARNING: Do NOT expose your OpenAI API key in production! Use a backend proxy in real apps.

const SYSTEM_PROMPT =
  "You are an AI assistant trained to answer questions about Rakesh S, a React developer. You should provide clear, friendly, and concise answers about his portfolio, skills, projects, and interests.";

const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<
    { role: "system" | "user" | "assistant"; content: string }[]
  >([
    { role: "system", content: SYSTEM_PROMPT },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(true);

  // Scroll to bottom on new message
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    setError(null);
    setLoading(true);
    const newMessages = [
      ...messages,
      { role: "user" as const, content: input.trim() },
    ];
    setMessages(newMessages);
    setInput("");
    try {
        const res = await fetch("http://localhost:5000/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              messages: [
                { role: "user", content: "Tell me about Rakesh's skills." }
              ]
            }),
          });
      if (!res.ok) throw new Error("Failed to fetch AI response");
      const data = await res.json();
            setMessages([
  ...newMessages,
  { role: "assistant", content: data.reply },
]);
    } catch (err: unknown) {
      let errorMsg = "Something went wrong. Please try again or check your API key.";
      if (err instanceof Error) errorMsg = err.message;
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  if (!open) {
    return (
      <button
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-3 shadow-lg z-50 hover:bg-blue-700 transition"
        aria-label="Open chat widget"
        onClick={() => setOpen(true)}
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M12 3C7.03 3 3 6.58 3 11c0 1.61.62 3.09 1.7 4.36-.13.5-.46 1.7-.7 2.64-.09.34.23.65.57.57.94-.24 2.14-.57 2.64-.7C8.91 20.38 10.39 21 12 21c4.97 0 9-3.58 9-8s-4.03-8-9-8z" fill="currentColor"/>
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 max-w-xs bg-white shadow-2xl rounded-2xl flex flex-col z-50 border border-gray-200">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-blue-600 rounded-t-2xl">
        <h2 className="text-white font-semibold text-lg">Ask Me Anything</h2>
        <button
          className="text-white hover:text-gray-200 text-xl font-bold"
          aria-label="Close chat widget"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-50" style={{ maxHeight: 260 }}>
        {messages
          .filter((msg) => msg.role !== "system")
          .map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-3 py-2 rounded-lg max-w-[80%] text-sm whitespace-pre-line shadow-sm
                  ${msg.role === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"}
                `}
              >
                {msg.content}
              </div>
            </div>
          ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-3 py-2 rounded-lg bg-gray-200 text-gray-500 text-sm animate-pulse max-w-[80%]">
              Thinking…
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {error && (
        <div className="px-4 py-2 text-xs text-red-600 bg-red-50 border-t border-red-200">{error}</div>
      )}
      <div className="flex items-center gap-2 px-4 py-3 border-t border-gray-100 bg-white">
        <input
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          aria-label="Type your question"
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition"
          aria-label="Send message"
        >
          Send
        </button>
      </div>
      <div className="px-4 pb-2 text-[10px] text-gray-400 text-center select-none">
        {/* WARNING: Replace the API key in the code above with your own. Never expose it in production! */}
        Powered by OpenRouter AI
      </div>
    </div>
  );
};

export default ChatWidget; 