const Sequelize = require("sequelize");
const banco = require("../db.js");

const Mestre = banco.define("mestre", {
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
    login:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    }
});

module.exports = Mestre;