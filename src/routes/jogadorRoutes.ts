import express from 'express';
import {getAllJogadores, updateJogador} from '../controllers/jogadorControllers';
import prisma from '../database/db';

const router = express.Router();

router.get('/jogadores', getAllJogadores);
router.put('/jogador/:id', updateJogador);

export default router;