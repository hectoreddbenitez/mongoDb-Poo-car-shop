import { model, Schema } from 'mongoose';
import { ICar } from '../../interfaces/ICar';

const carSchema = new Schema<ICar>({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: false,
  },
  buyValue: {
    type: Number,
    integer: true,
  },
  doorsQty: {
    type: Number,
    required: true,
  },
  seatsQty: {
    type: Number,
    required: true,
  },
}, {
  versionKey: false,
});

export const carMongooseModel = model<ICar>('Car', carSchema);

export default carSchema;