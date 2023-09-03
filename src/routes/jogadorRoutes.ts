import express from 'express';
import {getAllJogadores} from '../controllers/jogadorController';
import prisma from '../database/db';

const router = express.Router();

router.get('/jogador', getAllJogadores);

export default router;