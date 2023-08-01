import { getDb } from "../../helpers/db-util";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    let db;

    if (!email || !email.includes("@")) {
      return res.status(422).json({ message: "Invalid email!" });
    }

    try {
      db = await getDb();
    } catch (err) {
      console.log(err);

      return res
        .status(500)
        .json({ message: "Connecting to the database failed!" });
    }

    try {
      await db.collection("newsletter").insertOne({ email });
    } catch (err) {
      console.log(err);

      return res
        .status(500)
        .json({ message: "Couldn't insert email into database!" });
    }

    res.status(201).json({ message: "Email added to newsletter!" });
  }
}
