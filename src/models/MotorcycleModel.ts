import { Model } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import IGenericModel from './Generic.model';
import { motorcycleMongooseModel } from './schemas/MotoSchema';

export default class MotorcylceModel extends IGenericModel<IMotorcycle> {
  constructor(mongooseModel: Model<IMotorcycle> = motorcycleMongooseModel) {
    super(mongooseModel);
  }
}