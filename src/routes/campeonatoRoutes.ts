import express from 'express';
import { getAllCampeonatos, timeOnCampeonato, newCampeonato } from '../controllers/campeonatoControllers';
import prisma from '../database/db';

const router = express.Router();

router.get('/campeonatos', getAllCampeonatos);

const newcampeonato = new newCampeonato();
router.post('/campeonato', newcampeonato.handle);

//Rota de criação time
const timeoncampeonato = new timeOnCampeonato();
router.post('/timecampeonato', timeoncampeonato.handle);

export default router;