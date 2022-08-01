import { ICar } from './ICar';

export default interface CarServiceInterface {
  create(obj: ICar): Promise<ICar>;
  read(): Promise<ICar[]>;
  readOne(id_: string): Promise<ICar | null>;
  update(id_: string, obj: ICar): Promise<ICar | null>;
  delete(id_: string): Promise<ICar | null>;
}
