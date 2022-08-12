const logger = require("../../../utils/logger");

const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validate({
            body: req.body,
        });
        next();
    } catch(error) {
        logger.error(error);
        res.status(400).send({ error: error.type });
    }
};

module.exports = validate;
