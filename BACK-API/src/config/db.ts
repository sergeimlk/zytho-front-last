import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  user: process.env.POSTGRES_USER || 'admin',
  password: process.env.POSTGRES_PASSWORD || 'password123',
  host: process.env.POSTGRES_HOST || 'postgres',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  database: process.env.POSTGRES_DB || 'zytho'
};

console.log('Database configuration:', {
  ...config,
  password: '****' // Masquer le mot de passe dans les logs
});

export const pool = new Pool(config);

export const testDBConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to the database successfully');
    client.release();
    return true;
  } catch (err) {
    console.error('Error connecting to the database:', err);
    return false;
  }
};