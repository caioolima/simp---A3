import React, { useState, useEffect } from 'react';

function Alertas() {
  const [alertas, setAlertas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/alertas')
      .then((response) => response.json())
      .then((data) => {
        setAlertas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar alertas:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Alertas de Poste Inclinado</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {alertas.map((alerta) => (
            <li key={alerta._id}>
              <p><strong>Localização:</strong> {alerta.endereco}</p>
              <p><strong>Grau de Inclinação:</strong> {alerta.grau_inclinacao}°</p>
              <p><strong>Data:</strong> {new Date(alerta.data_hora).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Alertas;
