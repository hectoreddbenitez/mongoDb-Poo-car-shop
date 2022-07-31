import { Model, isValidObjectId } from 'mongoose';
import { IModel } from '../interfaces/IModel';

export default abstract class GenericModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(modelMongoose: Model<T>) {
    this._model = modelMongoose;
  }

  async create(obj: T): Promise<T> {
    return this._model.create(obj);
  }

  async read(): Promise<T[]> {
    return this._model.find();
  }

  async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this._model.findById(id);
  }

  async update(id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this._model.findOneAndUpdate({ _id: id }, obj, {
      returnOriginal: false,
    });
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this._model.findByIdAndDelete({ _id: id });
  }
}
