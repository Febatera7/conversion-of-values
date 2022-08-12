require("dotenv/config");
const options = {
    openApi: "3.0.0"
};
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
            description: "Save, update, delete and view some currency quotations",
        },
    ],
    definitions: {
        Price: {
            price: 999.99
        },
        SaveQuotation: {
            $name: "Example",
            $initials: "exp",
            $valueForOneReal: 0.857
        },
        UpdateQuotation: {
            valueForOneReal: 1.555555
        }
    }
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/api/routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
