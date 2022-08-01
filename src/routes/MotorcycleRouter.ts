import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';

const path = '/motorcycles/:id';
const motorcycleRoutes = Router();

const motorcycleController = new MotorcycleController();

motorcycleRoutes.post('/motorcycles', (req, res, next) =>
  motorcycleController.create(req, res, next));
motorcycleRoutes.get('/motorcycles', (req, res, next) =>
  motorcycleController.read(req, res, next));
motorcycleRoutes.get(path, (req, res, next) =>
  motorcycleController.readOne(req, res, next));
motorcycleRoutes.put(path, (req, res, next) =>
  motorcycleController.update(req, res, next));
motorcycleRoutes.delete(path, (req, res, next) =>
  motorcycleController.delete(req, res, next));

export default motorcycleRoutes;