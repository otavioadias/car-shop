import ICars from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(objCars: ICars) {
    super(objCars);
    this.doorsQty = objCars.doorsQty;
    this.seatsQty = objCars.seatsQty;
  }
}

export default Car;