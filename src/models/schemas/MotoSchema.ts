import { model, Schema } from 'mongoose';
import { IMotorcycle } from '../../interfaces/IMotorcycle';

const motorcycleSchema = new Schema<IMotorcycle>(
  {
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
    category: {
      type: String,
      required: true,
    },
    engineCapacity: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

export const motorcycleMongooseModel = model<IMotorcycle>(
  'Motorcycle',
  motorcycleSchema,
);

export default motorcycleSchema;
