import express from 'express';

import { getAllTimes, updateTime, newTime, deleteTime} from '../controllers/timeControllers';

import prisma from '../database/db';

const router = express.Router();

router.get('/times', getAllTimes);
router.put('/time/:id', updateTime);
router.post('/time', newTime);
router.delete('/time/:id', deleteTime);

export default router;

