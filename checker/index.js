const express = require("express");
const bodyParser = require("body-parser");
const PORT = 8000;

const app = express();
app.use(bodyParser.json());

app.get("/", (_, res) => res.send("Hello from raedan-checker"));

app.post("/", (req, res) => {
  if (!req.body) {
    res.send("Error: You must send a body to `/`");
  }
  res.send(`Received ${JSON.stringify(req.body)}`);
});

app.listen(PORT, () => console.log(`raedan-checker listening on port ${PORT}`));
