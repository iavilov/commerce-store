import { sequelize } from './database';
import * as dbModels from '../models';

export const initializeDatabase = async (): Promise<void> => {
  try {
    dbModels
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ force: false });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
};
