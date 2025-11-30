// import { useState, useRef, useEffect } from "react";
// import MessageBubble from "./MssageBubble";

// export default function ChatBox() {
//   const [messages, setMessages] = useState([
//     { id: 1, text: "", time: "12:21 PM", sender: "other" },
//     { id: 2, text: "hello", time: "12:28 PM", sender: "me" },
//     { id: 3, text: "hi ayush", time: "12:28 PM", sender: "other" },
//     { id: 4, text: "hello ankuch", time: "12:31 PM", sender: "other" },
//     { id: 5, text: "hello", time: "12:32 PM", sender: "other" }
//   ]);

//   const [text, setText] = useState("");
//   const chatEndRef = useRef(null);

//   const sendMessage = () => {
//     if (!text.trim()) return;
//     const newMsg = {
//       id: Date.now(),
//       text,
//       time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//       sender: "me",
//     };
//     setMessages([...messages, newMsg]);
//     setText("");
//   };

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="chat-box">
//       <p className="chat-header">
//         <strong>Ayush</strong> chatting live with <strong>Ankush</strong>
//       </p>

//       <div className="chat-area">
//         {messages.map((msg) => (
//           <MessageBubble key={msg.id} msg={msg} />
//         ))}
//         <div ref={chatEndRef}></div>
//       </div>

//       <div className="input-section">
//         <input
//           type="text"
//           value={text}
//           placeholder="type a message"
//           onChange={(e) => setText(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }


// ----------------------------------------------------------------------------------------


import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    // { id: 1, text: "hi", time: "12:21 PM", sender: "other" },
    // { id: 2, text: "hello", time: "12:28 PM", sender: "me" },
    // { id: 3, text: "hi ayush", time: "12:28 PM", sender: "other" },
    // { id: 4, text: "hello ankuch", time: "12:31 PM", sender: "other" },
    // { id: 5, text: "hello", time: "12:32 PM", sender: "other" },
  ]);

  const [text, setText] = useState("");
  const endRef = useRef(null);

  const send = () => {
    if (!text.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sender: "me",
      },
    ]);

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
