import { literal, z } from 'zod';
import { vehicleSchema } from './IVehicle';

const motorcycle = z.object({
  category: z.literal('Street').or(literal('Custom')).or(literal('Trail')),
  engineCapacity: z.number().int().gte(1).lte(2500),
});

export const motoSchema = motorcycle.merge(vehicleSchema); 

export type IMotorcycle = z.infer<typeof motoSchema >;
