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

module.exports = {
    createUser,
    getUsers
}

