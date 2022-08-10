const QuotationsModel = require("../../databases/models/quotations");
const logger = require("../../utils/logger");

const getQuotations = async (req, res) => {
    // #swagger.tags = ["Quotations"]
    try {
        const quotations = await QuotationsModel.find();

        res.status(200).send({ quotations: quotations });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const saveManuallyQuotation = async (req, res) => {
    // #swagger.tags = ["Quotations"]
    try {
        const data = req.body;

        data.initials = data.initials.toUpperCase();

        const quotationExists = await QuotationsModel.findOne(
            { initials: data.initials }
        );

        if(quotationExists) {
            throw new Error("Currency already registered");
        }

        console.log(data);

        await QuotationsModel.create(data);

        res.status(201).send({ message: `Quotation ${data.name} created` });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const updateManuallyQuotation = async (req, res) => {
    // #swagger.tags = ["Quotations"]
    try {
        const currencyInitials = req.params.initials.toUpperCase();
        const data = req.body;

        const quotation = await QuotationsModel.findOne(
            { initials: currencyInitials }
        );

        if (!quotation) {
            throw new Error("Quotation not found");
        }

        await quotation.updateOne({ $set: { ...data } });

        res.status(200).send({ message: `Quotation ${data.name ? data.name : quotation.name} updated` });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

module.exports = {
    getQuotations,
    saveManuallyQuotation,
    updateManuallyQuotation,
};
