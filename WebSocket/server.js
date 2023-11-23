const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const Port = process.env.Port || 4000;
const io = new Server(httpServer, {
  /* options */
  cors: {
    origin: "https://localhost:8801",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("socket ====", socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(Port);
