
const express = require('express');
const managerRoutes = express.Router();


const Utils = require("../common/CommonUtils")
const Definitions = require("../definitions/Defs").Definitions
let managerController = require("../controllers/managerController");

//add route
managerRoutes.route("/add").post(Utils.authenicateToken(Definitions.clientTypes.admin), managerController.createManager);

//get route
managerRoutes.route('/').get(Utils.authenicateToken(Definitions.clientTypes.admin), managerController.getManagerDetails);

//get edit route
managerRoutes.route('/edit/:id').get(managerController.getEditDetails);

//update route
managerRoutes.route('/update/:id').post(Utils.authenicateToken(Definitions.clientTypes.admin), managerController.updateManager);

//delete route
managerRoutes.route("/delete/:id").get(Utils.authenicateToken(Definitions.clientTypes.admin), managerController.deleteManager);



module.exports = managerRoutes;