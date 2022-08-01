import { Request, Response, NextFunction } from 'express';
import IMotorcycleController from '../interfaces/IMotorcycleController';
import IMotorcycleService from '../interfaces/IMotorcycleService';
import MotorcycleService from '../services/MotorcycleService';

const MINIMUM_LENGTH = 'Id must have 24 hexadecimal characters';
 
export default class MotorcycleController implements IMotorcycleController {
  private _motorcycleService: IMotorcycleService;

  constructor(motorcycleService: IMotorcycleService = new MotorcycleService()) {
    this._motorcycleService = motorcycleService;
  }

  public async create(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    try {
      const response = await this._motorcycleService.create(req.body);
      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

  public async read(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    try {
      const response = await this._motorcycleService.read();
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  public async readOne(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    try {
      const { id } = req.params;
      if (id.length < 24) { 
        return res.status(400).json({ 
          error: MINIMUM_LENGTH }); 
      }
      const response = await this._motorcycleService.readOne(id);
      if (response instanceof Error) {
        return res.status(404).json(response.message);
      }
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    try {
      const { id } = req.params;
      if (id.length < 24) { 
        return res.status(400).json({ 
          error: MINIMUM_LENGTH }); 
      }
      const response = await this._motorcycleService.update(id, req.body);
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    try {
      const { id } = req.params;
      if (id.length < 24) { 
        return res.status(400).json({ 
          error: MINIMUM_LENGTH }); 
      }
      await this._motorcycleService.delete(id);
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}
