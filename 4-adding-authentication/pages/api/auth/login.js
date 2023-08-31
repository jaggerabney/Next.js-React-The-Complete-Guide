import { compare } from "bcrypt";

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

    let client, db;

    try {
      ({ client, db } = await getDb());
    } catch (err) {
      return res.status(500).json({ message: "Couldn't connect to database!" });
    }

    try {
      const user = await db.collection("users").findOne({ email });

      if (!user) {
        return res.status(422).json({ message: "Invalid email or password." });
      }

      const passwordsMatch = await compare(password, user.password);

      if (!passwordsMatch) {
        return res.status(422).json({ message: "Invalid email or password." });
      }

      res.status(200).json({ message: "Logged user in!" });
    } catch (err) {
      return res.status(500).json({ message: "Couldn't log in!" });
    } finally {
      client.close();
    }
  }
}
