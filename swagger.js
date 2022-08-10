const options = {
    openApi: "3.0.0",
    language: "pt-BR"
};
require("dotenv/config");
const swaggerAutogen = require("swagger-autogen")(options);
const { name, description, version } = require("./package.json");
const doc = {
    info: {
        title: name,
        version,
        description
    },
    host: `localhost:${process.env.PORT}`,
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
        {
            name: "Prices",
            description: "Compares the value of the product in Real with other currencies",
        },
        {
            name: "Quotations",
            description: "Save, update and view some currency quotes",
        },
    ],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/api/routes/index.js"];

// swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
//     require("./src/server");
// });
swaggerAutogen(outputFile, endpointsFiles, doc);
