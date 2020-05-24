const express = require("express");
const paymentRoutes = express.Router();

const Utils = require("../common/CommonUtils")
const Definitions = require("../definitions/Defs").Definitions
let paymentController = require("../controllers/PaymentController");

//add route
paymentRoutes.route("/add").post(paymentController.createPayment);

//get route
paymentRoutes.route("/all").get(paymentController.getPayment);

//search route
paymentRoutes.route("/:id").get(paymentController.searchPayment);

//delete route
paymentRoutes.route("/delete/:id").delete(paymentController.deletePayment);

module.exports = paymentRoutes;
