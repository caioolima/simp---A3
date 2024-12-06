# SIMP - Sistema de Monitoramento de Postes

Bem-vindo ao **SIMP**, um sistema desenvolvido para monitorar a inclinação de postes em tempo real, oferecendo uma interface intuitiva para visualizar alertas, detalhes dos chamados, e gerenciar possíveis problemas de infraestrutura urbana.

---

### 🚀 Funcionalidades Principais

- **Monitoramento em Tempo Real**: Detecta o grau de inclinação de postes e exibe alertas críticos.
- **Gestão de Chamados**: Exibição de chamados e formulários enviados por usuários.
- **Navegação Detalhada**: Permite acessar detalhes específicos de cada poste.
- **Interface Responsiva**: Compatível com dispositivos móveis, tablets e desktops.
- **Modal de Detalhes**: Visualização completa das informações de chamados.

---

### 📁 Estrutura do Projeto

```plaintext
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
```

### 🛠️ Tecnologias Utilizadas
- **Frontend: React.js
- **Estilização: CSS Modules
- **Backend: API em Node.js hospedada no Render
- **Navegação: React Router
- **Gerenciamento de Estado: React Hooks (useState, useEffect)
- **Hospedagem: Render (API)

### 🌐 API Endpoints
- **GET /api/alertas: Retorna uma lista de alertas de postes inclinados.
- **GET /api/form: Retorna uma lista de chamados e formulários enviados pelos usuários.

### ⚙️ Como Executar o Projeto
- **Pré-requisitos
- **Node.js instalado
- **Gerenciador de pacotes npm ou yarn

### Passos
- **Clone o repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/simp.git

- **Navegue para o diretório do projeto:
bash
Copiar código
cd simp

- **Instale as dependências:
bash
Copiar código
npm install
Configure as variáveis de ambiente no arquivo .env.

- **Inicie o servidor de desenvolvimento:

bash
Copiar código
npm start

- **Acesse o projeto no navegador:
http://localhost:3000

### 🎨 Estilização
A estilização é feita com CSS Modules, garantindo encapsulamento de estilos. Os arquivos de estilos estão organizados na pasta src/styles.

### 📖 Licença
Este projeto está licenciado sob a MIT License. Sinta-se à vontade para utilizá-lo, modificá-lo e distribuí-lo.

