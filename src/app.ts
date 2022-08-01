import express from 'express';
import errorMiddleware from './middlewares/errorMiddlewares';
import carRouter from './routes/CarRouter';

const app = express();
// import errorMiddleware from './middlewares/errorMiddleware';
// import motoRouter from './routes/MotoRouter';
app.use(express.json());
app.use(carRouter);
app.use(errorMiddleware);

// server.addMiddleware(motoRouter);
// server.addMiddleware(errorMiddleware);

export default app;
