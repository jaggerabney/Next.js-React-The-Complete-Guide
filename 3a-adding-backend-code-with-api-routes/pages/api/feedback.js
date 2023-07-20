import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const { email, feedback } = req.body;
    const filePath = path.join(process.cwd(), "data", "feedback.json");

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    const data = fs.readFileSync(filePath);
    const allFeedback = JSON.parse(data);

    allFeedback.push(newFeedback);

    fs.writeFileSync(filePath, JSON.stringify(allFeedback));

    res.status(201).json({ message: "Feedback added!", feedback: newFeedback });
  } else {
    res.status(200).json({ message: "Hello from the backend!" });
  }
}

export default handler;
