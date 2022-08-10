const { configure, getLogger } = require("log4js");
const { name } = require("../../package.json");

configure({
    appenders: {
        out: {
            type: "stdout",
            layout: {
                type: "pattern",
                pattern: "%[[%d{dd/MM/yyyy hh:mm:ss}] [%p] %c:%] %m"
            }
        }
    },
    categories: { default: { appenders: ["out"], level: "all" } },
    pm2: false,
});

const logger = getLogger(name);

module.exports = logger;
