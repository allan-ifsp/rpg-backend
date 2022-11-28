const router = require("express").Router();
const CampanhaPersonagem = require("../modelos/campanhaPersonagem");
const Campanha = require('../modelos/campanha');
const Personagem = require("../modelos/personagem");

router.get("/todos", async (req, res) => {
    var lista = []
    var hash = []
    const personagemNaCampanha = await CampanhaPersonagem.findAll();
    for (var i=0;i <personagemNaCampanha.length; i++){
        const personagem = await Personagem.findByPk(personagemNaCampanha[i].dataValues.personagemId);
        const campanha = await Campanha.findByPk(personagemNaCampanha[i].dataValues.campanhaId);
        console.log(personagem)
        lista.push([personagemNaCampanha[i].dataValues.id ,personagem.nome, campanha.nome, personagemNaCampanha[i].dataValues.conquista])  
    }res.send(lista)
});

router.route("/:id")
    .get(async function (req, res) {
        const campanhaPersonagem = await CampanhaPersonagem.findByPk(req.params.id);
        const personagem = await Personagem.findByPk(campanhaPersonagem.personagemId);
        const campanha = await Campanha.findByPk(campanhaPersonagem.campanhaId);
        res.send(`Personagem: ${personagem.nome} \n ` +
            `Personagem ID: ${campanhaPersonagem.personagemId} \n ` +
            `Campanha: ${campanha.nome} \n ` +
            `CampanhaPersonagem ID: ${campanhaPersonagem.campanhaId} \n ` +
            `Campanha ID: ${campanha.id} \n ` +
            `Conquista: ${campanhaPersonagem.conquista}`);
    })
    .put(async function (req, res) {
        const campanhaPersonagem = await CampanhaPersonagem.update({
            campanhaId: req.body.campanhaId,
            personagemId: req.body.personagemId,
            conquista: req.body.conquista
        }, {
            where: {
                id: req.params.id
            }
        });
        res.send(`Campanha do personagem de id ${req.params.id} atualizado`);
    })
    .delete(async function (req, res) {
        await CampanhaPersonagem.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(`Personagem da campanha de id ${req.params.id} foi deletado`);
    });

router.post('/add', async (req, res) => {
    await CampanhaPersonagem.sync();
    console.log(`inserindo conquista do personagem ${req.body.personagemId} na campanha ${req.body.campanhaId} no banco`);
    const campanhaPersonagem = await CampanhaPersonagem.create({
        campanhaId: req.body.campanhaId,
        personagemId: req.body.personagemId,
        conquista: req.body.conquista
    })
    console.log(req.body)
    res.json(campanhaPersonagem)
});

module.exports = router;