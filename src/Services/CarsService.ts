import mongoose from 'mongoose';
import Cars from '../Domains/Car';
import ICars from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

const { ObjectId } = mongoose.Types;

class CarsService {
  private createCarsDomain(cars: ICars | null): Cars | null {
    if (cars) {
      return new Cars(cars);
    }
    return null;
  }

  public async registerCar(car: ICars) {
    const carsODM = new CarsODM();
    const newCar = await carsODM.create(car);
    return this.createCarsDomain(newCar);
  }

  public async findAll() {
    const carsODM = new CarsODM();
    const cars = await carsODM.findAll();
    const carsArray = cars.map((car) => this.createCarsDomain(car));
    return carsArray;
  }

  public async findById(id: string) {
    const carsODM = new CarsODM();
    const validate = ObjectId.isValid(id);
    if (validate === false) {
      return { status: 422, message: { message: 'Invalid mongo id' } };
    }
    const objID = new ObjectId(id);
    const cars = await carsODM.findById(objID);
    const [car] = cars.map((carId) => this.createCarsDomain(carId));
    if (!car || !car.getId) {
      return { status: 404, message: { message: 'Car not found' } };
    }
    return { status: 200, message: car };
  }
}

export default CarsService;