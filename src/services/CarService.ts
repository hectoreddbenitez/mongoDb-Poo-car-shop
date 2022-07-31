import { ICar, CarAndVehicleSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import CarModel from '../models/CarModel';
import CarServiceInterface from '../interfaces/CarServiceInterface';

const NOT_FOUND = 'Object not found';
export default class CarService implements CarServiceInterface {
  private _carModel: IModel<ICar>;

  constructor(carModel: IModel<ICar> = new CarModel()) {
    this._carModel = carModel;
  }

  async create(obj: ICar): Promise<ICar> {
    CarAndVehicleSchema.parse(obj);
    const response = await this._carModel.create(obj);
    return response;
  }

  async read(): Promise<ICar[]> {
    const response = await this._carModel.read();
    return response;
  }

  async readOne(id_: string): Promise<ICar | null> {
    const response = await this._carModel.readOne(id_);
    if (!response) throw new Error(NOT_FOUND);
    return response;
  }

  async update(id_: string, obj: ICar): Promise<ICar | null> {
    CarAndVehicleSchema.parse(obj);
    const response = await this._carModel.readOne(id_);
    if (!response) throw new Error(NOT_FOUND);
    const responseUpdated = this._carModel.update(id_, obj);
    return responseUpdated;
  }

  async delete(id_: string): Promise<ICar | null> {
    const response = await this._carModel.readOne(id_);
    if (!response) throw new Error(NOT_FOUND);
    const response2 = await this._carModel.delete(id_);
    return response2;
  }
}
