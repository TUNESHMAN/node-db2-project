// Import the prebaked middleware
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

// Make use of the middleware
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger);

// Flesh out a dummy API
server.get("/", (req, res) => {
  res.json(`<h2>Welcome to Cars endpoint</h2>`);
});

// If the endpoint is invalid
server.get("*", (req, res) => {
  res.send({ message: `Sorry, this is an invalid path` });
});

// Building a logger middleware
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url} from ${req.get(
      "Origin"
    )}`
  );
  next();
}
// Export the server to the outer world
module.exports = server;
