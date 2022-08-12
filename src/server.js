const app = require("./app");
const logger = require("./utils/logger");

const { name, version } = require("../package.json");
const { PORT } = process.env;

app.listen(PORT || 3555, () => logger.info(`${name} version ${version} running on port ${PORT|| 3555}`));
