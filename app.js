import express from 'express'
import connectionDatabase from './src/config/dbConnect.js'
import produto from './src/models/Produtos.js'
import routes from "./src/routes/index.js";

const conexao = await connectionDatabase()

conexao.on("error", (erro) => {
    console.error('Erro de conexao', erro)
})

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso!")
})

const app = express()
routes(app);


/* app.get("/produtos", async(req, res) => {
    const listaProdutos = await produto.find({})
    res.status(200).json(listaProdutos)
}) */


export default app