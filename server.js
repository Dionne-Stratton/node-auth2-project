const express = require("express");
const server = express();
const Router = require("./resource/router");

server.use(express.json());

server.use("/api/resources", Router);

server.get("/", (_, res) => {
  res.status(200).json({ message: "server running" });
});

module.exports = server;
