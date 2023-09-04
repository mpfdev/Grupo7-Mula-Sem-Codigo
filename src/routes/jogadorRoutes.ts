import express from 'express';
import { getAllJogadores } from '../controllers/jogadorControllers';
import { newJogador } from '../controllers/jogadorControllers';
import prisma from '../database/db';

const router = express.Router();




router.get('/jogadores', getAllJogadores);

const newjogador = new newJogador();
router.post('/jogador', newjogador.handle);



export default router;