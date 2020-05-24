const User = require('../models/User')

createUser = (req, res) => {
    const body = req.body
    const errors = []
    if (!body) {
        return res.status(400).json({
            success: false,
            error: "No Data detected"
        })
    }

    const user = new User(body)
    console.log(body);
    user.save()
        .then(() => {
            return res.status(200).json({
                success: true,
                data: {
                    id: user._id,
                    name: user.name,
                    message: "User Created"
                }
            })
        })
        .catch(err => {
            res.status(200).json({ success: false, error: err })
        })
}

getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found.` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))

}

getUser = async (req, res) => {
    let id = req.params.id;
    await User.findById(id, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found.` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

updateUser = async (req, res) => {
    let id = req.params.id;
    await User.findById(id, (err, user) => {

        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found.` })
        }
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
        user.status = req.body.status;
        console.log(user);

        user.save().then(user => {
            res.status(200).json({ success: true, data: user });

        }).catch(err => {
            res.status(400).json({ success: false, error: "unable to update the database" });
        });
    }).catch(err => {
        res.status(401).json({ success: false, error: err })
    })
}

deleteUser = async (req, res) => {
    let id = req.body.id;
    User.findOneAndDelete({ _id: id }, function (err, user) {
        if (err) res.status(401).json({ success: false, error: err });
        else res.status(204).json({ success: true });
    });
}

addToWishList = async (req, res) => {
    let productId = req.body.productId;
    let userId = req.body.userId;

    User.findById({ _id: userId }).then((user) => {
        // console.log(user.wishlist);
        user.wishlist.push(productId)
        // console.log(user.wishlist);
        user.save().then(user => {
            res.status(200).json({ success: true, data: user });

        }).catch(err => {
            res.status(400).json({ success: false, error: "unable to update wishlist :" + err });
        });
    }).catch((err) => {
        if (err) {
            res.status(400).json({ success: false, error: err })
        }
    }
    )
}


module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    addToWishList
}

