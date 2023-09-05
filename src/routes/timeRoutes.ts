import express from 'express';
import { getAllTimes, updateTime } from '../controllers/timeControllers';
import prisma from '../database/db';

const router = express.Router();

router.get('/times', getAllTimes);
router.put('/time/:id', updateTime);

export default router;
