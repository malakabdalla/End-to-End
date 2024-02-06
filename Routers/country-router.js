const{ Router } = require("express")

const cc = require("../Controller/country-controller")

const cr = Router()

cr.get("/", cc.index)
cr.get("/:name", cc.show)
cr.post("/", cc.create)
cr.delete("/:name", cc.destroy)
cr.patch("/:name", cc.update)

module.exports = cr