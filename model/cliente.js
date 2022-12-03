const mongoose = require ('mongoose')
const Schema = mongoose.Schema;
// const {Schema}  = mongoose;

const ClienteSchema = new Schema({
    nome: String,
    email: String,
},
{
    versionKey: false
});

module.exports = mongoose.model("Cliente", ClienteSchema);