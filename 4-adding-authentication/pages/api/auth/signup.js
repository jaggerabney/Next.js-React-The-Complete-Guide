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
      return res.status(422).json({ message: "Invalid email or password." });
    }

    try {
      const { client, db } = await getDb();
      const emailAlreadyInUse = await db.collection("users").findOne({ email });

      if (emailAlreadyInUse) {
        client.close();

        return res.status(422).json({ message: "Invalid email or password." });
      }

      const result = await db.collection("users").insertOne({
        email,
        password: await hash(password, 12),
      });

      res
        .status(201)
        .json({ message: "Signed up user!", userId: result.insertedId });

      client.close();
    } catch (err) {
      client.close();

      return res.status(500).json({ message: "Couldn't sign up!" });
    }
  }
}
