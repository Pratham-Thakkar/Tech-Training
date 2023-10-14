import { Pool } from "pg";
import "dotenv/config";

console.log("------->", process.env.DB_HOST);
console.log("------->", process.env.DB_PORT);

export const pool: Pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT!),
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
});
