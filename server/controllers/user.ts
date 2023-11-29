import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import ApiError from '../error/ApiError';
import { Basket, User } from '../models';
import { generateJwt, verifyJwt } from '../utils/JwtAuthorization';

class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, role } = req.body;
      if (!email || !password) {
        return next(ApiError.badRequest('Email and password are required'));
      }

      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        return next(ApiError.badRequest('User with this email already exists'));
      }

      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, password: hashPassword, role });
      const basket = await Basket.create({ userId: user.id });

      const token = generateJwt(user.id, user.email, user.role, next)
      return res.json({ token });
    } catch (error) {
      return next(error);
    }
  }


  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return next(ApiError.internal('User not found'));
      }

      const isPassValid = bcrypt.compareSync(password, user.password);
      if (!isPassValid) {
        return next(ApiError.internal('Invalid password'));
      }

      const token = generateJwt(user.id, user.email, user.role, next)
      return res.json({ token });
    } catch (error) {
      return next(error);
    }
  }


  async check(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return next(ApiError.unauthorized('Unauthorized'));
      }

      const decoded = verifyJwt(token, next);
      res.json(decoded);
    } catch (error) {
      return next(error);
    }
  }
}

export default new UserController();