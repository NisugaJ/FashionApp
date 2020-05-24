const Utils = require("../common/CommonUtils");
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true, selected: false },
        email: { type: String, required: true, unique: true },
        status: { type: String, default: 1 }, // 1: Active, 0: Not active, 3: Deleted
        reg_date: { type: Date, required: true, default: Date.now },
        wishlist: [{ type: mongoose.Types.ObjectId }]
    }
)

module.exports = mongoose.model('user', User)