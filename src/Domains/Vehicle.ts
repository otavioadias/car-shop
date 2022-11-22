import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  id?: string | undefined; 
  protected model: string;
  protected year: number;
  protected color: string;
  private status: boolean | undefined;
  protected buyValue: number;

  constructor(objCars: IVehicle) {
    this.id = objCars.id;
    this.model = objCars.model;
    this.year = objCars.year;
    this.color = objCars.color;
    this.status = objCars.status === undefined ? false : objCars.status;
    this.buyValue = objCars.buyValue;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getYear() {
    return this.year;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }
}

export default Vehicle;