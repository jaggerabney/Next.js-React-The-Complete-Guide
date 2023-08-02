import { getDb } from "../../../helpers/db-util";

export default async function handler(req, res) {
  const { eventId } = req.query;
  let db;

  try {
    db = await getDb();
  } catch (err) {
    console.log(err);

    return res
      .status(500)
      .json({ message: "Connecting to the database failed!" });
  }

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
    let result;

    try {
      result = await db.collection("comments").insertOne(newComment);
    } catch (err) {
      console.log(err);

      return res
        .status(500)
        .json({ message: "Couldn't insert comment into database!" });
    }

    res
      .status(201)
      .json({ message: "Added comment!", commentId: result.insertedId });
  }

  if (req.method === "GET") {
    let comments;

    try {
      comments = await db
        .collection("comments")
        .find({ eventId })
        .sort({ _id: -1 })
        .toArray();
    } catch (err) {
      console.log(err);

      return res
        .status(500)
        .json({ message: "Couldn't fetch comments from database!" });
    }

    res.status(200).json({ comments });
  }
}
