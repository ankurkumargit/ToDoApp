import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import bucketsRoutes from './routes/bucketsRoutes.js';
import itemsRoutes from './routes/itemsRoutes.js';

dotenv.config();

connectDB();
const app = express();

app.use(express.json());
app.use('/api/buckets', bucketsRoutes);
app.use('/api/items', itemsRoutes);

const PORT = process.env.PORT || 3030;

app.listen(
  PORT,
  console.log(`Server started in ${process.env.NODE_ENV} on port ${PORT}`)
);
