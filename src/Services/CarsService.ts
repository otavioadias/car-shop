import Cars from '../Domains/Car';
import ICars from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

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
}

export default CarsService;