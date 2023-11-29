import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import express, { Application } from 'express';
import fileUpload from 'express-fileupload';
import { initializeDatabase } from './config/databaseInitialization';
import router from './routes';
import errorHandler from './error/ErrorHandlingMiddleware'
import path from 'path';

const app: Application = express();
const PORT: number | string = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

app.use(errorHandler)

const startServer = async (): Promise<void> => {
  try {
    await initializeDatabase();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (err) {
    console.error('Unable to start the server:', err);
  }
};

startServer();
