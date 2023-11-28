import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface BasketAttributes {
  id?: number;
}

class Basket extends Model<BasketAttributes> implements BasketAttributes {
  public id!: number;
}

Basket.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, {
  sequelize,
  modelName: 'basket'
});

export default Basket;
