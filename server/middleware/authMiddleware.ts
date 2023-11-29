import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import ApiError from '../error/ApiError';
import { UserRequest } from '../types/express';

const authMiddleware = (req: UserRequest, res: Response, next: NextFunction) => {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return next(ApiError.unauthorized('User not authorized'));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: number; email: string; role: string };
    req.user = decoded;

    next();
  } catch (error) {
    return next(ApiError.unauthorized('User not authorized'));
  }
};

export default authMiddleware;
