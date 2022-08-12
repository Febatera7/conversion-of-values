const logger = require("../../utils/logger");
const QuotationsModel = require("../../databases/models/quotations");

const currencyCompare = async (req, res) => {
    // #swagger.tags = ["Prices"]
    try {
        const { price } = req.body;

        if (!price) throw new Error("Dont have a price to compare");

        const quotations = await QuotationsModel.find();

        const prices = [];

        quotations.forEach(quotation => {
            const updatedPrice = price / quotation.valueForOneReal;

            const obj = {
                currencyInitials: quotation.initials,
                currency: quotation.name,
                price: updatedPrice.toFixed(2).toLocaleString({ style: "currency" }),
            };

            prices.push(obj);

        });

        res.status(200).send({ prices });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

module.exports = {
    currencyCompare,
};
