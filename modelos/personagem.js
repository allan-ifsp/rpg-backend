const Sequelize = require("sequelize");
const banco = require("../db.js");
const Mestre = require("./mestre");
const Campanha = require("./campanha");

const Personagem = banco.define("personagem", {
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
    status:{
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: false
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: false
    }
});

Personagem.belongsTo(Mestre, {
    constraint: true,
    foreignKey: "idMestre"
});

Mestre.hasMany(Personagem, {
    foreignKey: "idMestre"
});


module.exports = Personagem;