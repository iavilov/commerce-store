import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface BrandAttributes {
  id?: number;
  name: string;
}

class Brand extends Model<BrandAttributes> implements BrandAttributes {
  public id!: number;
  public name!: string;
}

Brand.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
}, {
  sequelize,
  modelName: 'brand'
});

export default Brand;
