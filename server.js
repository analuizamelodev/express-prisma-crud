import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Criar usuário
app.post('/users', async (req, res) => {
  try {
    const { name, age, email } = req.body;

    const user = await prisma.user.create({
      data: { name, age, email },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Listar usuários
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Atualizar usuário
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, email } = req.body;

    // Verifica se o email já pertence a outro usuário
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser && existingUser.id !== Number(id)) {
      return res.status(400).json({ error: 'E-mail já está em uso por outro usuário.' });
    }

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, age, email },
    });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

// Deletar usuário
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;    
    await prisma.user.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
