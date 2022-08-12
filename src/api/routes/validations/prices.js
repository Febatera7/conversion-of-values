const yup = require("yup");

const patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;

const currencyCompareValidation = yup.object({
    body: yup.object({
        price: yup.number("Price must be a number")
            .positive("Price must be a positive number")
            .test("Price should be a decimal with maximum two digits after comma", value => {
                if (value !== undefined) {
                    return patternTwoDigisAfterComma.test(value);
                }
                return true;
            })
            .required("Price must exist"),
    }).required("Body must exist"),
});

module.exports = { currencyCompareValidation };