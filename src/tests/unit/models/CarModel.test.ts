import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import CarModel from '../../../models/CarModel';
import { Types, Model } from 'mongoose';
import carMocked from '../Mocks/CarMocks';


describe('CarModel Tests', () => {
  describe('Create car', () => {
    const _id = new Types.ObjectId();
    before(() => {
      sinon.stub(Model, 'create').resolves({_id,...carMocked});
    });
    after(() => {
      (Model.create as SinonStub).restore();
    });

    it('Create feito com sucesso', async () => {
      const carModel = new CarModel();
      const createdCar = await carModel.create(carMocked);

      expect(createdCar).to.be.deep.equal({_id,...carMocked})
    });
  });

  describe('Read cars', () => {
    const _id = new Types.ObjectId();
    before(() => {
      sinon.stub(Model, 'find').resolves([{_id,...carMocked}]);
    });
    after(() => {
      (Model.find as SinonStub).restore();
    });

    it('Read com sucesso', async () => {
      const carModel = new CarModel();
      const createdCar = await carModel.read();

      expect(createdCar).to.be.deep.equal([{_id,...carMocked}])
    });
  });

  describe('ReadOne cars', () => {
    const _id = new Types.ObjectId();
    before(() => {
      sinon.stub(Model, 'findById').resolves([{_id,...carMocked}]);
    });
    after(() => {
      (Model.findById as SinonStub).restore();
    });

    it('ReadOne com id valido', async () => {
      const carModel = new CarModel();
      const createdCar = await carModel.readOne(_id.toString());

      expect(createdCar).to.be.deep.equal([{_id,...carMocked}])
    });

    it('ReadOne com id invalido', async () => {
      const carModel = new CarModel();
      const createdCar = await carModel.readOne('asdfghj123');

      expect(createdCar).to.be.deep.equal(null)
    });
  });
}); 