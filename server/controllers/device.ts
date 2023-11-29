import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import ApiError from '../error/ApiError';
import { Device, DeviceInfo } from '../models';

class DeviceController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, price, brandId, typeId, info } = req.body;

      if (!req.files || !req.files.img) {
        throw new Error('No image file uploaded');
      }

      const img = req.files.img as UploadedFile;
      const fileName = uuidv4() + ".jpg";
      await img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({ name, price, brandId, typeId, img: fileName });

      if (info) {
        const parsedInfo = JSON.parse(info);
        for (const i of parsedInfo) {
          await DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id
          });
        }
      }

      return res.json(device);
    } catch (error: any) {
      next(ApiError.badRequest(error.message));
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      let { name, price, brandId, typeId, info } = req.body;

      const device = await Device.update({ name, price, brandId, typeId }, {
        where: { id }
      });

      const updatedDevice = await Device.findByPk(id);

      if (info && updatedDevice) {
        await DeviceInfo.destroy({ where: { deviceId: id } });
        JSON.parse(info).forEach(async (i: any) =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: updatedDevice.id
          })
        );
      }

      return res.json({ message: 'Device updated', device: updatedDevice });
    } catch (error: any) {
      next(ApiError.badRequest(error.message));
    }
  }


  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const device = await Device.destroy({
        where: { id }
      });
      return res.json({ message: 'Device deleted', device });
    } catch (error: any) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const device = await Device.findOne({
        where: { id },
        include: [{ model: DeviceInfo, as: 'info' }]
      });
      return res.json(device);
    } catch (error: any) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      let { brandId, typeId, limit, page } = req.query;

      const limitNumber = parseInt(limit as string) || 9;
      const pageNumber = parseInt(page as string) || 1;
      let offset = (pageNumber - 1) * limitNumber;

      const brandIdNumber = brandId ? parseInt(brandId as string) : undefined;
      const typeIdNumber = typeId ? parseInt(typeId as string) : undefined;

      let whereCondition = {} as {
        brandId?: number;
        typeId?: number;
      };
      if (brandIdNumber) whereCondition['brandId'] = brandIdNumber;
      if (typeIdNumber) whereCondition['typeId'] = typeIdNumber;

      const devices = await Device.findAndCountAll({
        where: whereCondition,
        limit: limitNumber,
        offset
      });

      return res.json(devices);

    } catch (error: any) {
      next(ApiError.badRequest(error.message));
    }
  }
};



export default new DeviceController();
