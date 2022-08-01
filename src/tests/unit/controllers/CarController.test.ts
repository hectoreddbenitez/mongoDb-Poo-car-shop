import * as sinon from 'sinon';
import { expect } from 'chai';
import CarController from '../../../controllers/CarController';
import ICarService from '../../../interfaces/ICarService';
import { ICar } from '../../../interfaces/ICar';
import { NextFunction, Request, Response } from 'express';
import carMocked from '../Mocks/CarMocks';


class CarServiceMock implements ICarService {
constructor(){}
  async create(obj: ICar): Promise<ICar> {
    return carMocked;
  }
  async read(): Promise<ICar[]> {
    return [carMocked];
  }
  async readOne(id_: string): Promise<ICar | null> {
    return carMocked;
  }
  async update(id_: string, obj: ICar): Promise<ICar | null> {
    return carMocked;
  }
  async delete(id_: string): Promise<ICar | null> {
    return carMocked;
  }
  
}

describe('CarController Test', () => {
  describe('Create Car', async ( )=> {
    const req = {} as Request;
    const res = {} as Response;
    const next = () => ({}) as NextFunction;
    
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.body = carMocked
    });
    it('Sucesso',async () => {
      const carController = new CarController(new CarServiceMock());
      await carController.create(req, res, next);
  
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMocked)).to.be.true;

    })

    describe('Read Car', async ( )=> {
      const req = {} as Request;
      const res = {} as Response;
      const next = () => ({}) as NextFunction;
      
      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        req.body = {}
      });
      it('Sucesso',async () => {
        const carController = new CarController(new CarServiceMock());
        await carController.read(req, res, next);
    
        expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;  
      })
  })

  describe('ReadOne Car', async ( )=> {
    const req = {} as Request;
    const res = {} as Response;
    const next = () => ({}) as NextFunction;
    
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.params = {id: 'asdgfhgjhksdfghjhgfdfghjjhgfdfghj'}
    });
    it('Sucesso',async () => {
      const carController = new CarController(new CarServiceMock());
      await carController.readOne(req, res, next);
  
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;  
    })
})

describe('Update Car', async ( )=> {
  const req = {} as Request;
  const res = {} as Response;
  const next = () => ({}) as NextFunction;
  
  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    req.params = {id: 'asdgfhgjhksdfghjhgfdfghjjhgfdfghj'}
    req.body = carMocked
  });
  it('Sucesso',async () => {
    const carController = new CarController(new CarServiceMock());
    await carController.update(req, res, next);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;  
  })
})

describe('Delete Car', async ( )=> {
  const req = {} as Request;
  const res = {} as Response;
  const next = () => ({}) as NextFunction;
  
  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    req.params = {id: 'asdgfhgjhksdfghjhgfdfghj'}
    req.body = carMocked
  });
  it('Sucesso',async () => {
    const carController = new CarController(new CarServiceMock());
    await carController.delete(req, res, next);

    expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;  
  })
})
})
})
