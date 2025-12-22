import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import { io } from "socket.io-client";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const endRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    // Initialize socket connection
    socketRef.current = io("http://localhost:5000", { autoConnect: true });

    // Listen for incoming messages
    socketRef.current.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Listen for connection events
    socketRef.current.on("connect", () => {
      console.log("Connected to server");
    });

    socketRef.current.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const send = () => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sender: "me",
    };

    // Emit message to server
    socketRef.current?.emit("sendMessage", newMessage);

    // Add to local state
    setMessages((prev) => [...prev, newMessage]);
    setText("");
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-[680px] h-[800px] bg-[#111]/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl flex flex-col p-4">
      <p className="text-center text-gray-200 font-medium mb-2">
        <strong>Ayush</strong> chatting live with <strong>Ankush</strong>
      </p>

      <div className="flex-1 overflow-y-auto space-y-2 pr-2">
        {messages.map((m) => (
          <MessageBubble key={m.id} msg={m} />
        ))}
        <div ref={endRef}></div>
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 mt-3">
        <input
          type="text"
          placeholder="type a message"
          className="flex-1 bg-[#2e2e2e] text-white px-4 py-3 rounded-full outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button
          onClick={send}
          className="px-6 py-2 bg-white text-black rounded-full font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
}
