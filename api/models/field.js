const mongoose = require('mongoose');

const fieldSchema = mongoose.Schema({
    label: { type: String, default: '' },
    name: { type: String, default: '' },
    type: { type: String, default: '' },
});

module.exports = fieldSchema;