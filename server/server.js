const express = require("express");
require("dotenv").config();
app = express();
const { PORT } = process.env

app.get("/api/v1", (req, res) => {
  res.send("hello !!!!");
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));