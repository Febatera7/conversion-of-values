const { getQuotations, saveQuotation, updateQuotation, deleteQuotation } = require("../controllers/quotations");
const { Router } = require("express");
const { saveQuotationValidation,
    updateQuotationValidation,
    deleteQuotationValidation
} = require("./validations/quotations");
const validate = require("./validations/validate");

const routes = Router();

routes.get("/", getQuotations);
routes.post("/", validate(saveQuotationValidation), saveQuotation);
routes.patch("/:initials", validate(updateQuotationValidation), updateQuotation);
routes.delete("/:initials", validate(deleteQuotationValidation), deleteQuotation);

module.exports = routes;
