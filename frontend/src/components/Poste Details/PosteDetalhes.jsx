import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PosteDetalhes() {
  const { nomePoste } = useParams(); // Pega o nome do poste da URL
  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    // Buscar detalhes do poste com o nome
    fetch(`https://simp-a3.onrender.com/api/alertas?nome=${nomePoste}`)
      .then((response) => response.json())
      .then((data) => {
        setPostDetails(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes do poste:', error);
      });
  }, [nomePoste]);

  return (
    <div>
      <h1>Detalhes do Poste: {nomePoste}</h1>
      {postDetails ? (
        <div>
          <p><strong>Status:</strong> {postDetails.status}</p>
          <p><strong>Localização:</strong> {postDetails.endereco}</p>
          <p><strong>Grau de Inclinação:</strong> {postDetails.grau_inclinacao}°</p>
          <p><strong>Data:</strong> {new Date(postDetails.data_hora).toLocaleString()}</p>
        </div>
      ) : (
        <p>Carregando detalhes...</p>
      )}
    </div>
  );
}

export default PosteDetalhes;
