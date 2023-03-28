module.exports = app => {
    const ram = require("../controllers/ram.controller");

    let router = require("express").Router();

    //New RAM
    router.post("/", ram.create);

    //All RAMs
    router.get("/", ram.findAll);

    //Single RAM
    router.get("/:id", ram.findOne);

    //Update RAM with id
    router.put("/:id", ram.update);

    //Delete RAM with id
    router.delete("/:id", ram.delete);

    app.use('/api/ramList', router);
}