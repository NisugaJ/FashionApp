const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Order = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        ordering_date: { type: Date, required: true },
        delivery_date: { type: Date, required: true },
        total_amount: { type: Number, required: true, default: 0.00 },
        total_discount: { type: Number },
        status: { type: Number, required: true },
        items: [{
            product_id: { type: mongoose.Types.ObjectId, required: true },
            product_qty: { type: Number, required: true }
        }],
        user_id: { type: mongoose.Types.ObjectId, required: true }
    }
)

module.exports = mongoose.model('category', Order)