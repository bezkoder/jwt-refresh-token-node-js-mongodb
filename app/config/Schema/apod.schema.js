const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const apodSchema = new Schema({
    date: String,
    explanation: String,
    media_type: String,
    service_version: String,
    title: String,
    url: String,
    creation_date: { type: Date, default: Date.now },
    last_modified_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('apinasa', apodSchema);