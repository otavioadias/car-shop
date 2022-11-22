import Cars from '../../src/Domains/Car';
import ICars from '../../src/Interfaces/ICar';

const carInput: ICars = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carResponse = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carOutput: Cars = new Cars(carResponse);

const carUpdate: ICars = {
  model: 'Marea',
  year: 2004,
  color: 'White',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carResponseUpdate = {
  id: '6348513f34c397abcad046c3',
  model: 'Marea',
  year: 2004,
  color: 'White',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carOutputUpdate: Cars = new Cars(carResponseUpdate);

const inputArray = [
  {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    model: 'Uno da Escada',
    year: 1960,
    color: 'Red',
    buyValue: 1500,
    doorsQty: 2,
    seatsQty: 2,
  },
];

export { carInput, carOutput, inputArray, carUpdate, carOutputUpdate };