const logger = require("../../utils/logger");
const mongoose = require("mongoose");

const mongoConnection = () => {
    try {
        mongoose.connect(process.env.MONGO_HOST);
        logger.info("Mongo database connected");
    } catch(error) {
        logger.error("Error on connected to Mongo database", error);
    }
};

module.exports = mongoConnection;