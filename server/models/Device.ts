import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface DeviceAttributes {
  id?: number;
}

class Device extends Model<DeviceAttributes> implements DeviceAttributes {
  public id!: number;
}

Device.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, {
  sequelize,
  modelName: 'device'
});

export default Device;
