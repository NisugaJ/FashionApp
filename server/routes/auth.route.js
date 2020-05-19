const express = require("express");
const authRoutes = express.Router();

let authController = require("../controllers/AuthController");

//Login user
authRoutes.route("/login").post(authController.loginClient);

module.exports = authRoutes;