const Cliente = require("../model/cliente");

exports.listar = (req, res) => {
    Cliente.find({}, (err, cliente) => {
        if(err){
            res.status(500).send(err);
        }
        res.json(cliente);
    })
}

exports.inserir = (req, res) => {
    const clienteRequest = req.body;
    if(clienteRequest && clienteRequest.nome) {

        const clienteNovo = new Cliente(clienteRequest);
        clienteNovo.save((err, clienteSalvo) => {
            if(err) {
                res.status(500).send(err);
            }
            else {
                return res.status(201).json(clienteSalvo);
            }
        })
        
    }
    else {
        return res.status(400).json({
            Erro:"Nome cliente obrigatório"
        })
    }
}