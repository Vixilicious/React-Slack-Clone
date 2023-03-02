import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Vix's server");
});

app.listen(3000);
