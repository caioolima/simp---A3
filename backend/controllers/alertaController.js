const Alerta = require('../models/alertaModel');

// Função para obter todos os alertas
exports.getAlertas = async (req, res) => {
  try {
    const alertas = await Alerta.find();
    res.json(alertas);
  } catch (error) {
    res.status(500).send('Erro ao obter alertas');
  }
};

// Função para criar ou atualizar um alerta
exports.criarOuAtualizarAlerta = async (req, res) => {
  const { nome, endereco, grau_inclinacao, data_hora } = req.body;

  // Determinar o status com base no grau de inclinação
  let status = "";
  if (grau_inclinacao > 100) {
    status = "crítico";  // Alerta crítico se o grau for maior que 100
  } else if (grau_inclinacao > 0 && grau_inclinacao <= 100) {
    status = "em alerta";  // Alerta "em alerta" se o grau for entre 0 e 100
  } else {
    return res.status(400).send("Grau de inclinação inválido.");
  }

  try {
    // Verificar se o poste já existe no banco
    const alertaExistente = await Alerta.findOne({ nome });

    if (alertaExistente) {
      // Atualizar o registro existente apenas se o grau de inclinação ou status mudou
      if (
        alertaExistente.grau_inclinacao !== grau_inclinacao ||
        alertaExistente.status !== status
      ) {
        alertaExistente.grau_inclinacao = grau_inclinacao;
        alertaExistente.status = status;
        alertaExistente.data_hora = data_hora; // Atualizar a data/hora
        alertaExistente.endereco = endereco; // Atualizar o endereço
        await alertaExistente.save();
        return res.status(200).json(alertaExistente);
      } else {
        // Se não houve mudanças, não há necessidade de atualizar
        return res.status(200).send("Nenhuma atualização necessária.");
      }
    } else {
      // Criar um novo alerta se o nome não existir
      const novoAlerta = new Alerta({
        nome,
        endereco,
        grau_inclinacao,
        data_hora,
        status,
      });
      await novoAlerta.save();
      return res.status(201).json(novoAlerta);
    }
  } catch (error) {
    res.status(500).send(`Erro ao salvar o alerta: ${error.message}`);
  }
};

// Função para encontrar alertas por status
exports.acharEmAlerta = async (req, res) => {
  try {
    const alertasEmAlerta = await Alerta.find({ status: "em alerta" });
    res.json(alertasEmAlerta);
  } catch (error) {
    res.status(500).send(`Erro ao buscar alertas em alerta: ${error.message}`);
  }
};

// Função para encontrar alertas críticos
exports.acharEmCritico = async (req, res) => {
  try {
    const alertasCriticos = await Alerta.find({ status: "crítico" });
    res.json(alertasCriticos);
  } catch (error) {
    res.status(500).send(`Erro ao buscar alertas críticos: ${error.message}`);
  }
};

exports.acharAlertaPorNome = async (req, res) => {
  const nomePoste = req.params.nomePoste;
  try {
    // Usando $regex para busca case-insensitive
    const alerta = await Alerta.findOne({ nome: { $regex: `^${nomePoste}$`, $options: 'i' } });
    if (alerta) {
      res.json(alerta);
    } else {
      res.status(404).send('Alerta não encontrado.');
    }
  } catch (error) {
    res.status(500).send(`Erro ao buscar alerta: ${error.message}`);
  }
};
