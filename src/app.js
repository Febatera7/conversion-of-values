require("dotenv/config");
const express = require("express");
const cors = require("cors");
const initializeDatabases = require("./databases/connections");
const routes = require("./api/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

initializeDatabases();

module.exports = app;
