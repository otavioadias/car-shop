import { Model, Schema, model, models, UpdateQuery } from 'mongoose';
import * as mongoose from 'mongoose';
  
export default class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  public async create(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }
  
  public async findAll(): Promise<T[]> {
    return this.model.find();
  }
  
  public async findById(id: mongoose.Types.ObjectId): Promise<T[]> {
    return this.model.find({ _id: id });
  }

  public async update(id: string, vehicle: T): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...vehicle } as UpdateQuery<T>,
      { new: true },
    );
  }
}