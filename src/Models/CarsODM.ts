import mongoose, {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import ICars from '../Interfaces/ICar';

class CarsODM {
  private schema: Schema;
  private model: Model<ICars>;

  constructor() {
    this.schema = new Schema<ICars>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    this.model = models.Cars || model('Cars', this.schema);
  }

  public async create(cars: ICars): Promise<ICars> {
    return this.model.create({ ...cars });
  }

  public async findAll(): Promise<ICars[]> {
    return this.model.find();
  }

  public async findById(id: mongoose.Types.ObjectId): Promise<ICars[]> {
    return this.model.find({ _id: id });
  }
}

export default CarsODM;