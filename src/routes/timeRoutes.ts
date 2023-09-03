import express from 'express';
import { getAllTimes } from '../controllers/timeControllers';
import prisma from '../database/db';

const router = express.Router();

router.get('/times', getAllTimes);

export default router;