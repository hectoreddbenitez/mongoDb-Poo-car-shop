import express from 'express';
import errorMiddleware from './middlewares/errorMiddlewares';
import carRouter from './routes/CarRouter';
import motorcycleRouter from './routes/MotorcycleRouter';

const app = express();

app.use(express.json());
app.use(carRouter);
app.use(motorcycleRouter);
app.use(errorMiddleware);

export default app;
