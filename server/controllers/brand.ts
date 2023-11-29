import { NextFunction, Request, Response } from 'express';
import ApiError from '../error/ApiError';
import Brand from '../models/Brand';


class BrandController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body
      const brand = await Brand.create({ name })
      return res.json(brand)
    } catch (err: any) {
      next(ApiError.badRequest(err.message));
    }
  }


  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const brands = await Brand.findAll();
      return res.json(brands);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {

  }
  async delete(req: Request, res: Response, next: NextFunction) {

  }
}

export default new BrandController();