
const express = require('express');
const managerRoutes = express.Router();


let managerController = require("../controllers/managerController");

//add route
managerRoutes.route("/add").post(managerController.createManager);

//get route
managerRoutes.route('/').get(managerController.getManagerDetails);

//get edit route
managerRoutes.route('/edit/:id').get(managerController.getEditDetails);

//update route
managerRoutes.route('/update/:id').post(managerController.updateManager);

//delete route
managerRoutes.route("/delete/:id").get(managerController.deleteManager);


module.exports = managerRoutes;