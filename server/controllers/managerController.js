let StoreManager = require("../models/StoreManager");

const nodemailer = require('nodemailer');

//add controller
const createManager = (req, res) => {
    let storeManager = new StoreManager(req.body);
    storeManager.save()
        .then(storeManager => {
            res.status(200).json({ 'Manager': 'Manager in added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });

    

    const output = `
        <p>Dear user you have been added as a manager for our website.You can sell your items from our website</p>
        
        <h3>contact Details</p>
        <ul>
            <li>First Name: ${req.body.first_name}</li>
            <li>First Name: ${req.body.last_name}</li>
            <li>Username: ${req.body.username}</li>
            <li>Email: ${req.body.email}</li>
            <li>Password: ${req.body.password}</li>
            
        </ul>
    `;

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'ravindumigu@gmail.com', // generated ethereal user
            pass: '584627913asd' // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '"Ravindu" <ravindumigu@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: "test", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

//get controller
const getManagerDetails = (req, res) => {
    StoreManager.find(function (err, store_managers) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(store_managers);
        }
    });
};

// get edit controller
const getEditDetails = (req, res) => {
    let id = req.params.id;
    StoreManager.findById(id, function (err, store_managers) {
        res.json(store_managers);
    });
};

// Update controller
const updateManager = (req, res) => {
    StoreManager.findById(req.params.id, function (err, store_managers) {
        if (!store_managers)
            res.status(404).send("data is not found");
        else {
            store_managers.first_name = req.body.first_name;
            store_managers.last_name = req.body.last_name;
            store_managers.username = req.body.username;
            store_managers.password = req.body.password;
            store_managers.email = req.body.email;

            store_managers.save().then(store_managers => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
    
};



//delete controller
const deleteManager = (req, res) => {

    StoreManager.findOneAndDelete({ _id: req.params.id }, function (err, store_managers) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
};


module.exports = {
    createManager,
    getManagerDetails,
    getEditDetails,
    updateManager,
    deleteManager
    
};