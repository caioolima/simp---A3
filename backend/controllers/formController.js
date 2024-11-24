// controllers/FormController.js
const Form = require('../models/formModel');

// Função para listar todos os formulários
const listarFormularios = async (req, res) => {
  try {
    // Obtendo todos os documentos do modelo 'Form'
    const formularios = await Form.find();

    // Enviando a resposta com todos os formulários
    res.status(200).json(formularios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar os formulários', error });
  }
};

const criarFormulario = async (req, res) => {
  try {
    const { cep, rua, bairro, cidade, estado, complemento, imagemUrl } = req.body;

    // Define o status como "aguardando" independentemente do valor enviado
    const novoFormulario = new Form({
      cep,
      rua,
      bairro,
      cidade,
      estado,
      complemento,
      status: 'aguardando verificação', // Define valor fixo
      imagemUrl,
    });

    await novoFormulario.save();
    res.status(201).json(novoFormulario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o formulário', error });
  }
};


module.exports = { listarFormularios, criarFormulario };
