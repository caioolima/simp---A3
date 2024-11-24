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

    // Define o status como "aguardando verificação"
    const novoFormulario = new Form({
      cep,
      rua,
      bairro,
      cidade,
      estado,
      complemento,
      status: "aguardando verificação",
      imagemUrl,
    });

    await novoFormulario.save();

    // Dados do formulário para o e-mail
    const enderecoCompleto = `${rua}, ${bairro}, ${cidade} - ${estado}, ${cep}`;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "caioolima1994@gmail.com",
        pass: "jmyg ulal stgt nkuc",
      },
    });

    // Anexando a logo no e-mail
    const logoPath = path.join(__dirname, "logo.png");

    // Configuração do e-mail
    const emailBody = `
      <html>
      <head>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  background-color: #e9f7f6;
                  color: #333;
                  padding: 20px;
              }
              .header {
                  background-color: #2c3e50;
                  padding: 20px;
                  text-align: center;
                  color: white;
                  border-radius: 10px 10px 0 0;
              }
              .content p {
                  font-size: 18px;
                  line-height: 1.6;
              }
              .address {
                  font-weight: bold;
                  color: #e74c3c;
              }
          </style>
      </head>
      <body>
          <div class="header">
              <img src="cid:logo" alt="Logo SIMP" />
              <h1>Nova Solicitação Recebida</h1>
          </div>
          <div class="content">
              <p><strong>Status:</strong> Aguardando Verificação</p>
              <p><strong>Endereço:</strong> <span class="address">${enderecoCompleto}</span></p>
              ${complemento ? `<p><strong>Complemento:</strong> ${complemento}</p>` : ""}
              <p><strong>Imagem:</strong> <a href="${imagemUrl}" target="_blank">Visualizar Imagem</a></p>
          </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: "caioolima1994@gmail.com",
      to: "caiolimaa2002@gmail.com",
      subject: "Nova Solicitação - Aguardando Verificação",
      html: emailBody,
      attachments: [
        {
          filename: "logo.png",
          path: logoPath,
          cid: "logo", // Identificador que será usado no src da tag <img> no HTML
        },
      ],
    };

    // Envio do e-mail
    await transporter.sendMail(mailOptions);

    res.status(201).json(novoFormulario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar o formulário ou enviar o e-mail", error });
  }
};

module.exports = { listarFormularios, criarFormulario };
