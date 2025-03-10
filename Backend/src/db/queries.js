import * as pg from "./index.js";

const query = pg.query;

export async function getAllUsers() {
  const { rows } = await query("SELECT * FROM users;");
  return rows;
}

export async function getUserWithUsername(username) {
  const { rows } = await query("SELECT * FROM users WHERE username = $1", [username]);
  return rows[0];
}

export async function getUserWithId(id) {
  const { rows } = await query("SELECT * FROM users WHERE id = $1", [id]);
  return rows[0];
}

export async function insertUser(username, password) {
  await query("INSERT INTO users (username, password) VALUES ($1, $2)", [
    username,
    password,
  ]);
}
