const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

const ListModel = mongoose.model("List", listSchema);

module.exports = ListModel;
