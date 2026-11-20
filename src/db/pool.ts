// import dotenv from "dotenv";
// import { resolve } from "node:path";
// import { cwd } from "node:process";
import { Pool } from "pg";
import { AppError } from "../errors/AppError.js";
// import { resolve } from "node:path";
// dotenv.config({
//   path: resolve(__dirname, "../../../../.env"),
// });

let pool: Pool | null = null;

//create an instance of pool connection
export function createPool(dbConn: string): Pool {
  if (!dbConn) {
    throw new AppError(404, "DATABASE_URL was not set");
  }

  return new Pool({ connectionString: dbConn });
}

export function getPool(dbConn: string) {
  if (!pool) {
    // if no existing pool, create one and return
    pool = createPool(dbConn);
  }
  return;
}
//close connection
export async function closePool() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}

export default getPool;
