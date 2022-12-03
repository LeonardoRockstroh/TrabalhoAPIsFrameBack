const express = require('express');
const clienteController = require('../controller/cliente_controller')

const router = express.Router();
//Rota do recurso: "/api/produtos"

router.get('/', clienteController.listar)
router.post('/', clienteController.inserir)

module.exports = router;