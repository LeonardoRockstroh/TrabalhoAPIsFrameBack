const mongoose = require ('mongoose')
const Schema = mongoose.Schema;
// const {Schema}  = mongoose;

const ProdutoSchema = new Schema({
    nome: String,
    cliente: String,
    qtd: Number,
    preco: Number,
    valor: Number,
},
{
    versionKey: false
});

module.exports = mongoose.model("Produto", ProdutoSchema);