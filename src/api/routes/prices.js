const { Router } = require("express");
const { currencyCompare } = require("../controllers/prices");
const { currencyCompareValidation } = require("./validations/prices");
const validate = require("./validations/validate");

const routes = Router();

routes.post("/compare", validate(currencyCompareValidation), currencyCompare);

module.exports = routes;
