import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import config from './config/index.js';
import { authMiddleware, errorMiddleware } from './middlewares/index.js';
import { userRouter, songRouter } from './routes/index.js';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(
    cors({
        origin: config.client.url,
    }),
);

app.use(authMiddleware);

app.use(userRouter);
app.use(songRouter);

app.use(errorMiddleware);

export default app;
