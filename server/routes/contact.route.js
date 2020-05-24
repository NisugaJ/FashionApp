const express = require("express");
const contactRoutes = express.Router();

const Utils = require("../common/CommonUtils")
const Definitions = require("../definitions/Defs").Definitions
let contactController = require("../controllers/ContactController");

//add route
contactRoutes.route("/add").post(contactController.createContact);

//get route
contactRoutes.route("/all").get(Utils.authenicateToken(Definitions.clientTypes.admin), contactController.getContact);

// search route
contactRoutes.route("/:id").get(Utils.authenicateToken(Definitions.clientTypes.admin), contactController.searchContact);

//delete route
contactRoutes.route("/delete/:id").delete(Utils.authenicateToken(Definitions.clientTypes.admin), contactController.deleteContact);

module.exports = contactRoutes;