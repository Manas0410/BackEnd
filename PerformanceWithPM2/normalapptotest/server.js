import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Api working");
});

app.listen(3000, () => {
  console.log("running");
});
