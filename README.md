RPG!


Tema: É um sistema que auxilia na organização de RPG's, saber por exemplo qual mestre está mestrando determinada campanha, os personagens que a compõem e até mesmo saber as conquistas que o personagem obteve naquela campanha.

Rodar os seguintes npm para rodar o sistema:
npm install express
npm install sequelize
npm install sqlite3
npm install cookie-parser
npm install i18n

Para testar as rotas, utilizamos o Thunder Client, segue os endpoints utilizados:

**POST**
http://localhost:9000/mestre/add -> Cria um registro de mestre

http://localhost:9000/campanha/add -> Cria uma campanha

http://localhost:9000/personagem/add -> Cria um personagem

http://localhost:9000/campanhaPersonagem/add -> Cria um vinculo de qual personagem está em determinada campanha

**GET**
http://localhost:9000/mestre/id -> Retorna o mestre que deseja pelo id inserido

http://localhost:9000/personagem/id -> Retorna o personagem que deseja pelo id inserido

http://localhost:9000/campanha/id -> Retorna a campanha que deseja pelo id inserido

http://localhost:9000/campanhaPersonagem/id -> Retorna o personagem que está atrelado a uma campanha pelo id inserido 

**PUT**
http://localhost:9000/mestre/id -> Realiza uma atualização no registro do mestre

http://localhost:9000/personagem/id -> Realiza uma atualização no registro do personagem

http://localhost:9000/campanha/id -> Realiza uma atualização no registro da campanha

http://localhost:9000/campanhaPersonagem/id -> Realiza uma atualização no registro do personagem naquela campanha

**DELETE**
http://localhost:9000/mestre/id -> Realiza a exclusão do mestre pelo id inserido

http://localhost:9000/personagem/id -> Realiza a exclusão do personagem pelo id inserido

http://localhost:9000/campanha/id -> Realiza a exclusão da campanha pelo id inserido

http://localhost:9000/campanhaPersonagem/id -> Realiza a exclusão do personagem naquela campanha pelo id inserido


**Citações e referências**
https://expressjs.com/
https://sequelize.org/
https://www.npmjs.com/package/i18n
https://www.npmjs.com/package/cookie-parser

Observação: há uma pasta chamada 'Endpoints' que contém imagens que evidenciam as chamadas acima rodando, com seus respectivos body's.
