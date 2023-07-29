export default function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(422).json({ message: "Invalid email!" });
    }

    res.status(201).json({ message: "Email added to newsletter!" });
  }
}
