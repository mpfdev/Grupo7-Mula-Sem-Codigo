import express from 'express';
import { getAllCampeonatos, updateCampeonato, newCampeonato } from '../controllers/campeonatoControllers';
import prisma from '../database/db';

const router = express.Router();

router.get('/campeonatos', getAllCampeonatos);
router.put('/campeonato/:id', updateCampeonato);
router.post('/campeonato', newCampeonato);

export default router;