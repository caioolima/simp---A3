import React, { useState } from 'react';

function Formulario() {
  const [endereco, setEndereco] = useState('');
  const [grauInclinacao, setGrauInclinacao] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoAlerta = {
      endereco,
      grau_inclinacao: parseFloat(grauInclinacao),
      data_hora: new Date(),
    };

    try {
      const response = await fetch('http://localhost:5000/api/alertas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoAlerta),
      });

      if (response.ok) {
        alert('Alerta enviado com sucesso!');
        setEndereco('');
        setGrauInclinacao('');
      } else {
        alert('Erro ao enviar alerta');
      }
    } catch (error) {
      console.error('Erro ao enviar alerta:', error);
    }
  };

  return (
    <div>
      <h1>Relatar Novo Alerta de Poste Inclinado</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Endereço do Poste</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Grau de Inclinação</label>
          <input
            type="number"
            value={grauInclinacao}
            onChange={(e) => setGrauInclinacao(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar Alerta</button>
      </form>
    </div>
  );
}

export default Formulario;
