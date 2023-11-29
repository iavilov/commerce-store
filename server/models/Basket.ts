import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface BasketAttributes {
  id?: number;
  userId?: number;
}

class Basket extends Model<BasketAttributes> implements BasketAttributes {
  public id!: number;
  public userId!: number;
}

Basket.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
}, {
  sequelize,
  modelName: 'basket'
});

export default Basket;
