import 'dotenv/config';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { sequelize } from './config/database';

const app: Application = express();

const PORT: number | string = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Working!' });
});

const start = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
}

start();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
