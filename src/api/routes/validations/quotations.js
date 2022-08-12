const yup = require("yup");

const saveQuotationValidation = yup.object({
    body: yup.object({
        initials: yup.string("Initials must be a string")
            .min(3, "Initials must be three letters ")
            .max(3, "Initials must be three letters ")
            .required("Initials must exist"),
        name: yup.string("Name must be a string").required("Name must exist"),
        valueForOneReal: yup.number("Value must be a number")
            .positive("Value must be a positive number")
            .required("Value for one Real must exist"),
    }).required("Body must exist"),
});

const updateQuotationValidation = yup.object({
    body: yup.object({
        valueForOneReal: yup.number("Value must be a number")
            .positive("Value must be a positive number")
            .required("Value for one Real must exist"),
    }),
    // params: yup.object({
    //     value: yup.object({
    //         initials: yup.string("Initials must be a string").required("Initials must exist")
    //     })
    // }),
});

const deleteQuotationValidation = yup.object({
    // params: yup.object({
    //     value: yup.object({
    //         initials: yup.string("Initials must be a string").required("Initials must exist")
    //     })
    // }),
});

module.exports = {
    saveQuotationValidation,
    updateQuotationValidation,
    deleteQuotationValidation,
};
