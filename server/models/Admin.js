const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Admin = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        // status: { type: Number },
        reg_date: { type: Date, required: true, default: Date.now },
        access_token: { type: String }
    }
)

// Admin.methods.getLoginDetials = function () {
//     var uname = this.username
//     var pwd = this.pwd
//     return { uname, pwd }
// }

module.exports = mongoose.model('admin', Admin)