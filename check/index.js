const express = require("express");
const bodyParser = require("body-parser");
const isEmpty = require("is-empty");
const check = require('./check')
const PORT = 8000;

const app = express();
app.use(bodyParser.json());

app.get("/", (_, res) => res.send("Hello from raedan-check"));

app.post("/", (req, res) => {
  if (isEmpty(req.body) || isEmpty(req.body.data)) {
    res.send("Error: You must send a body with `data` attribute to `/`");
  }
  res.send(check(req.body.data));
});

app.listen(PORT, () => console.log(`raedan-check listening on port ${PORT}`));
