import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';


class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return next(new Error('Email and password are required'));
      }

      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        return next(new Error('User with this email already exists'));
      }

      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, password: hashPassword });

      const jwtSecret = process.env.JWT_SECRET;
      if (!jwtSecret) {
        return next(new Error('JWT secret is not defined'));
      }

      const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '24h' });
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
        return next(new Error('User not found'));
      }

      const isPassValid = bcrypt.compareSync(password, user.password);
      if (!isPassValid) {
        return next(new Error('Invalid password'));
      }

      const jwtSecret = process.env.JWT_SECRET;
      if (!jwtSecret) {
        return next(new Error('JWT secret is not defined'));
      }

      const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '24h' });
      return res.json({ token });
    } catch (error) {
      return next(error);
    }
  }


  async check(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return next(new Error('JWT secret is not defined'));
    }

    try {
      const decoded = jwt.verify(token, jwtSecret);
      res.json(decoded);
    } catch (error) {
      return next(new Error('Invalid token'));
    }
  }


}

export default new UserController();