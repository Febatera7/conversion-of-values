const QuotationsModel = require("../../databases/models/quotations");

const currencyCompare = async (req, res) => {
    /*#swagger.tags = ["Prices"]
    #swagger.description = "Endpoint that compares and returns the value passed in other registered currencies"
    #swagger.parameters["price"] = {
        description: "Price to be compared.",
        type: "number",
        required: true,
        in: "body",
        example: 999.99,
    }*/

    const { price } = req.body;

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
};

module.exports = {
    currencyCompare,
};
