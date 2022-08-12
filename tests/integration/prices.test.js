const { describe, it } = require("mocha");
const chai = require("chai");
const http = require("chai-http");
const app = require("../../src/app");

const expect = chai.expect;
chai.use(http);

describe("Get another currency prices for a value ", async () => {
    it("Should return status code 200 and the array of prices in registered currencys", async () => {
        const response = await chai.request(app).post("/prices/compare").send({ price: 500.99 });

        expect(response.status).to.equal(200);
    });

    it("Should return status code 400 and a error message", async () => {
        const response = await chai.request(app).post("/prices/compare").send({});

        expect(response.status).to.equal(400);
    });
});
