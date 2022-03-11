
import { Low, JSONFile } from "lowdb";

const db = new Low(new JSONFile("database.json"));
await db.read();

db.data ||= { database: [], databaseId:0 };

const database = db.data.database;
let databaseId = db.data.databaseId;

console.log(databaseId);

export default db;