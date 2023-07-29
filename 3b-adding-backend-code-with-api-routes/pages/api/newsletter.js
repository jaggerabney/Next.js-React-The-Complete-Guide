import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(422).json({ message: "Invalid email!" });
    }

    const client = await MongoClient.connect(process.env.DB_CONNECTION_STRING);
    const db = client.db();

    await db.collection("newsletter").insertOne({ email });

    await client.close();
    res.status(201).json({ message: "Email added to newsletter!" });
  }
}
