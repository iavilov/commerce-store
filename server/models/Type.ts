import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface TypeAttributes {
  id?: number;
}

class Type extends Model<TypeAttributes> implements TypeAttributes {
  public id!: number;
}

Type.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, {
  sequelize,
  modelName: 'type'
});

export default Type;
