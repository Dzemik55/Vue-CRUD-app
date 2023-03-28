const { Sequelize } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Ram = sequelize.define("ram", {
        brand: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        },
        clock_speed: {
            type: Sequelize.INTEGER
        },
        size: {
            type: Sequelize.INTEGER
        },
        CAS_latency: {
            type: Sequelize.INTEGER
        },
        ECC_status: {
            type: Sequelize.BOOLEAN
        },
        price: {
            type: Sequelize.DECIMAL
        },
        type: {
            type: Sequelize.INTEGER,
            references: {
                model: 'types',
                key: 'id'
            }
        }
    });

    return Ram;
};