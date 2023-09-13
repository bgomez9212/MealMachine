const express = require("express");
require("dotenv").config();
app = express();
const { PORT } = process.env
const router = require('./router')
const path = require("path");

app.use(express.json())
app.use('/api', router)

app.listen(3000, () => console.log(`start listening on port : ${3000}`));