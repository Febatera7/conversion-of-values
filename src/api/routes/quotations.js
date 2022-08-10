const { getQuotations, saveManuallyQuotation, updateManuallyQuotation } = require("../controllers/quotations");
const { Router } = require("express");

const routes = Router();

routes.get("/", getQuotations);
routes.post("/", saveManuallyQuotation);
routes.put("/:initials", updateManuallyQuotation);

module.exports = routes;
