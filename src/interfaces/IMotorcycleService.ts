import { IMotorcycle } from './IMotorcycle';

export default interface IMotorcycleService {
  create(obj: IMotorcycle): Promise<IMotorcycle>;
  read(): Promise<IMotorcycle[]>;
  readOne(id_: string): Promise<IMotorcycle | null>;
  update(id_: string, obj: IMotorcycle): Promise<IMotorcycle | null>;
  delete(id_: string): Promise<IMotorcycle | null>;
}