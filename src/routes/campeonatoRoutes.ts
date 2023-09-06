import express from 'express';
import { getAllCampeonatos, } from '../controllers/campeonatoControllers';
import prisma from '../database/db';
import { updateJogador } from '../controllers/jogadorControllers';

const router = express.Router();

router.get('/campeonatos', getAllCampeonatos);

router.put('/campeonato/:id', updateJogador);

export default router;