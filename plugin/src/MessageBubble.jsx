// export default function MessageBubble({ msg }) {
//   return (
//     <div className={`bubble ${msg.sender === "me" ? "right" : "left"}`}>
//       {msg.text && <p className="bubble-text">{msg.text}</p>}
//       <span className="time">{msg.time}</span>
//     </div>
//   );
// }

// --------------------------------------------------

export default function MessageBubble({ msg }) {
  const isMe = msg.sender === "me";

  return (
    <div
      className={`max-w-[70%] px-4 py-3 rounded-xl text-white ${
        isMe ? "bg-[#1b1b1b] self-end" : "bg-[#3a3a3a] self-start"
      }`}
    >
      {msg.text && <p className="text-sm">{msg.text}</p>}

      <span className="block text-[10px] opacity-60 text-right mt-1">
        {msg.time}
      </span>
    </div>
  );
}

