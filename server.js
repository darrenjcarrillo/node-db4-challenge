const express = require("express");

// const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
// server.use("/api/recipes_ingredients");

module.exports = server;
