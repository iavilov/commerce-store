import { Request, Response, NextFunction } from 'express';
import ApiError from '../error/ApiError';

export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction): Response | void {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: "Unforeseen mistake!" });
}
