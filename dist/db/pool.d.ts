import { Pool } from "pg";
export declare function createPool(dbConn: string): Pool;
export declare function getPool(dbConn: string): Pool;
export declare function closePool(): Promise<void>;
export default getPool;
