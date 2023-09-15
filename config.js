import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connectionDB = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
  });

export default connectionDB;

  