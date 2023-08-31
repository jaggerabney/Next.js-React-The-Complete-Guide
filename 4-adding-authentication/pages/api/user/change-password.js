import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { hash, compare } from "bcrypt";

import { getDb } from "../../../util/db";

export default async function handler(req, res) {
  // 1. Verify that the req is valid and coming from an authenticated user
  // 2. Extract old and new password from req body
  // 3. Get email of authenticated user
  // 4. Use email to find user in database
  // 5. Verify that the extracted old password matches the stored password in the database
  // 6. Change the password
  // 7. Return a successful response

  // Check request for validity and authentication
  if (!req.method === "PATCH") {
    return res.status(401).json({ message: "Bad request!" });
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "Not authenticated!" });
  }

  // Extract old and new password from request body
  const { oldPassword, newPassword } = req.body;

  // Get email of authenticated user from session
  const userEmail = session.user.email;

  // Find user in database by email
  let client, db, user;

  try {
    ({ client, db } = await getDb());
  } catch (err) {
    return res.status(500).json({ message: "Couldn't connect to database!" });
  }

  try {
    user = await db.collection("users").findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
  } catch (err) {
    client.close();

    return res.status(500).json({ message: "Couldn't change password!" });
  }

  // Verify that the extracted old password matches the password stored in the database
  const passwordsMatch = await compare(oldPassword, user.password);

  if (!passwordsMatch) {
    client.close();

    return res.status(403).json({ message: "Invalid old password!" });
  }

  // Change the password!
  try {
    const hashedPassword = await hash(newPassword, 12);

    await db
      .collection("users")
      .updateOne({ email: userEmail }, { $set: { password: hashedPassword } });
  } catch (err) {
    client.close();

    return res.status(500).json({ message: "Couldn't change password!" });
  }

  client.close();
  res.status(200).json({ message: "Password changed!" });
}
