const { getQuotations, saveQuotation, updateQuotation, deleteQuotation } = require("../controllers/quotations");
const { Router } = require("express");

const routes = Router();

routes.get("/", getQuotations);
routes.post("/", saveQuotation);
routes.patch("/:initials", updateQuotation);
routes.delete("/:initials", deleteQuotation);

module.exports = routes;
