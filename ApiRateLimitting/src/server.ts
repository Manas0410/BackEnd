import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.status(200).send("api is working");
});
app.listen(port, () => {
  console.log("app is running on http://localhost:3000");
});
