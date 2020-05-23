const jwt = require("jsonwebtoken")
/**
 * Checks whether given String property is non-empty
 * @param {String} value 
 */
module.exports.isStringPropertyNotEmpty = function isStringPropertyNotEmpty(value) {
    return !(value === null || value === undefined || value === "")
}

// /**
//  * 
//  * @param {*} username 
//  * @param {*} userId 
//  */
// module.exports.generateAccessToken = function generateAccessToken(username) {
//     return require("crypto").randomBytes(48).toString('hex')
// }

/**
 * @author Nisuga Jayawardana it18117110
 * 
 * JWT  Middleware Authorization Mechanism for Client Type Specific Routes
 * 
 * @param {String}  ADMIN_or_STORE_MANAGER_or_USER 

 */
module.exports.authenicateToken = function authenicateToken(userType) {

    return authenicateToken[userType] || (authenicateToken[userType] = function (req, res, next) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) {
            return res.status(401).json({ success: false, error: 'You are not authorized to perform this' })
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userData) => {
            if (err) {
                res.status(403).json({
                    success: false,
                    error: `Unauthorized Token`
                })
            }
            console.log(userData);
            //If permitted userType matches the current userType
            if (userData.userType === userType) {
                req.user = userData.user
                //Passing access to the next functions
                next()
            } else {
                res.status(403).json({
                    success: false,
                    error: `Unauthorized Access. ${userData.userType.toLowerCase()}s cannot perform this action`
                })
            }
        })
    })
}

