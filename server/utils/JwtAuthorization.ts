import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import ApiError from '../error/ApiError';

export const generateJwt = (id: number, email: string, role: string, next: NextFunction) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    return next(ApiError.internal('JWT secret is not defined'));
  }

  return jwt.sign(
    { id, email, role },
    jwtSecret,
    { expiresIn: '24h' }
  )
}

export const verifyJwt = (token: string, next: NextFunction) => {
  const jwtSecret = process.env.JWT_SECRET;
  
  if (!jwtSecret) {
    return next(ApiError.internal('Invalid token'));
  }

  return (
    jwt.verify(token, jwtSecret)
  )
}