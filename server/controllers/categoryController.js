let Category = require("../models/Category");


//add controller
const createCategory = (req, res) => {
    let category = new Category(req.body);
    category.save()
        .then(category => {
            res.status(200).json({ 'Category': 'Category in added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });

};

//get controller
const getCategoryDetails = (req, res) => {
    Category.find(function (err, categories) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(categories);
        }
    });
};

// get edit controller
const getEditDetails = (req, res) => {
    let id = req.params.id;
    Category.findById(id, function (err, categories) {
        res.json(categories);
    });
};

// Update controller
const updateCategory = (req, res) => {
    Category.findById(req.params.id, function (err, categories) {
        if (!categories)
            res.status(404).send("data is not found");
        else {
            categories.name = req.body.name;
            categories.description = req.body.description;
            

            categories.save().then(categories => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
    
};



//delete controller
const deleteCategory = (req, res) => {

    Category.findOneAndDelete({ _id: req.params.id }, function (err, categories) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
};

module.exports = {
    createCategory,
    getCategoryDetails,
    getEditDetails,
    updateCategory,
    deleteCategory
};