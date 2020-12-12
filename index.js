const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", socket => {
  io.emit("test", "Test");
  socket.on("join", data => {
    try {
      console.log(data);
      console.log("Cashier has connected to Socket.io Real Time");
      socket.join(data.roomID);
      io.emit("join", data);
    } catch (err) {
      console.log(err.message);
      socket.emit("error", { errMessage: err.message });
    }
  });

  console.log("hi");
  socket.on("tableOnline", data => {
    console.log(data);
    socket.broadcast
      .to("1fe35579-5ce7-46ec-89e0-7e7236700297")
      .emit("Status", data);
  });

  socket.on("goOnline", data => {
    console.log(data);
    socket.broadcast
      .to("1fe35579-5ce7-46ec-89e0-7e7236700297")
      .emit("Status", data);
  });

  socket.on("goOfline", data => {
    console.log(data);
    socket.broadcast
      .to("1fe35579-5ce7-46ec-89e0-7e7236700297")
      .emit("Status", data);
  });

  socket.on("Check", data => {
    console.log(data);
    socket.broadcast
      .to("1fe35579-5ce7-46ec-89e0-7e7236700297")
      .emit("Status", data);
  });

  socket.on("Waiter", data => {
    console.log(data);
    socket.broadcast
      .to("1fe35579-5ce7-46ec-89e0-7e7236700297")
      .emit("Status", data);
  });
});

const port = process.env.PORT || 2000;
server.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
