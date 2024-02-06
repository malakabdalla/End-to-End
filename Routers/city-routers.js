const{ Router } = require("express")

const ct = require("../Controller/city-controller")

const ctr = Router()

ctr.get("/", ct.index)
ctr.get("/:name", ct.show)
ctr.post("/", ct.create)
ctr.delete("/:name", ct.destroy)
ctr.patch("/:name", ct.update)

module.exports = ctr