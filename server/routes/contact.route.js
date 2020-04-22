const express = require("express");
const contactRoutes = express.Router();

let contactController = require("../controllers/ContactController");

//add route
contactRoutes.route("/add").post(contactController.createContact);

//get route
contactRoutes.route("/all").get(contactController.getContact);

// search route
contactRoutes.route("/:id").get(contactController.searchContact);

//delete route
contactRoutes.route("/delete/:id").delete(contactController.deleteContact);

module.exports = contactRoutes;