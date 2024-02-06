const express = require("express")
const cors = require("cors")
const logger = require("./middleware/logger")
const cr = require("./routers/country-router")
const ctr = require("./Routers/city-routers")

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

app.use("/countries", cr)
app.use("/cities", ctr)

module.exports= app