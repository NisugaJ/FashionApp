const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const apiPort = 3000
const db = require('./db')
const userRoutes = require('./routes/user.route')

const contactRoutes = require("./routes/contact.route");
const paymentRoutes = require("./routes/payment.route");
const authRoutes = require("./routes/auth.route");
const managerRoutes = require("./routes/manager.route");

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Fashion Store Service Backend")
})

//For Accessing Static Resources
app.use(express.static('./public'));

app.use('/user', userRoutes)
app.use("/contact", contactRoutes);
app.use("/payment", paymentRoutes);
app.use("/auth", authRoutes);
app.use("/store_managers", managerRoutes);

app.listen(apiPort, () => {
    console.log(`Express Server is running on port ${apiPort} `);
})