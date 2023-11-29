import { NextFunction, Request, Response } from 'express';
import ApiError from '../error/ApiError';
import Type from '../models/Type';


class TypeController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body
      const type = await Type.create({ name })
      return res.json(type)
    } catch (err: any) {
      next(ApiError.badRequest(err.message));
    }
  }


  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const types = await Type.findAll();
      return res.json(types);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {

  }
  
  async delete(req: Request, res: Response, next: NextFunction) {

  }
}

export default new TypeController();