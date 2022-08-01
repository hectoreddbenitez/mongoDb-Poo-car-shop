import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export default function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.message });
  }
  console.log(err);
  if (err instanceof Error) {
    return res.status(404).json({ error: err.message });
  }
  return res.status(500).json({ message: 'internal error' });
  _next();
}
