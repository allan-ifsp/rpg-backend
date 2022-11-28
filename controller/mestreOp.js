const router = require("express").Router();
const Mestre = require('../modelos/mestre');

router.get("/todos", async (req, res) => {
    const mestres = await Mestre.findAll();
    res.send(JSON.stringify(mestres, null, 2))
});

router.route("/:id")
    .get(async function (req, res) {
        const mestre = await Mestre.findByPk(req.params.id);
        res.send(`Mestre: ${mestre.nome}`);
    })
    .put(async function (req, res) {
        const mestre = await Mestre.update({
            nome: req.body.nome,
            login: req.body.login,
            senha: req.body.senha
        }, {
            where: {
                id: req.params.id
            }
        });
        res.send(JSON.stringify(req.params.id, null, 2));
    })
    .delete(async function (req, res) {
        await Mestre.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(`Mestre de id ${req.params.id} foi deletado`);
    });

router.post('/add', async (req, res) => {
    await Mestre.sync();
    console.log(`inserindo mestre ${req.body.nome} no banco`);
    const mestre = await Mestre.create({
        nome: req.body.nome,
        login: req.body.login,
        senha: req.body.senha
    })
    console.log(req.body)
    res.json(mestre)
});

module.exports = router;