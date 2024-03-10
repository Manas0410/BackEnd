const app = require("http");
const port = 8002;

const server = app.createServer((req, res) => {
  res.statusCode = 200;
  res.end(`node server running`);
});

server.listen(port, () => {
  console.log(`node server running on port ${port}`);
});
