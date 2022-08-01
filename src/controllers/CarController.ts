import { Request, Response, NextFunction } from 'express';
import CarControllerInterface from '../interfaces/ICarController';
import CarServiceInterface from '../interfaces/ICarService';
import CarService from '../services/CarService';

const MINIMUM_LENGTH = 'Id must have 24 hexadecimal characters';

export default class CarController implements CarControllerInterface {
  private _carService: CarServiceInterface; 

  constructor(carService: CarServiceInterface = new CarService()) {
    this._carService = carService;
  }

  public async create(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    try {
      const response = await this._carService.create(req.body);
      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

  public async read(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    try {
      const response = await this._carService.read();
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
      const response = await this._carService.readOne(id);
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
      const response = await this._carService.update(id, req.body);
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
      await this._carService.delete(id);
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}
