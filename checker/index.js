const express = require("express");
const bodyParser = require("body-parser");
const PORT = 8000;

const app = express();
app.use(bodyParser.json());

app.get("/", (_, res) => res.send("Hello from raedan-checker"));

app.listen(PORT, () => console.log(`raedan-checker listening on port ${PORT}`));
