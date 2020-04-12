const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Payment = new Schema(
    {
        description: { type: String, required: true },
        status: { type: Number, required: true },
        transaction_id: { type: String, required: true },
        date: { type: Date, required: true },
        paid_amount: { type: Number, required: true },
        order_id: { type: mongoose.Types.ObjectId, required: true },
    }
)

module.exports = mongoose.model('product', Payment)