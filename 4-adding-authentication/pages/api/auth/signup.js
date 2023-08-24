import { hash } from "bcrypt";

import { getDb } from "../../../util/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      return res.status(422).json({ message: "Invalid username or password." });
    }

    try {
      const db = await getDb();

      const result = await db.collection("users").insertOne({
        email,
        password: await hash(password, 12),
      });

      res
        .status(201)
        .json({ message: "Signed up user!", userId: result.insertedId });
    } catch (err) {
      return res.status(500).json({ message: "Couldn't sign up!" });
    }
  }
}
