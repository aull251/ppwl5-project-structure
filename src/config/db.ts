import { Database } from "bun:sqlite";
import { env } from "./env";

export const db = new Database(env.DATABASE_URL);

export const initDB = () => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, role TEXT)");
};