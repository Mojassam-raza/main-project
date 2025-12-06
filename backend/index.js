const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");

const UserRouter = require('./routers/userRouter.js');
const EmailRouter = require('./routers/emailRouter.js');
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
app.use('/product', EmailRouter);

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