const { describe, it } = require("mocha");
const chai = require("chai");
const http = require("chai-http");
const app = require("../../src/app");
const mockQuotation = {
    name: "Test Currency",
    initials: "tst",
    valueForOneReal: 0.085
};

const expect = chai.expect;
chai.use(http);

describe("Get registered quotations ", async () => {
    it("Should return status code 200 and the array of registered quotations", async () => {
        const response = await chai.request(app).get("/quotations");

        expect(response.status).to.equal(200);
        expect(response.body.quotations).to.be.a("array");
    });
});

describe("Register quotation ", async () => {
    it("Should return status code 201 and save a new quotation", async () => {
        const response = await chai.request(app).post("/quotations").send(mockQuotation);

        expect(response.status).to.equal(201);
    });

    it("Should return status code 400, because quotation already registered", async () => {
        const response = await chai.request(app).post("/quotations").send(mockQuotation);

        expect(response.status).to.equal(400);
    });

    it("Should return status code 400 and a error message", async () => {
        const response = await chai.request(app).post("/quotations");

        expect(response.status).to.equal(400);
    });
});

describe("Update registered quotation ", async () => {
    it("Should return status code 200 and update registered quotation value for one Real", async () => {
        const response = await chai.request(app)
            .patch(`/quotations/${mockQuotation.initials}`)
            .send({ valueForOneReal: 0.75 });

        expect(response.status).to.equal(200);
    });

    it("Should return status code 200 and update registered quotation name", async () => {
        const response = await chai.request(app)
            .patch(`/quotations/${mockQuotation.initials}`)
            .send({ name: "Test Currency 2" });

        expect(response.status).to.equal(200);
    });

    it("Should return status code 400 and a error message", async () => {
        const response = await chai.request(app).patch("/quotations/jkl").send({});

        expect(response.status).to.equal(400);
    });
});

describe("Delete registered quotation ", async () => {
    it("Should return status code 200 and delete quotation", async () => {
        const response = await chai.request(app).delete(`/quotations/${mockQuotation.initials}`);

        expect(response.status).to.equal(200);
    });

    it("Should return status code 400 and a error message", async () => {
        const response = await chai.request(app).delete("/quotations/jkl");

        expect(response.status).to.equal(400);
    });
});
