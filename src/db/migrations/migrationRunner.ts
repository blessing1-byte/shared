import { readFile } from "node:fs/promises";

//define the call back function
type ExecuteQuery = (sql: string) => Promise<unknown>; //a call back function that surely returns a promise

export async function runMigration(
  FilePath: string,
  executeQuery: ExecuteQuery,
): Promise<void> {
  const sql = await readFile(FilePath, "utf-8");

  if (!sql.trim()) {
    console.log(`migration file: ${FilePath} is empty `);
  }
  await executeQuery(sql);
  console.log(`Migration successful : ${FilePath}`);
}
