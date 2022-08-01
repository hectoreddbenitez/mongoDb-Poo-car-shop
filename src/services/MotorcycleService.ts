import { IModel } from '../interfaces/IModel';
import { IMotorcycle, motoSchema } from '../interfaces/IMotorcycle';
import IMotorcycleService from '../interfaces/IMotorcycleService';
import MotorcycleModel from '../models/MotorcycleModel';

const NOT_FOUND = 'Object not found';

export default class MotorcycleService implements IMotorcycleService {
  private _motorcycleModel: IModel<IMotorcycle>;

  constructor(motorcycleModel: IModel<IMotorcycle> = new MotorcycleModel()) {
    this._motorcycleModel = motorcycleModel;
  }

  async create(obj: IMotorcycle): 
  Promise<IMotorcycle> {
    motoSchema.parse(obj);
    const response = await this._motorcycleModel.create(obj);
    return response;
  }

  async read(): Promise<IMotorcycle[]> {
    const response = await this._motorcycleModel.read();
    return response;
  }

  async readOne(id_: string): Promise<IMotorcycle | null> {
    const response = await this._motorcycleModel.readOne(id_);
    if (!response) throw new Error(NOT_FOUND);
    return response;
  }

  async update(id_: string, obj: IMotorcycle): Promise<IMotorcycle | null> {
    motoSchema.parse(obj);
    const response = await this._motorcycleModel.readOne(id_);
    if (!response) throw new Error(NOT_FOUND);
    return this._motorcycleModel.update(id_, obj);
  }

  async delete(id_: string): Promise<IMotorcycle | null> {
    const response = await this._motorcycleModel.readOne(id_);
    if (!response) throw new Error(NOT_FOUND);
    const response2 = await this._motorcycleModel.delete(id_);
    return response2;
  }
}
