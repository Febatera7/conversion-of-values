const { Router } = require("express");
const { currencyCompare } = require("../controllers/prices");

const routes = Router();

routes.post("/compare", currencyCompare);

module.exports = routes;
