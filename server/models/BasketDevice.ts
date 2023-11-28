import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface BasketDeviceAttributes {
  id?: number;
}

class BasketDevice extends Model<BasketDeviceAttributes> implements BasketDeviceAttributes {
  public id!: number;
}

BasketDevice.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, {
  sequelize,
  modelName: 'basketDevice'
});

export default BasketDevice;
