import express from 'express';
import { getAllTimes } from '../controllers/timeControllers';
import prisma from '../database/db';
import { newTime } from '../controllers/timeControllers';

const router = express.Router();

router.get('/times', getAllTimes);

const newtime = new newTime();
router.post('/time', newtime.handle);

export default router;