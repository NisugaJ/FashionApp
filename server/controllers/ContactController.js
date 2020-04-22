let Contact = require("../models/Contact");

//add controller
const createContact = (req, res) => {
  let contact = new Contact(req.body);
  contact
    .save()
    .then((contact) => {
      res.status(200).json({
        'contact': "contact in added successfully",
      });
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
};

//get controller
const getContact = (req, res) => {
  Contact.find((err, contacts) => {
    if (err) {
      console.log(err);
    } else {
      res.json(contacts);
    }
  });
};

// search controller
const searchContact = (req, res) => {
  let id = req.params.id;
  Contact.findById(id, (err, contacts) => {
    res.json(contacts);
  });
};

//update controller
// const updateContact = (req, res) => {
//   Contact.findById(req.params.id, (err, contacts) => {
//     if (!contacts) res.status(404).send("data is not found");
//     else {
//       contacts.Email = req.body.Email;
//       contacts.Subject = req.body.Subject;
//       contacts.Message = req.body.Message;
//       contacts
//         .save()
//         .then((contacts) => {
//           res.json("Update complete");
//         })
//         .catch((err) => {
//           res.status(400).send("unable to update the database");
//         });
//     }
//   });
// };

//delete controller
const deleteContact = (req, res) => {
  Contact.findByIdAndRemove({
      _id: req.params.id,
    },
    (err, contacts) => {
      if (err) res.json(err);
      else res.json("Successfully removed");
    }
  );
};

module.exports = {
  createContact,
  getContact,
  searchContact,
  deleteContact
};