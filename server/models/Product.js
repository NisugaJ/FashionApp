const mongoose = require("mongoose")
const Schema = mongoose.Schema

let Ratings = new Schema({
    comment: {
        type: String
    },
    value: {
        type: Number,
        required: true
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

let Product = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    qty: {
        type: String
    },
    image_path: {
        type: String
    },
    category_id: {
        type: Object
    },
    discount_percentage: {
        type: String
    },
    discount_info: {
        type: String
    },
    ratings: {
        type: Object
    }
});

module.exports = mongoose.model('Product', Product), mongoose.model('Rating', Ratings)