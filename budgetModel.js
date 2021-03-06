var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BudgetSchema = new Schema({
    Month: {
        type: String,
        trim: true
    },
    Rent: {
        type: Number,
        trim: true
    },
    Bills: {
        type: Number,
        trim: true
    },
    Gas: {
        type: Number,
        trim: true
    },
    Budget: {
        type: Number,
        trim: true
    }
});

module.exports = BudgetSchema;