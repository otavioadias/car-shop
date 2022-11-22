import IVehicle from './IVehicle';

interface ICars extends IVehicle {
  doorsQty: number,
  seatsQty: number,
}

export default ICars;