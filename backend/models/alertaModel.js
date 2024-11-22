const mongoose = require('mongoose');

// Definir o modelo do Alerta
const AlertaSchema = new mongoose.Schema({
  endereco: String,
  grau_inclinacao: Number,
  data_hora: Date,
});

const Alerta = mongoose.model('Alerta', AlertaSchema);

module.exports = Alerta;
