const User = require('../models/User')

createUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide a User"
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error, err })
    }

    user.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                name: user.name,
                message: "User Created"
            })
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
                .json({ success: false, error: `User not found ${JSON.stringify(users)}` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}

module.exports = {
    createUser,
    getUsers
}

