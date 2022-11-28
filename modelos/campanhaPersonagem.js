const Sequelize = require("sequelize");
const banco = require("../db.js");
const Personagem = require("./personagem");
const Campanha = require("./campanha");


const CampanhaPersonagem = banco.define("campanhaPersonagem", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    conquista:{
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: false
    }
});

Personagem.belongsToMany(Campanha, { through: CampanhaPersonagem });
Campanha.belongsToMany(Personagem, { through: CampanhaPersonagem });

module.exports = CampanhaPersonagem;