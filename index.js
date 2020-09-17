const express = require('express');
const usePost = require('./posts/posts-router');
// const server = require("./api/server.js");
const server = express();
// const p = require("./posts/posts-router.js");
server.use(express.json());
server.use("/api/posts", usePost);

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
