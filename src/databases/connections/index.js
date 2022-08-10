const mongoConnection = require("./mongo");

const initializeDatabases = async () => {
    mongoConnection();
};

module.exports = initializeDatabases;
