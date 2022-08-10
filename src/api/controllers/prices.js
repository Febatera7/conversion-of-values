const logger = require("../../utils/logger");

const currencyCompare = async (req, res) => {
    // #swagger.tags = ["Prices"]
    try {
        res.status(200).send({ message: "Ok" });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

module.exports = { 
    currencyCompare,
};
