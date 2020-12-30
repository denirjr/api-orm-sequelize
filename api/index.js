const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/test", (req, res) =>
  res.status(200).send({ messsage: "Boas vindas a API" })
);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app;
