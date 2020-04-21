const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contact = new Schema({
    Email: {
        type: String,
        required: true
    },
    Subject: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    }
}, {
    collection: 'contacts'
});
module.exports = mongoose.model('Contact', Contact);