import { z } from 'zod';
import { IVehicle, vehicleSchema } from './IVehicle';

const carSchema = z.object({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});
export const CarAndVehicleSchema = carSchema.merge(vehicleSchema); 

export type ICar = z.infer<typeof CarAndVehicleSchema > & IVehicle;
