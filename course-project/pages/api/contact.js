import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid input!" });
    }

    const newMessage = { email, name, message };
    let client, db;

    try {
      client = await MongoClient.connect(process.env.DB_CONNECTION_STRING);
      db = client.db("blog");

      const result = await db.collection("messages").insertOne(newMessage);

      newMessage.id = result.insertedId;
    } catch (err) {
      if (client) {
        client.close();
      }

      return res
        .status(500)
        .json({ message: "Couldn't add message to database!" });
    }

    res.status(201).json({ message: newMessage });
    client.close();
  }
}
