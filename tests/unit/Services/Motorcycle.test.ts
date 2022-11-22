import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { motorcycleInput, motorcycleOutput, inputArray,
  motorOutputUpdate, motorcycleUpdate } from '../../mocks/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('MotorcycleService', function () {
  describe('Deve ser possível cadastrar uma nova moto', function () {
    it('Deve cadastrar a moto com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.registerMotor(motorcycleInput);

      expect(result).to.be.deep.equal(motorcycleOutput);

      sinon.restore();
    });
  });
  describe('Deve ser possível pesquisar todas as motos', function () {
    it('Deve retornar um array de motos registrados', async function () {
      const arrayMotorOutput: Motorcycle[] = inputArray
        .map((motor: IMotorcycle) => new Motorcycle(motor));
      sinon.stub(Model, 'find').resolves(arrayMotorOutput);

      const service = new MotorcycleService();
      const result = await service.findAll();

      expect(result).to.be.deep.equal(arrayMotorOutput);

      sinon.restore();
    });
  });

  describe('Deve ser possível pesquisar uma moto pelo id', function () {
    it('Deve retornar um objeto de moto pesquisado', async function () {
      sinon.stub(Model, 'find').resolves([motorcycleOutput]);

      const service = new MotorcycleService();
      const result = await service.findById('6348513f34c397abcad040b2');

      expect(result.status).to.be.equal(200);
      expect(result.message).to.be.deep.equal(motorcycleOutput);

      sinon.restore();
    });
  });

  describe('Deve retornar erro se o id for inválido', function () {
    it('Deve retornar um erro 404', async function () {
      sinon.stub(Model, 'find').resolves();

      try {
        const service = new MotorcycleService();
        await service.findById('634851');
      } catch (error) {
        expect((error as Error).message).to.be.deep.equal({ message: 'Invalid mongo id' });
      }
     
      sinon.restore();
    });
  });

  describe('Deve retornar erro se a moto não for encontrada', function () {
    it('Deve retornar um erro 422', async function () {
      sinon.stub(Model, 'find').resolves([]);

      try {
        const service = new MotorcycleService();
        await service.findById('6348513f34c397abcad04666');
      } catch (error) {
        expect((error as Error).message).to.be.deep.equal({ message: 'Motorcycle not found' });
      }
     
      sinon.restore();
    });
  });

  describe('Deve ser possível atualizar uma moto', function () {
    it('Deve atualizar o moto com sucesso', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(motorOutputUpdate);
      const id = '6348513f34c397abcad047e5';
      const service = new MotorcycleService();
      const result = await service.update(id, motorcycleUpdate);

      expect(result.message).to.be.deep.equal(motorOutputUpdate);

      sinon.restore();
    });
  });
});
