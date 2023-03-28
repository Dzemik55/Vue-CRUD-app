const db = require("../models");
const Ram = db.rams;
const Op = db.Sequelize.Op;

// Create and Save a new RAM
exports.create = (req, res) => {
    //Validating a request
    if (!req.body.model) {
        res.status(400).send({
            message: "Can not be empty"
        });
        return;
    }

    //Creating a RAM
    const ram = {
        brand: req.body.brand,
        model: req.body.model,
        clock_speed: req.body.clock_speed,
        size: req.body.size,
        CAS_latency: req.body.CAS_latency,
        ECC_status: req.body.ECC_status,
        price: req.body.price,
        type: req.body.type
    };

    //Save RAM in the database

    Ram.create(ram)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error while creating new RAM"
            });
        });
};

// Retrieve all RAMs from the database.
exports.findAll = (req, res) => {
    const brand = req.query.brand;
    let condition = brand ? { title: { [Op.like]: `%${brand}%` } } : null;

    Ram.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });

};

// Find a single RAM with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Ram.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find RAM with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving RAM with id=" + id
            });
        });

};

// Update a RAM by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Ram.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "RAM was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update RAM with id=${id}. Maybe RAM was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating RAM with id=" + id
            });
        });

};

// Delete a RAM with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Ram.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "RAM was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete RAM with id=${id}. Maybe RAM was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete RAM with id=" + id
            });
        });

};
