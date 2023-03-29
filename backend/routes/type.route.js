const ram = require("../controllers/ram.controller");
module.exports = app => {
    const types = require("../controllers/type.controller");

    let router = require("express").Router();


    router.get("/", types.findAll);
    router.get("/:id", types.findOne);

    app.use('/api/RAM_types', router);
}