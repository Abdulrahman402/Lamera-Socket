const express = require("express");
const app = express();
/*@ here we include express-framework @*/

/*@ here we include express-framework @*/
const cors = require("cors");
app.use(cors());
/*@ here we include express-framework @*/

/*@ here we include Socket.io @*/
const http = require("http").Server(app);
const io = require("socket.io")(http);

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
    io.to("1fe35579-5ce7-46ec-89e0-7e7236700297").emit("tableOnline", data);
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
http.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
