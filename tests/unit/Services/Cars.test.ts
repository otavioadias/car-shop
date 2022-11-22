import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carInput, carOutput, carOutputUpdate, carUpdate, inputArray } from '../../mocks/Cars';
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

      expect(result.status).to.be.equal(200);
      expect(result.message).to.be.deep.equal(carOutput);

      sinon.restore();
    });
  });

  describe('Deve retornar erro se o id for inválido', function () {
    it('Deve retornar um erro 404', async function () {
      sinon.stub(Model, 'find').resolves();

      try {
        const service = new CarsService();
        await service.findById('634851');
      } catch (error) {
        expect((error as Error).message).to.be.deep.equal({ message: 'Invalid mongo id' });
      }
     
      sinon.restore();
    });
  });

  describe('Deve retornar erro se o carro não for encontrado', function () {
    it('Deve retornar um erro 422', async function () {
      sinon.stub(Model, 'find').resolves([]);

      try {
        const service = new CarsService();
        await service.findById('6348513f34c397abcad04666');
      } catch (error) {
        expect((error as Error).message).to.be.deep.equal({ message: 'Car not found' });
      }
     
      sinon.restore();
    });
  });

  describe('Deve ser possível atualizar um carro', function () {
    it('Deve atualizar o carro com sucesso', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutputUpdate);
      const id = '6348513f34c397abcad046c3';
      const service = new CarsService();
      const result = await service.update(id, carUpdate);

      expect(result.message).to.be.deep.equal(carOutputUpdate);

      sinon.restore();
    });
  });
});
