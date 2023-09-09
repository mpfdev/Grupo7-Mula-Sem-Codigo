import express from 'express';

import { getAllTimes, updateTime, newTime, deleteTime, getTimeId} from '../controllers/timeControllers';

import prisma from '../database/db';

const router = express.Router();

router.get('/times', getAllTimes);
router.get('/times/:id', getTimeId);
router.post('/time', newTime);
router.put('/time/:id', updateTime);
router.delete('/time/:id', deleteTime);

export default router;

