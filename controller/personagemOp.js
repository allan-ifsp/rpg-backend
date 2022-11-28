const router = require("express").Router();
const Personagem = require("../modelos/personagem");

router.get("/todos", async (req, res) => {
    const personagens = await Personagem.findAll();
    res.send(JSON.stringify(personagens, null, 2))
});

router.route("/:id")
    .get(async function (req, res) {
        const personagem = await Personagem.findByPk(req.params.id);
        res.json(personagem);
    })
    .put(async function (req, res) {
        const personagem = await Personagem.update({
            nome: req.body.nome,
            descricao: req.body.descricao,
            idMestre: req.body.idMestre,
            status: req.body.status
        }, {
            where: {
                id: req.params.id
            }
        });
        res.send(`Personagem de id ${req.params.id} atualizado`);
    })
    .delete(async function (req, res) {
        await Personagem.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(`Personagem de id ${req.params.id} foi deletado`);
    });

router.post('/add', async (req, res) => {
    await Personagem.sync();
    console.log(`inserindo personagem ${req.body.nome} no banco`);
    const personagem = await Personagem.create({
        nome: req.body.nome,
        descricao: req.body.descricao,
        idMestre: req.body.idMestre,
        status: req.body.status
    })
    console.log(req.body)
    res.json(personagem)
});

module.exports = router;