const { Router } = require("express");
const prices = require("./prices");
const quotations = require("./quotations");
const swaggerDocument = require("../../../swagger-output.json");
const swaggerUi = require("swagger-ui-express");

const routes = Router();

routes.use("/prices", prices);
routes.use("/quotations", quotations);
routes.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = routes;
