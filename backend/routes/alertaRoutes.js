const express = require('express');
const router = express.Router();

// Certifique-se de que você está importando o controller corretamente
const alertaController = require('../controllers/alertaController');

// Definir a rota GET para listar os alertas
router.get('/', alertaController.getAlertas);

// Definir a rota POST para criar um alerta
router.post('/', alertaController.criarAlerta);

module.exports = router;
