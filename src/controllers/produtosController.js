import produto from "../models/Produtos.js"

class ProdutosController {
    static async listarProdutos(req, res){
        try {
            const listaProdutos = await produto.find({})
            res.status(200).json(listaProdutos)    
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisicao`})   
        }
    }

    static async cadastrarProduto(req, res){
        try {
            const novoProduto = req.body
            const produtoCriado = await produto.create(novoProduto)
            console.log(...produtoCriado)
            res.status(201).json({ message: ` ${produtoCriado} - Produto criado com sucesso!` })
        } catch (error){
            res.status(500).json({ message: `Falha na requisição - ${error.message}`})
        }
    }

    static async listarProdutoPorId(req, res){
        try {
            const id = req.params.id
            const produtoEncontrado = await produto.findById(id)
            res.status(200).json(produtoEncontrado)
        } catch(error){
            res.status(500).json({ message: `Falha na requisicao \n ${error.message}`})
        }
    }

    static async atualizarProduto(req, res){
        try{
            const id = req.params.id
            await produto.findByIdAndUpdate(id, req.body)
            res.status(201).json({ message: `Produto atualizado com sucesso!`})
        } catch (error){
            res.status(500).json({ message: `Falha ao atualizar livro ${error.message}`})
        }
    }

    static async deletarProduto(req, res){
        try{
            const id = req.params.id
            await produto.findByIdAndDelete(id, req.body)
            res.status(200).json({message: `Produto excluído com sucesso!`})
        } catch(error){
            res.status(500).json({ message: `Erro ao excluir produto: ${error.message}`})
        }
    }
}

export default ProdutosController