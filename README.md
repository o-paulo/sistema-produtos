<h1>Sistema de Gerenciamento de Produtos</h1>

API REST para gerenciamento de produtos, aonde você poderá realizar as seguintes operações:

1. Consulta de produtos<br>
Para consultar todos os produtos cadastrados, faça uma requição ``GET`` para a rota ``/produtos``

O retorno será semelhante a isto:
``
[
    {
        "_id": "672d02fef1fa7f6206b381fd",
        "nomeProduto": "Celular",
        "tipo": "eletronico"
    },
    {
        "_id": "674cb1dbd537d3c06e205383",
        "nameProduct": "iPhone",
        "price": 8000,
        "typeProduct": "Electronic"
    }
]
``

2. Cadastro de produto<br>
A criação de produto é utilizado o método ``POST`` para a rota ``/produtos`` e usando o body abaixo:

``
{
    "nameProduct": "Xbox One Series S",
    "price": 2800,
    "typeProduct": "Eletronico"
}
``

3. Consultando livro por ID<br>
Aqui é usado o método ``GET`` para a rota ``/produtos/:id``, passando o ``id`` como parametro de busca.

O retorno sera os dados do ID consultado.

4. Atualizando um produto<br>
Para atualizar um produto, use o método ``PUT`` na rota ``/produtos/:id``, sendo o ``id`` o parametro de busca para atualização do produto correspondete.

O retorno sera uma mensagem informativa de sucesso.

``
{
    "message": "Produto atualizado!"
}
``
5. Deletando um produto<br>
Para deletar um produto, use o método ``DELETE`` na rota ``/produtos/:id``, sendo o ``id`` o parametro de busca para identificar qual produto sera deletado.

O retorno sera uma mensagem informando que o produto foi excluído com sucesso.
``
{
    "message": "Produto excluído com sucesso!"
}
``

## Pacotes utilizados

Esta API conta com a seguintes dependências para seu funcionamento:
- _Dotenv_ para trabalhar com dados sensíveis e transformando em varíaveis, para que os dados não sejam expostos.
- _Mongoose_ para trabalharmos com o MONGO DB.
- _Express_ para construção da API

## Tecnologias utilizadas
- Node JS
- Mongo DB