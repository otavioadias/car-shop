import IVehicle from './IVehicle';

export type ICategory = 'Street' | 'Custom' | 'Trail';

interface IMotorcycle extends IVehicle {
  category: ICategory,
  engineCapacity: number,
}

export default IMotorcycle;