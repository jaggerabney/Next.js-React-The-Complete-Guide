import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { eventId } = req.query;

  const client = await MongoClient.connect(process.env.DB_CONNECTION_STRING);
  const db = client.db();

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid input!" });
    }

    const newComment = {
      eventId,
      email,
      name,
      text,
    };

    const result = await db.collection("comments").insertOne(newComment);

    res
      .status(201)
      .json({ message: "Added comment!", commentId: result.insertedId });
  }

  if (req.method === "GET") {
    const comments = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments });
  }
}
