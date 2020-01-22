const mongoose = require('mongoose');
const Field = require("./field");
const Submission = require("./submission");

const formSchema = mongoose.Schema({
    name: { type: String, default: '' },
    fields: {
        type: [Field],
        default: []
    }
});

module.exports = mongoose.model('From', formSchema);