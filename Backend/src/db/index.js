import pg from "pg";
const { Pool } = pg;

if (!process.env.DB_CONNECTION_STRING) {
  throw new Error("DB_CONNECTION_STRING is missing");
}

export const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

export const query = async (text, params) => {
  console.log("Performing query: " + prettifyQuery(text, params));
  const result = await pool.query(text, params);
  console.log(result.rows);
  return result;
};

function prettifyQuery(text, params) {
  let result = "";
  let ch = "";
  let paramIndex = 0;

  let i = 0;
  while (i < text.length) {
    ch = text.charAt(i);
    if (ch !== "$") {
      result += ch;
    } else {
      // Find the end position of the parameter
      const end = text.indexOf(" ", i);

      if (end === -1) {
        result += params[paramIndex++];
        return result;
      }

      result += params[paramIndex++];
      i = end - 1;
      continue;
    }

    i++;
  }

  return result;
}
