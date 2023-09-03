import express from 'express';
import prisma from './database/db';

import jogadorRouter from './routes/jogadorRoutes';
import timeRouter from './routes/timeRoutes';
import cameponatoRouter from './routes/campeonatoRoutes';

const app = express();

app.use(express.json());

app.use('/', jogadorRouter);
app.use('/', timeRouter);
app.use('/', cameponatoRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

