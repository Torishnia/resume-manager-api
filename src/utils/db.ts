require('dotenv').config();
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [],
  logging: true,
  synchronize: true, // Turn on just only dev environment.
});
