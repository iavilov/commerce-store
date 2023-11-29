import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface DeviceAttributes {
  id?: number;
  name: string;
  price: number;
  rating?: number;
  img: string;
  typeId: number;
  brandId: number;
}

class Device extends Model<DeviceAttributes> implements DeviceAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public rating!: number;
  public img!: string;
  public typeId!: number;
  public brandId!: number;
}


Device.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
  typeId: { type: DataTypes.INTEGER, allowNull: false },
  brandId: { type: DataTypes.INTEGER, allowNull: false },
}, {
  sequelize,
  modelName: 'device'
});



export default Device;