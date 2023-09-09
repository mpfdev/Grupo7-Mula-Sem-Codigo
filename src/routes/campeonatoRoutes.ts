import express from 'express';
import { getAllCampeonatos, updateCampeonato, newCampeonato, newTimeOnCampeonato, deleteCampeonato, getCampeonatoId} from '../controllers/campeonatoControllers';
import prisma from '../database/db';

const router = express.Router();

router.get('/campeonatos', getAllCampeonatos);
router.get('/campeonato/:id', getCampeonatoId);
router.post('/campeonato', newCampeonato);
router.post('/time-campeonato', newTimeOnCampeonato);
router.put('/campeonato/:id', updateCampeonato);
router.delete('/campeonato/:id', deleteCampeonato);

export default router;
