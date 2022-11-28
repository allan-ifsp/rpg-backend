const router = require("express").Router();
const Campanha = require("../modelos/campanha");

router.get("/todos", async (req, res) => {
    const campanhas = await Campanha.findAll();
    res.send(JSON.stringify(campanhas, null, 2))
});

router.route("/:id")
    .get(async function (req, res) {
        const campanha = await Campanha.findByPk(req.params.id);
        res.json(campanha);
    })
    .put(async function (req, res) {
        const campanha = await Campanha.update({
            nome: req.body.nome,
            descricao: req.body.descricao,
            idMestre: req.body.idMestre
        }, {
            where: {
                id: req.params.id
            }
        });
        res.send(`Campanha de id ${req.params.id} atualizada`);
    })
    .delete(async function (req, res) {
        await Campanha.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(`Campanha de id ${req.params.id} foi deletada`);
    });

router.post('/add', async (req, res) => {
    await Campanha.sync();
    console.log(`inserindo campanha ${req.body.nome} no banco`);
    const campanha = await Campanha.create({
        nome: req.body.nome,
        descricao: req.body.descricao,
        idMestre: req.body.idMestre
    })
    console.log(req.body)
    res.json(campanha)
});

module.exports = router;