import mongoose from 'mongoose'

const produtosSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nameProduct: { type: String, required: true },
    price: { type: Number, required: true },
    typeProduct: { type: String, required: true }
}, { versionKey: false})

const produto = mongoose.model("produtos", produtosSchema)

export default produto

