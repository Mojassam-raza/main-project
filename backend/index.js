const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");

const UserRouter = require('./routers/userRouter.js');
// const EmailRouter = require('./routers/emailRouter.js');
const APIkeyRouter = require('./routers/APIkeyRouter.js');
const cors = require('cors');

const app = express();
const PORT = 5000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

// middlewares
app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use(express.json());
app.use('/user', UserRouter);
app.use('/apikey', APIkeyRouter);

// Endpoint or route
app.get('/', (req, res) => {
    res.send('response from express')
});

// socket code
io.on("connection", (socket) => {
  console.log(`client connected: ${socket.id}`);

  // Listen for incoming messages
  socket.on("sendMessage", (message) => {
    console.log("Message received:", message);
    
    // Broadcast message to all connected clients
    io.emit("receiveMessage", message);
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    console.log(`client disconnected: ${socket.id}`);
  });

  // Optional: Handle errors
  socket.on("error", (error) => {
    console.error(`Socket error: ${error}`);
  });
});

httpServer.listen(PORT, () => {
    console.log('server started');
});



// --------------------------------------------





// // Keeps track of { socketId -> name }
// const users = new Map();

// export default function attachSockets(io) {
//   io.on("connection", (socket) => {
//     console.log("✅ connected:", socket.id);

//     // Client sends their name once joined
//     socket.on("join", (name, ack) => {
//       const displayName = String(name || "Anonymous").slice(0, 40);
//       users.set(socket.id, displayName);
//       socket.broadcast.emit("user:join", { id: socket.id, name: displayName });
//       ack?.({ ok: true, id: socket.id, name: displayName });
//     });

//     // Chat message (text only; server attaches name/time)
//     socket.on("message", (text, ack) => {
//       const name = users.get(socket.id) || "Anonymous";
//       const msg = { 
//         id: socket.id, 
//         name, 
//         text: String(text || "").slice(0, 1000), 
//         time: Date.now() 
//       };
//       io.emit("message", msg);
//       ack?.({ ok: true });
//     });

//     // Typing indicator
//     socket.on("typing", (isTyping) => {
//       const name = users.get(socket.id) || "Anonymous";
//       socket.broadcast.emit("typing", { id: socket.id, name, isTyping: !!isTyping });
//     });

//     // ----------------------------
//     // 🔥 AUDIO CALL SIGNALING EVENTS
//     // ----------------------------

//     // Caller sends an offer → forward to target user
//     socket.on("call:offer", ({ targetId, offer }) => {
//       io.to(targetId).emit("call:offer", { from: socket.id, offer });
//     });

//     // Callee sends an answer → forward back to caller
//     socket.on("call:answer", ({ targetId, answer }) => {
//       io.to(targetId).emit("call:answer", { from: socket.id, answer });
//     });

//     // Exchange ICE candidates
//     socket.on("call:candidate", ({ targetId, candidate }) => {
//       io.to(targetId).emit("call:candidate", { from: socket.id, candidate });
//     });

//     // Handle disconnect
//     socket.on("disconnect", () => {
//       const name = users.get(socket.id);
//       if (name) {
//         socket.broadcast.emit("user:left", { id: socket.id, name });
//         users.delete(socket.id);
//       }
//       console.log("❌ disconnected:", socket.id);
//     });
//   });
// }