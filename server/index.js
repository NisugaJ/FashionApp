const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const apiPort = 9000
const db = require('./db')

const userRoutes = require('./routes/user.route')
const contactRoutes = require("./routes/contact.route");
const paymentRoutes = require("./routes/payment.route");
const productRoutes = require("./routes/product.route");
const authRoutes = require("./routes/auth.route");
const managerRoutes = require("./routes/manager.route");
const categoryRoutes = require("./routes/category.route");
const path = require('path');

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Fashion Store Service Backend")
})

//For Accessing Static Resources
app.use(express.static(path.join(__dirname, 'public')));


app.use('/user', userRoutes)
app.use("/contact", contactRoutes);
app.use("/payment", paymentRoutes);
app.use("/product", productRoutes);
app.use("/auth", authRoutes);
app.use("/store_managers", managerRoutes);
app.use("/categories", categoryRoutes);


app.listen(apiPort, () => {
    console.log(`Express Server is running on port ${apiPort} `);
})

// 'npm run serve' will start the server in dev mode