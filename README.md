SIMP - Sistema de Monitoramento de Postes
Bem-vindo ao SIMP, um sistema desenvolvido para monitorar a inclinação de postes em tempo real, oferecendo uma interface intuitiva para visualizar alertas, detalhes dos chamados, e gerenciar possíveis problemas de infraestrutura urbana.

🚀 Funcionalidades Principais
Monitoramento em Tempo Real: Detecta o grau de inclinação de postes e exibe alertas críticos.
Gestão de Chamados: Exibição de chamados e formulários enviados por usuários.
Navegação Detalhada: Permite acessar detalhes específicos de cada poste.
Interface Responsiva: Compatível com dispositivos móveis, tablets e desktops.
Modal de Detalhes: Visualização completa das informações de chamados.
📁 Estrutura do Projeto

arduino

SIMP/
├── public/
├── src/
│   ├── components/
│   │   ├── Alertas e Formulário/
│   │   │   └── modal.jsx
│   │   ├── home/
│   │   │   └── Footer.jsx
│   │   └── principal.jsx
│   ├── pages/
│   │   └── Alertas.jsx
│   ├── styles/
│   │   └── Alertas.module.css
│   └── App.jsx
├── package.json
├── README.md
└── .env

🛠️ Tecnologias Utilizadas

Frontend: React.js
Estilização: CSS Modules
Backend: API em Node.js hospedada no Render
Navegação: React Router
Gerenciamento de Estado: React Hooks (useState, useEffect, useNavigate)

📦 Dependências

Antes de rodar o projeto, instale as dependências utilizando:
npm install

Principais pacotes utilizados:

react
react-router-dom
react-scripts
⚙️ Configuração do Ambiente
Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente, se necessário. Exemplo:

env

🖥️ Como Executar o Projeto
Clone o repositório:

git clone https://github.com/seu-usuario/simp.git
cd simp
Instale as dependências:

npm install
Inicie o projeto:
npm start

O sistema estará disponível em http://localhost:3000.

📝 Rotas Implementadas
Home: / - Página principal do sistema.
Alertas: /alertas - Exibição dos alertas e chamados.
Detalhes de Postes: /poste/:nomePoste - Página com informações detalhadas do poste selecionado.
🔧 API Endpoints

A aplicação consome os seguintes endpoints:

Lista de Alertas: GET /api/alertas

Retorna a lista de alertas de postes inclinados.
Lista de Formulários: GET /api/form

Retorna os chamados abertos pelos usuários.
🎨 Design e Estilização
O sistema utiliza CSS Modules para estilização, garantindo um código modular e isolado. As classes são organizadas no arquivo Alertas.module.css para cada página ou componente.

Exemplos de Estilização
Cards: Apresentação dos alertas e chamados com bordas arredondadas, sombras suaves e disposição responsiva.
Botões: Ações com transições suaves, mantendo acessibilidade e um design atraente.
📱 Responsividade
A interface foi projetada para ser totalmente responsiva, adaptando-se a diferentes resoluções de tela. Media queries foram implementadas para layouts menores, como:

css
Copiar código
@media (max-width: 768px) {
  .alertItem {
    width: calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .alertItem {
    width: 100%;
  }
}

📜 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo, modificá-lo e distribuí-lo.
