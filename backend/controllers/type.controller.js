const db = require("../models");

const Type = db.types;

exports.findAll = (req, res) => {


    Type.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving RAMs."
            });
        });

};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Type.findByPk(id)
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