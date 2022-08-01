import App from './app';
// import errorMiddleware from './middlewares/errorMiddleware';
import carRouter from './routes/CarRouter';
// import motoRouter from './routes/MotoRouter';

const server = new App();

server.addMiddleware(carRouter);

// server.addMiddleware(motoRouter);
// server.addMiddleware(errorMiddleware);

export default server;
