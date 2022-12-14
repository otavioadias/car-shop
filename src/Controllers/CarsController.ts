import mongoose from 'mongoose';
import { NextFunction, Request, Response } from 'express';
import CarsService from '../Services/CarsService';

const { ObjectId } = mongoose.Types;

class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  public async create() {
    const car = this.req.body;
    try {
      const newCar = await this.service.registerCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const cars = await this.service.findAll();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    const car = await this.service.findById(id);
    return this.res.status(car.status).json(car.message);
  }

  public async update() {
    const { id } = this.req.params;
    const validate = ObjectId.isValid(id);
    if (validate === false) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    const car = await this.service.update(id, this.req.body);
    return this.res.status(car.status).json(car.message);
  }
}

export default CarsController;