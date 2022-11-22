import mongoose from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

const { ObjectId } = mongoose.Types;

class MotorcycleService {
  private createMotorsDomain(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  public async registerMotor(moto: IMotorcycle) {
    const carsODM = new MotorcycleODM();
    const newMotor = await carsODM.create(moto);
    return this.createMotorsDomain(newMotor);
  }

  public async findAll() {
    const motorcycleODM = new MotorcycleODM();
    const motors = await motorcycleODM.findAll();
    const motorsArray = motors.map((moto) => this.createMotorsDomain(moto));
    return motorsArray;
  }

  public async findById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const validate = ObjectId.isValid(id);
    if (validate === false) {
      return { status: 422, message: { message: 'Invalid mongo id' } };
    }
    const objID = new ObjectId(id);
    const motors = await motorcycleODM.findById(objID);
    const [moto] = motors.map((mId) => this.createMotorsDomain(mId));
    if (!moto || !moto.getId) {
      return { status: 404, message: { message: 'Motorcycle not found' } };
    }
    return { status: 200, message: moto };
  }
}

export default MotorcycleService;