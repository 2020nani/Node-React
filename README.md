# Verzel
Desenvolvido por Hernani Amancio de Almeida

## Executar projeto

Para executar o projeto, sera necessario instalar os seguintes programas em seu computador:

 - Nodejs
 - Docker
 - Docker Compose
 - Postbird
 - yarn

Para iniciar o projeto e necessario clonar o projeto do Github num diretorio de sua preferencia com os seguintes comandos:

- cd "diretorio de sua preferencia"
- git clone https://github.com/2020nani/Node-React.git
- cd Node-React


Feito isso e necessario criar os containers docker para rodar o front e o back e o banco de dados:


No terminal verifique se esta dentro da pasta raiz do projeto (Node-React) e rode o comando docker-compose up -d


Obs: Certifique que o docker esta rodando

Pronto ja temos as 2 aplicações rodando juntamente com o banco de dados postgres


Feito isso voce pode acessar a api em seu computador na porta 3333 e a documentacao dela na url http://localhost:3333/api-docs
Obs: Certifique que o container docker foi criado e esta rodando

Feito isso voce pode acessar a front em seu computador no endereco http://localhost:3000 e nosso projeto estara rodando dentro dos containers docker
Obs: Certifique que o container docker foi criado e esta rodando


## Desenvolvimento

Para iniciar o desenvolvimento e necessario rodar os seguintes comandos dentro da pasta raiz de cada projeto (serverVerzel, frontVerzel) e criar um database postgresSql:

- `npm install` ou `yarn` caso tenha yarn instalado em sua maquina

No diretoria da api rode o comando yarn sequelize db:migrate para criar as tabelas no banco de dados

Rode a api em seu computador na porta 3333 sem utilizar o docker com o seguinte comando dentro da pasta serverContele

- `npm run dev` ou
- `yarn dev`

Rode o  front em seu computador na porta 3000 sem utilizar o docker com o seguinte comando dentro da pasta frontContele

- `npm run start` ou
- `yarn start`
