// Bring in the server
const server = require("./server");

const PORT = process.env.PORT || 8000;

// listen to the server
server.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
