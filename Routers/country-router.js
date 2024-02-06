const{ Router } = require("express")

const cc = require("../Controller/country-controller")

const cr = Router()

cr.get("/", cc.index)

module.exports = cr