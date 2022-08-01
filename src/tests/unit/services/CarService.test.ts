import { expect } from 'chai';
import { ICar } from '../../../interfaces/ICar';
import { IModel } from '../../../interfaces/IModel';
import CarService from '../../../services/CarService';
import carMocks from '../Mocks/CarMocks';


class CarModelMock implements IModel<ICar> {
    constructor() {}
 async create(obj: ICar): Promise<ICar> {

    return carMocks
  }
  async read(): Promise<ICar[]> {
    return [carMocks]
  }
  async readOne(id: string): Promise<ICar | null> {
    if(id === '') return null;
    return carMocks

  }
  async update(id: string, obj: ICar): Promise<ICar | null> {
    if(id === '') return null;
    return carMocks
  }
  async delete(id: string): Promise<ICar | null> {
    if(id === '') return null;
    return carMocks
  }
}

describe('CarService Tests', () => {
  describe('Create Car', () => {
    it('Sucesso', async () => {
      const carService = new CarService(new CarModelMock())
      const response = await carService.create(carMocks);
      expect(response).to.be.equal(carMocks)
    })
  })

  describe('Read Car', () => {
    it('Sucesso', async () => {
      const carService = new CarService(new CarModelMock())
      const response = await carService.read();
      expect(response).to.be.deep.equal([carMocks])
    })
  })

  describe('ReadOne Car', () => {
    it('Sucesso', async () => {
      const carService = new CarService(new CarModelMock())
      const response = await carService.readOne('xablau');
      expect(response).to.be.deep.equal(carMocks)
    })
    it('caso id esteja errado', async () => {
      try {
        const carService = new CarService(new CarModelMock())
        const response = await carService.readOne('');
      } catch (err: any) {
        expect(err.message).to.be.equal('Object not found')
      }
    })
  })

  describe('Update Car', () => {
    it('Sucesso', async () => {
      const carService = new CarService(new CarModelMock())
      const response = await carService.update('xablau', carMocks);
      expect(response).to.be.deep.equal(carMocks)
    })
    
  })
})