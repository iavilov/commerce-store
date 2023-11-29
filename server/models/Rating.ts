import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface RatingAttributes {
  id?: number;
  rate: number;
}

class Rating extends Model<RatingAttributes> implements RatingAttributes {
  public id!: number;
  public rate!: number;
}

Rating.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
}, {
  sequelize,
  modelName: 'rating'
});

export default Rating;
