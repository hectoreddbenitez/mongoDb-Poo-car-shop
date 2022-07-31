// import { Model } from 'mongoose';
import { Model } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import GenericModel from './Generic.model';
import { carMongooseModel } from './schemas/CarSchema';

export default class CarModel extends GenericModel<ICar> {
  constructor(mongooseModel: Model<ICar> = carMongooseModel) {
    super(mongooseModel);
  }
}
