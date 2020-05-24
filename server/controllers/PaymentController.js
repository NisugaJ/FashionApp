let Payment = require("../models/Payment");

//add controller
const createPayment = (req, res) => {
    let payment = new Payment(req.body);
    payment
        .save()
        .then((payment) => {
            res.status(200).json({
                'payment': "payment in added successfully",
            });
        })
        .catch((err) => {
            res.status(400).send("unable to save to database");
        });
};

//get controller
const getPayment = (req, res) => {
    Payment.find((err, payments) => {
        if (err) {
            console.log(err);
        } else {
            res.json(payments);
        }
    });
};

// search controller
const searchPayment = (req, res) => {
    let id = req.params.id;
    Payment.findById(id, (err, payments) => {
        res.json(payments);
    });
};

//update controller
// const updateContact = (req, res) => {
//     Payment.findById(req.params.id, (err, payments) => {
//         if (!payments) res.status(404).send("data is not found");
//         else {
//             payments.description = req.body.description;
//             payments.status = req.body.status;
//             payments.date = req.body.date;
//             payments.paid_amount = req.body.paid_amount;
//             payments
//                 .save()
//                 .then((payments) => {
//                     res.json("Update complete");
//                 })
//                 .catch((err) => {
//                     res.status(400).send("unable to update the database");
//                 });
//         }
//     });
// };

const deletePayment = (req, res) => {
    Payment.findByIdAndRemove({
        _id: req.params.id,
    },
        (err, payments) => {
            if (err) res.json(err);
            else res.json("Successfully removed");
        }
    );
};

module.exports = {
    createPayment,
    getPayment,
    searchPayment,
    deletePayment
};