function applyExtraSetup(sequelize) {
    const { instrument, orchestra } =

    orchestra.hasMany(instrument);
    instrument.belongsTo(orchestra);
}

module.exports = { applyExtraSetup };