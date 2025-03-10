import pg from "pg";
const { Pool } = pg;

if (!process.env.DB_CONNECTION_STRING) {
  throw new Error("DB_CONNECTION_STRING is missing");
}

export const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

export const query = async (text, params) => {
  // console.log("Performing query: " + text);
  const result = await pool.query(text, params);
  // console.log(result.rows);
  return result;
};
