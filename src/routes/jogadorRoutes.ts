import express from 'express';
import { getAllJogadores, newJogador} from '../controllers/jogadorControllers';
import prisma from '../database/db';

const router = express.Router();




router.get('/jogadores', getAllJogadores);

//Rota de criação de jogador
const newjogador = new newJogador();
router.post('/jogador', newjogador.handle);

export default router;