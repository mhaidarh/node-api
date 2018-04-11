const express = require("express");
const app = express();

const profile = {
  name: "Haidar",
  age: 30
};

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/profile", (req, res) => {
  res.send(profile);
});

app.listen(3000, () => console.log("Server is listening on localhost:3000"));
