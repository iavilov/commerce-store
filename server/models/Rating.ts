import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface RatingAttributes {
  id?: number;
}

class Rating extends Model<RatingAttributes> implements RatingAttributes {
  public id!: number;
}

Rating.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, {
  sequelize,
  modelName: 'rating'
});

export default Rating;
