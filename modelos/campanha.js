const Sequelize = require("sequelize");
const banco = require("../db.js");
const Mestre = require("./mestre");

const Campanha = banco.define("campanha", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: false
    }
});

Campanha.belongsTo(Mestre, {
    constraint: true,
    foreignKey: "idMestre"
});

Mestre.hasMany(Campanha, {
    foreignKey: "idMestre"
});



module.exports = Campanha;