import express from 'express';
import { getAllCampeonatos } from '../controllers/campeonatoControllers';
import prisma from '../database/db';
import { newCampeonato } from '../controllers/campeonatoControllers';

const router = express.Router();

router.get('/campeonatos', getAllCampeonatos);

const newcampeonato = new newCampeonato();
router.post('/campeonato', newcampeonato.handle);


export default router;