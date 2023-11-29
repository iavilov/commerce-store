import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface DeviceInfoAttributes {
  id?: number;
  title: string;
  description: string;
  deviceId: number;
}

class DeviceInfo extends Model<DeviceInfoAttributes> implements DeviceInfoAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public deviceId!: number;
}

DeviceInfo.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  deviceId: { type: DataTypes.INTEGER, allowNull: false },
}, {
  sequelize,
  modelName: 'device_info'
});

export default DeviceInfo;
