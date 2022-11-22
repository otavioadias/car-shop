import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const moto = this.req.body;
    try {
      const newMoto = await this.service.registerMotor(moto);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const motors = await this.service.findAll();
      return this.res.status(200).json(motors);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    const moto = await this.service.findById(id);
    return this.res.status(moto.status).json(moto.message);
  }
}

export default MotorcycleController;