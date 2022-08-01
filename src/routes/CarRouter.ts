import { Router } from 'express';
import CarController from '../controllers/CarController';

const carRoutes = Router();

const carController = new CarController();

carRoutes.post('/cars', (req, res, next) =>
  carController.create(req, res, next));
carRoutes.get('/cars', (req, res, next) =>
  carController.read(req, res, next));
carRoutes.get('/cars/:id', (req, res, next) =>
  carController.readOne(req, res, next));
carRoutes.put('/cars/:id', (req, res, next) =>
  carController.update(req, res, next));
carRoutes.delete('/cars/:id', (req, res, next) =>
  carController.delete(req, res, next));

export default carRoutes;