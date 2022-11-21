import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carInput, carOutput, inputArray } from '../../mocks/Cars';
import CarsService from '../../../src/Services/CarsService';
import Cars from '../../../src/Domains/Car';
import ICars from '../../../src/Interfaces/ICar';

describe('CarsService', function () {
  describe('Deve ser possível cadastrar um novo carro', function () {
    it('Deve cadastrar o novo carro com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(carOutput);

      const service = new CarsService();
      const result = await service.registerCar(carInput);

      expect(result).to.be.deep.equal(carOutput);

      sinon.restore();
    });
  });
  describe('Deve ser possível pesquisar todos os carro', function () {
    it('Deve retornar um array de carros registrados', async function () {
      const arrayCarOutput: Cars[] = inputArray.map((car: ICars) => new Cars(car));
      sinon.stub(Model, 'find').resolves(arrayCarOutput);

      const service = new CarsService();
      const result = await service.findAll();

      expect(result).to.be.deep.equal(arrayCarOutput);

      sinon.restore();
    });
  });

  describe('Deve ser possível pesquisar um carro pelo id', function () {
    it('Deve retornar um objeto do carro pesquisado', async function () {
      sinon.stub(Model, 'find').resolves([carOutput]);

      const service = new CarsService();
      const result = await service.findById('6348513f34c397abcad040b2');

      expect(result.message).to.be.deep.equal(carOutput);

      sinon.restore();
    });
  });
});
