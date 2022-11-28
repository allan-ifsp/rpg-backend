const express = require('express')
const app = express()
const i18n = require('i18n');
const cookieParser = require('cookie-parser')
const cors = require('cors')


const port = 9000

const Mestre = require('./modelos/mestre');
const Campanha = require('./modelos/campanha');
const Personagem = require("./modelos/personagem");
const CampanhaPersonagem = require("./modelos/campanhaPersonagem");

i18n.configure({
  defaultLocale: 'en',
  locales: ['pt', 'en'],
  directory: './locales',
  extension: '.json',
  cookie: 'lang'
});

app.use(cookieParser());
app.use(i18n.init);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.get('/', (req, res) => {
  res.send(res.__("HELLO_WORLD"))
});

app.use("/mestre", require("./controller/mestreOp"));

app.use("/personagem", require("./controller/personagemOp"));

app.use("/campanha", require("./controller/campanhaOp"));

app.use("/campanhaPersonagem", require("./controller/campanhaPersonagemOp"));
  

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})