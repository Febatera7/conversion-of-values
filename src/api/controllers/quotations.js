const QuotationsModel = require("../../databases/models/quotations");
const logger = require("../../utils/logger");

const getQuotations = async (req, res) => {
    // #swagger.tags = ["Quotations"]
    const quotations = await QuotationsModel.find();

    res.status(200).send({ quotations });
};

const saveQuotation = async (req, res) => {
    // #swagger.tags = ["Quotations"]
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
    // #swagger.tags = ["Quotations"]
    try {
        const currencyInitials = req.params.initials.toUpperCase();
        const data = req.body;

        const quotation = await QuotationsModel.findOne(
            { initials: currencyInitials }
        );

        if (!quotation) throw new Error("Quotation not found");

        await quotation.updateOne({ $set: { ...data } });

        res.status(200).send({ message: `Quotation ${data.name ? data.name : quotation.name} updated` });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const deleteQuotation = async (req, res) => {
    // #swagger.tags = ["Quotations"]
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
