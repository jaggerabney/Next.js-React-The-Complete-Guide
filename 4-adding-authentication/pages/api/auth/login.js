import { hash, compare } from "bcrypt";

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
      const user = await db.collection("users").findOne({ email });

      if (!user) {
        return res.status(422).json({ message: "Invalid email or password." });
      }

      const passwordsMatch = await compare(password, user.password);

      if (!passwordsMatch) {
        return res.status(422).json({ message: "Invalid email or password." });
      }

      res
        .status(200)
        .json({ message: "Logged user in!", userId: result.insertedId });
    } catch (err) {
      return res.status(500).json({ message: "Couldn't log in!" });
    } finally {
      client.close();
    }
  }
}
