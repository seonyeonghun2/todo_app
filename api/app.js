import compression from 'compression';
import express from 'express';
import logger from 'morgan';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 8080;
import todoRouter from './routes/index.js';

app.use(express.json());
app.use(compression());
app.use(logger('dev'));
app.use(cors());

app.use('/todos', todoRouter);

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행중입니다.`);
});
