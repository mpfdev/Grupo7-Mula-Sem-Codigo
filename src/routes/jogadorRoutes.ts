import express from 'express';

import {getAllJogadores, updateJogador, newJogador, deleteJogador} from '../controllers/jogadorControllers';

import prisma from '../database/db';

const router = express.Router();

router.get('/jogadores', getAllJogadores);
router.put('/jogador/:id', updateJogador);
router.post('/jogador', newJogador);
router.delete('/jogador/:id', deleteJogador);

export default router;