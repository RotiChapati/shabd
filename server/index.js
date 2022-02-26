const express = require('express')
const connectDB = require('../config/db')
const { urlencoded } = require('body-parser')
const authRoute = require('./routes/auth.js')
const cors = require("cors")
const path = require("path")
const app = express()

// Database connected
connectDB()

const port = process.env.PORT || 5000
app.use(cors())

app.use(express.json({ extended: false }))
app.use(express.static(path.join(__dirname, "../client", "build")))
app.use(authRoute)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
});

app.listen(port, () => console.log(`Server started on ${port}...`))