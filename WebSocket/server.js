const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const Port = process.env.Port || 4000;
const io = new Server(httpServer, {
  /* options */
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

let Callers = [];

function addUser(user) {
  console.log("adding user");
  if (user?.name === "") return;
  Callers.push(user);
}

io.on("connection", (socket) => {
  console.log("socket ====", socket.id);

  socket.on("addUser", addUser);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

console.log("all callers ", Callers);
httpServer.listen(Port);
