const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const alertaRoutes = require('./routes/alertaRoutes'); // Importando as rotas
require('dotenv').config(); // Para carregar as variáveis de ambiente

// Inicializa o Express
const app = express();

// Middleware
app.use(cors()); // Habilita CORS
app.use(bodyParser.json()); // Configuração para interpretar JSON

// Conectar-se ao MongoDB
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao conectar-se ao MongoDB:', error);
    process.exit(1); // Finaliza o processo se não conseguir conectar ao banco
  });

// Usar as rotas
app.use('/api/alertas', alertaRoutes);

// Inicializar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
