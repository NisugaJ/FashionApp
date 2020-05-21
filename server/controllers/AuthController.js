let Admin = require("../models/Admin")
let StoreManager = require("../models/StoreManager")
let User = require("../models/User")

const loginClient = (req, res) => {

    var errors = []
    if (req.body.username == null || req.body.username == '') {
        errors.push("No username provided")
    }
    if (req.body.password == null || req.body.password == '') {
        errors.push("No password provided")
    }

    if (errors.length == 0) {
        const reqData = req.body
        var user;
        //Check whether user is an admin
        Admin.findOne({ username: reqData.username, password: reqData.password }, (err, user) => {

            if (err) {
                console.log(err)
                errors.push(err)
                res.status(200).json({ success: false, message: err })
            }
            if (user) {
                console.log(user)

                res.status(200).json({ success: true, data: user })
            } else {
                //Check whether user is a Store Manager
                StoreManager.findOne({ username: reqData.username, password: reqData.password }, (err, user) => {
                    if (user) {
                        console.log(user)
                        res.status(200).json({ success: true, data: user })
                    } else {
                        //Check whether user is a User( Customer)
                        User.findOne({ username: reqData.username, password: reqData.password }, (err, user) => {
                            if (user) {
                                console.log(user);
                                res.status(200).json({ success: true, data: user })
                            } else {
                                //Print as invalid 
                                res.status(200).json({ success: false, message: "Invalid credentials" })
                            }
                        })
                    }
                })
            }
        })
    } else {
        res.status(200).json({ success: false, errors: errors })
    }
}


module.exports = {
    loginClient
}