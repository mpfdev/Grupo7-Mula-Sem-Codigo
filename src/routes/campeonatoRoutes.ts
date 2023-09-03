import express from 'express';
import { getAllCampeonatos } from '../controllers/campeonatoControllers';
import prisma from '../database/db';

const router = express.Router();

router.get('/campeonatos', getAllCampeonatos);

export default router;