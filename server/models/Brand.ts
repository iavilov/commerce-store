import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface BrandAttributes {
  id?: number;
}

class Brand extends Model<BrandAttributes> implements BrandAttributes {
  public id!: number;
}

Brand.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, {
  sequelize,
  modelName: 'brand'
});

export default Brand;
