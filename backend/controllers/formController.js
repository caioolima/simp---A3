const nodemailer = require('nodemailer');
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

// Função para criar um novo formulário
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

    // Salva o novo formulário
    await novoFormulario.save();

    // Enviar um e-mail quando o formulário for criado
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'caioolima1994@gmail.com',
        pass: 'jmyg ulal stgt nkuc',
      },
    });

    const mailOptions = {
      from: 'caioolima1994@gmail.com',
      to: 'caiolimaa2002@gmail.com',
      subject: 'Novo formulário criado',
      text: `Um novo formulário foi criado com os seguintes dados:\n
            CEP: ${cep}\n
            Rua: ${rua}\n
            Bairro: ${bairro}\n
            Cidade: ${cidade}\n
            Estado: ${estado}\n
            Complemento: ${complemento}\n
            Imagem URL: ${imagemUrl}\n
            Status: aguardando verificação`,
    };

    // Envia o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Erro ao enviar o e-mail:', error);
      } else {
        console.log('E-mail enviado: ' + info.response);
      }
    });

    // Responde com o novo formulário
    res.status(201).json(novoFormulario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o formulário', error });
  }
};

module.exports = { listarFormularios, criarFormulario };
