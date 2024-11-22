const Alerta = require('../models/alertaModel'); // Certifique-se de que o modelo Alerta está correto

// Função para obter todos os alertas
exports.getAlertas = async (req, res) => {
  try {
    const alertas = await Alerta.find();
    res.json(alertas);
  } catch (error) {
    res.status(500).send('Erro ao obter alertas');
  }
};

// Função para criar um novo alerta
exports.criarAlerta = async (req, res) => {
  try {
    const novoAlerta = new Alerta(req.body);
    await novoAlerta.save();
    res.status(201).json(novoAlerta);
  } catch (error) {
    res.status(500).send('Erro ao criar alerta');
  }
};
