import { NextFunction, Response } from 'express';
import ApiError from '../error/ApiError';
import { UserRequest } from '../types/express';
import { verifyJwt } from '../utils/JwtAuthorization';

export default function checkRole(role: string) {
  return function (req: UserRequest, res: Response, next: NextFunction) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return next(ApiError.unauthorized('User not authorized'));
      }
      const decoded = verifyJwt(token, next) as { id: number; email: string; role: string };
      if (decoded.role !== role) {
        return next(ApiError.forbidden('No access'));
      }
      req.user = decoded as { id: number; email: string; role: string };
      next();
    } catch (e) {
      return next(ApiError.unauthorized('User not authorized'));
    }
  };
}
