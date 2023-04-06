# Fábrica de Startup

## O que é?

- Este repositório consiste num protótipo de aplicação de para um restaurante, com controle de produtos e comandas

## Tecnologias

- A API foi feita em Javascript para rodar pelo Nodejs
- Foi usada as dependências do CORS (para receber solicitações de API externas), DOTENV (para configurar variável de ambiente), EXPRESS (para fazer o controle da API), JSONWEBTOKEN (para fazer a configuração de token de autenticação), MONGOOSE (para fazer as conexões e alterações no banco de dados MongoDB).

## Implementação

- Para rodar a aplicação primeiro tem que fazer a instalação das dependências inserindo o comando "npm install" pelo terminal de comando
- Criar uma variável de segurança (TOKEN_SECRET) no arquivo .env, para funcionar a lógica de autenticação do token
- Após a instalação das dependências insere o comando "npm start" no terminal, que o servidor será inicializado

## Rotas

- POST /admin/auth/login : para fazer o login na aplicação, 
Obs: é necessário passar um objeto "user" com os campos: email e password, ele retornará um token que deverá ser repassado no header das requisições para o restante das solicitações

- GET /admin/category : para listar todas as categorias de produtos
Obs: Tem que passar o token no header

- GET /admin/product : para listar todos os produtos
Obs: Tem que passar o token no header

- GET /admin/product/:id : para pegar um produto
Obs: Tem que passar o id do produto na url e o token no header

- POST /admin/product : para criar um produto novo
Obs: Tem ser passado um objeto "product" com os campos: name, qty, price e o id da categoria e o token no header

- PATCH /admin/product/:id : para alterar um produto
Obs:  Tem que passar o id do prodto na url e um objeto "product" com as alterações e o token no header

- DELETE /admin/product/:id : para excluir um produto
Obs: Tem que passar o id do produto na url e o token no header

- GET /admin/command : para listar todas as comandas
Obs: Tem que passar o token no header

- POST /admin/command : para criar uma comanda
Obs: Tem que passar um objeto "command" passando o número da mesa de onde virá os pedidos

- PATCH /admin/command/:id : para adicionar produto na comanda
Obs: Tem ser passado o id da comanda na url, um objeto "product" com o id e qty do produto e o token no header

- GET /admin/command/:id : para listar uma comanda
Obs: Tem que passar o id da comanda na url e o token no header

