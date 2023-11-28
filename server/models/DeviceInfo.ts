import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface DeviceInfoAttributes {
  id?: number;
}

class DeviceInfo extends Model<DeviceInfoAttributes> implements DeviceInfoAttributes {
  public id!: number;
}

DeviceInfo.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, {
  sequelize,
  modelName: 'deviceInfo'
});

export default DeviceInfo;
