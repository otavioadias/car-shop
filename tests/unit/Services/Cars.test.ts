import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carInput, carOutput } from '../../mocks/Cars';
import CarsService from '../../../src/Services/CarsService';

describe('Deve ser possível cadastrar um novo carro', function () {
  it('Deve cadastrar o novo carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);
    const service = new CarsService();
    const result = await service.registerCar(carInput);
    expect(result).to.be.deep.equal(carOutput);
  });
});