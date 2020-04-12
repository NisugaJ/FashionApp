const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Ratings = new Schema({
    comment: { type: String },
    value: { type: Number, required: true },
    user_id: { type: mongoose.Types.ObjectId, required: true },
    date: { type: Date, default: Date.now },
})

const Product = new Schema(
    {
        name: { type: String, required: true },
        image_path: { type: String, required: true },
        qty: { type: Number, required: true },
        description: { type: String, required: true },
        ratings: [Ratings]
    }
)

module.exports = mongoose.model('product', Product)