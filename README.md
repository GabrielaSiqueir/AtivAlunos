📚 Projeto: Cadastro de Alunos (Web + Mobile)
Este repositório contém dois projetos:

📱 Mobile: Aplicativo feito com Expo (React Native)

💻 Web: Aplicação web feita com React + Vite

Ambos os projetos se comunicam com a mesma API:
👉 API pública: http://leoproti.com.br:8004

📂 Estrutura de Pastas:
bash
Copiar
Editar
AtivAlunos/
├── cadastro-alunos/          # Projeto Web (React + Vite)
└── cadastro-alunos-mobile/   # Projeto Mobile (Expo + React Native)
🚀 Instruções para Rodar o Projeto Web:
Acesse a pasta do projeto web:
cd cadastro-alunos


Instale as dependências:
npm install


Configure o arquivo .env:
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
VITE_API_URL=http://leoproti.com.br:8004

Rode o projeto:
npm run dev

Acesse no navegador com a porta que abrir semelhante a esta:

http://localhost:5173

📲 Instruções para Rodar o Projeto Mobile (Expo):

Acesse a pasta do projeto mobile:
cd cadastro-alunos-mobile

Instale as dependências:
npm install


Configure o acesso à API no mobile:
No arquivo:
src/api/alunoApi.js
Altere a URL da API para o IP da sua máquina na rede local:
const api = axios.create({
  baseURL: 'http://SEU_IP_LOCAL:8004',  // Exemplo: http://192.168.0.203:8004
});

⚠️ Importante: Não use localhost no mobile! Use o IP da sua máquina.

Inicie o Expo:
npx expo start

No celular:
Instale o app Expo Go.

Escaneie o QR code que aparece no terminal.

✅ Funcionalidades:
Listagem de alunos

Cadastro de novo aluno

Edição de aluno existente

Exclusão de aluno

Integração tanto no web quanto no mobile com a API REST

✅ Tecnologias usadas:
Web: React + Vite + Axios + Material UI + React Router

Mobile: React Native + Expo + Axios + React Navigation

