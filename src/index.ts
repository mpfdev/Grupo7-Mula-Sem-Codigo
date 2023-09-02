import express from 'express';
import prisma from './database/db';

const app = express();

app.use(express.json());

app.get('/test', async (req, res) => {
  try {
    const jogadores = await prisma.jogador.findMany();

    res.json(jogadores);
  } catch (error) {
    console.error('Erro ao consultar o banco de dados:', error);
    res.status(500).json({ error: 'Erro ao consultar o banco de dados' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

