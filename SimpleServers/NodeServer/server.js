const http = require("http");
const url = require("url");
const port = 8002;

const server = http.createServer(async (req, res) => {
  try {
    const receivedUrl = url.parse(req.url, true);
    console.log(receivedUrl, "r");
    if (receivedUrl.pathname === "/greetings") {
      const queryName = receivedUrl.query.name;
      if (queryName) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Hello ${queryName}`);
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Hello there`);
      }
    } else if (receivedUrl.pathname === "/products") {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.text();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Node server running`);
    }
  } catch (err) {
    console.log(err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(`Internal Server Error`);
  }
});

server.listen(port, () => {
  console.log(`Node server running on port ${port}`);
});
