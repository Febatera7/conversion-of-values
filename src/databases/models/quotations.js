const { Schema, model } = require("mongoose");

const quotationsSchema = new Schema({
    initials: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 3
    },
    name: { type: String, required: true },
    valueForOneReal: { type: Number, required: true },
}, { timestamps: true });

const QuotationsModel = model("Quotations", quotationsSchema);

module.exports = QuotationsModel;
