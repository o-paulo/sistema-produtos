import express from "express"
import ProdutosController from "../controllers/produtosController.js"

const routes = express.Router()

routes.get("/produtos/:id", ProdutosController.listarProdutoPorId)
routes.put("/produtos/:id", ProdutosController.atualizarProduto)
routes.delete("/produtos/:id", ProdutosController.deletarProduto)
routes.get("/produtos", ProdutosController.listarProdutos)
routes.post("/produtos", ProdutosController.cadastrarProduto)

export default routes