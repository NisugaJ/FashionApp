const mongoose = require("mongoose")
const Schema = mongoose.Schema

const StoreManager = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        reg_date: { type: Date, required: true, default: Date.now },
    }
)

module.exports = mongoose.model('store_manager', StoreManager)