import { MongoClient } from "mongodb";

export async function getDb() {
  const client = await MongoClient.connect(process.env.DB_CONNECTION_STRING);
  const db = client.db();

  return { client, db };
}
