import Motorcycle from '../../src/Domains/Motorcycle';
import IMotorcycle from '../../src/Interfaces/IMotorcycle';

const motorcycleInput: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleResponse = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleOutput: Motorcycle = new Motorcycle(motorcycleResponse);

const motorcycleUpdate: IMotorcycle = {
  model: 'Honda Cb 600',
  year: 2007,
  color: 'Blue',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorResponseUpdate = {
  id: '6348513f34c397abcad047e5',
  model: 'Honda Cb 600',
  year: 2007,
  color: 'Blue',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorOutputUpdate: Motorcycle = new Motorcycle(motorResponseUpdate);

const inputArray = [
  {
    model: 'Honda Cb 600 Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

export { 
  motorcycleInput, 
  motorcycleOutput, 
  inputArray, 
  motorOutputUpdate, 
  motorcycleUpdate, 
  motorResponseUpdate,
};