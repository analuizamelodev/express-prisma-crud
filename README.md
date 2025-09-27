# Express + Prisma CRUD API

Uma API RESTful simples construída com Express.js e Prisma ORM para operações CRUD (Create, Read, Update, Delete) de usuários.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web para Node.js
- **Prisma** - ORM moderno para Node.js e TypeScript
- **PostgreSQL** - Banco de dados relacional
- **Docker** - Containerização do banco de dados

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- Docker e Docker Compose
- npm ou yarn

## 🛠️ Instalação

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd express-prisma-crud
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure o banco de dados**

```bash
# Inicie o PostgreSQL com Docker
docker-compose up -d
```

4. **Configure as variáveis de ambiente**
   Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/mydatabase"
```

5. **Execute as migrações do Prisma**

```bash
npx prisma migrate dev
```

6. **Gere o cliente Prisma**

```bash
npx prisma generate
```

## 🚀 Como executar

### Desenvolvimento

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

### Produção

```bash
node server.js
```

## 📚 Endpoints da API

### Usuários

| Método | Endpoint     | Descrição                      |
| ------ | ------------ | ------------------------------ |
| GET    | `/users`     | Lista todos os usuários        |
| POST   | `/users`     | Cria um novo usuário           |
| PUT    | `/users/:id` | Atualiza um usuário específico |
| DELETE | `/users/:id` | Remove um usuário específico   |

### Exemplos de uso

#### Criar usuário

```bash
POST /users
Content-Type: application/json

{
  "name": "João Silva",
  "age": 30,
  "email": "joao@email.com"
}
```

#### Listar usuários

```bash
GET /users
```

#### Atualizar usuário

```bash
PUT /users/1
Content-Type: application/json

{
  "name": "João Santos",
  "age": 31,
  "email": "joao.santos@email.com"
}
```

#### Deletar usuário

```bash
DELETE /users/1
```

## 🗄️ Modelo de Dados

### User

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  age   Int    @default(0)
  email String @unique
}
```

## 🐳 Docker

O projeto inclui um `docker-compose.yml` para executar PostgreSQL:

```bash
# Iniciar o banco de dados
docker-compose up -d

# Parar o banco de dados
docker-compose down
```

## 🛠️ Scripts disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento com nodemon
- `npm test` - Executa os testes (não implementado)

## 📁 Estrutura do projeto

```
express-prisma-crud/
├── prisma/
│   ├── migrations/          # Migrações do banco de dados
│   └── schema.prisma        # Schema do Prisma
├── docker-compose.yml       # Configuração do Docker
├── package.json             # Dependências e scripts
├── server.js                # Servidor Express
└── README.md                # Documentação
```

## 🔧 Comandos úteis do Prisma

```bash
# Visualizar o banco de dados
npx prisma studio

# Resetar o banco de dados
npx prisma migrate reset

# Ver status das migrações
npx prisma migrate status

# Criar uma nova migração
npx prisma migrate dev --name nome-da-migracao
```

## ⚠️ Tratamento de Erros

A API possui tratamento básico de erros para:

- Criação de usuários com email duplicado
- Atualização com email já existente
- Usuários não encontrados
- Erros de validação

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Autor

Desenvolvido por [Seu Nome]
