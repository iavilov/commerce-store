import { sequelize } from '../config/database';
import User from './User'

sequelize.sync({ force: false }).then(() => {
  console.log("Database & tables created!");
});

export {
  User,
};
