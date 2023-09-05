import express from 'express';
import { getAllTimes, newTime } from '../controllers/timeControllers';
import prisma from '../database/db';

const router = express.Router();

router.get('/times', getAllTimes);

const newtime = new newTime();
router.post('/time', newtime.handle);

export default router;