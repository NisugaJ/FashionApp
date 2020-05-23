require("dotenv").config()

let Admin = require("../models/Admin")
let StoreManager = require("../models/StoreManager")
let User = require("../models/User")
let Definitions = require("../definitions/Defs").Definitions

const jwt = require("jsonwebtoken")
let loggedInUser = {};

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
        //Check whether user is an admin
        Admin.findOne({ username: reqData.username, password: reqData.password }, (err, admin) => {

            if (err) {
                console.log(err)
                errors.push(err)
                res.status(200).json({ success: false, message: err })
            }
            if (admin) {
                console.log("ADMIN", admin)
                loggedInUser = new Admin(admin)
                sendJWT_SignedResponse(admin, res, Definitions.clientTypes.admin)
            } else {
                //Check whether user is a Store Manager
                StoreManager.findOne({ username: reqData.username, password: reqData.password }, (err, storeManager) => {
                    if (storeManager) {
                        console.log("STORE_MANAGER", storeManager)
                        console.log(loggedInUser);
                        sendJWT_SignedResponse(storeManager, res, Definitions.clientTypes.store_manager)
                    } else {
                        //Check whether user is a User( Customer)
                        User.findOne({ username: reqData.username, password: reqData.password }, (err, user) => {
                            if (user) {
                                console.log('USER', user);
                                sendJWT_SignedResponse(user, res, Definitions.clientTypes.user)
                            } else {
                                //Print as invalid 
                                res.status(401).json({ success: false, message: "No User found" })
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

function sendJWT_SignedResponse(loggedInUser, res, userType) {

    if (loggedInUser !== null) {
        loggedInUser.password = undefined;
        const access_token = jwt.sign({ user: loggedInUser.toJSON(), userType: userType }, process.env.ACCESS_TOKEN_SECRET)
        res.status(200).json({ accessToken: access_token, user: loggedInUser, userType: userType })
    }
    else {
        res.status(200).json({ success: false, message: "Error occurred when signing in" })
    }
}

module.exports = {
    loginClient
}