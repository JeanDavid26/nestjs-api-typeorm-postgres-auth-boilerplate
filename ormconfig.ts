import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;
const dbName = process.env.DB_DATABASE;

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host,
  port: parseInt(port),
  username,
  password,
  database: dbName,
  synchronize: false,
  migrationsRun: true,
  entities: ['dist/src/database/entities/**/*.entity.js'],
  migrationsTableName: 'migration',
  metadataTableName: 'metadataTableName',
  migrations: ['dist/src/database/migrations/*.js'],
};

const datasource = new DataSource(dataSourceOptions);
export default datasource;
