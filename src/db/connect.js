import { Client } from 'pg';
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'findmychild',
  password: '@123',
  port: 5432,
});

export default client;
