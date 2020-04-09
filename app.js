const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/config");

const url = config.bd_string;

const options = {
  poolSize: 5,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, options);
mongoose.set("useCreateIndex", true);

mongoose.connection.on("error", (err) => {
  console.log("Erro na conexão com o banco de dados: " + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Aplicação desconecatada do banco de dados!");
});

mongoose.connection.on("connected", () => {
  console.log("Aplicação conectada ao banco de dados!");
});

// BODY PARSER

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// String de conexão ==> mongodb+srv://usuario_admin:<password>@cluster0-udszt.mongodb.net/test?retryWrites=true&w=majority

const indexRoute = require("./Routes/index");
const usersRoute = require("./Routes/users");

app.use("/", indexRoute);
app.use("/", usersRoute);

app.listen(3000);

module.exports = app;
