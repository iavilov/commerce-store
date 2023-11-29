import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface TypeBrandAttributes {
  id?: number;
}

class TypeBrand extends Model<TypeBrandAttributes> implements TypeBrandAttributes {
  public id!: number;
}

TypeBrand.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, {
  sequelize,
  modelName: 'type_brand'
});

export default TypeBrand;
