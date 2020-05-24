
const express = require('express');
const categoryRoutes = express.Router();


const Utils = require("../common/CommonUtils")
const Definitions = require("../definitions/Defs").Definitions

let categoryController = require("../controllers/categoryController");

//add route
categoryRoutes.route("/add").post(Utils.authenicateToken(Definitions.clientTypes.admin), categoryController.createCategory);

//get route
categoryRoutes.route('/').get(categoryController.getCategoryDetails);

//get edit route
categoryRoutes.route('/edit/:id').get(categoryController.getEditDetails);

//update route
categoryRoutes.route('/update/:id').post(Utils.authenicateToken(Definitions.clientTypes.admin), categoryController.updateCategory);

//delete route
categoryRoutes.route("/delete/:id").get(Utils.authenicateToken(Definitions.clientTypes.admin), categoryController.deleteCategory);


module.exports = categoryRoutes;