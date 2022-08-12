const QuotationsModel = require("../../databases/models/quotations");
const logger = require("../../utils/logger");

const getQuotations = async (req, res) => {
    /*#swagger.tags = ["Quotations"]
    #swagger.description = "Endpoint that fetches all registered quotation"*/

    const quotations = await QuotationsModel.find();

    res.status(200).send({ quotations });
};

const saveQuotation = async (req, res) => {
    /*#swagger.tags = ["Quotations"]
    #swagger.description = "Endpoint that register quotation"
    #swagger.parameters["data"] = {
        description: "Data to save quotation.",
        in: "body",
        schema: { $ref: "#/definitions/SaveQuotation" },
    }*/

    try {
        const data = req.body;

        data.initials = data.initials.toUpperCase();

        const quotationExists = await QuotationsModel.findOne(
            { initials: data.initials }
        );

        if (quotationExists) throw new Error("Currency already registered");

        await QuotationsModel.create(data);

        res.status(201).send({ message: `Quotation ${data.name} created` });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const updateQuotation = async (req, res) => {
    /*#swagger.tags = ["Quotations"]
    #swagger.description = "Endpoint that update quotation"
    #swagger.parameters["initials"] = { description: "Initial of the chosen quotation" }
    #swagger.parameters["valueForOneReal"] = {
        description: "Quotation compared to one Real.",
        type: "number",
        required: true,
        in: "body",
        example: 1.555555,
    }*/

    try {
        const currencyInitials = req.params.initials.toUpperCase();
        const { valueForOneReal } = req.body;

        const quotation = await QuotationsModel.findOne(
            { initials: currencyInitials }
        );

        if (!quotation) throw new Error("Quotation not found");

        await quotation.updateOne({ $set: { valueForOneReal } });

        res.status(200).send({ message: `Quotation ${quotation.name} updated` });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const deleteQuotation = async (req, res) => {
    /*#swagger.tags = ["Quotations"]
    #swagger.description = "Endpoint that delete quotation"
    #swagger.parameters["initials"] = { description: "Initial of the chosen quotation" }*/

    try {
        const currencyInitials = req.params.initials.toUpperCase();

        const quotation = await QuotationsModel.findOneAndDelete(
            { initials: currencyInitials }
        );

        if (!quotation) throw new Error("Quotation not found");

        res.status(200).send({ message: `Quotation ${quotation.name} deleted` });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

module.exports = {
    getQuotations,
    saveQuotation,
    updateQuotation,
    deleteQuotation
};
