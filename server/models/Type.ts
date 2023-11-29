import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface TypeAttributes {
  id?: number;
  name: string;
}

class Type extends Model<TypeAttributes> implements TypeAttributes {
  public id!: number;
  public name!: string;
}

Type.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
}, {
  sequelize,
  modelName: 'type'
});

export default Type;
