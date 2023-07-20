import fs from "fs";
import path from "path";

function getFeedbackFilePath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

function getAllFeedback() {
  const filePath = getFeedbackFilePath();
  const data = fs.readFileSync(filePath);
  const allFeedback = JSON.parse(data);

  return allFeedback;
}

function handler(req, res) {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    const filePath = getFeedbackFilePath();
    const allFeedback = getAllFeedback();
    allFeedback.push(newFeedback);

    fs.writeFileSync(filePath, JSON.stringify(allFeedback));

    res.status(201).json({ message: "Feedback added!", feedback: newFeedback });
  } else {
    const feedback = getAllFeedback();

    res.status(200).json({ message: "Feedback retrieved!", feedback });
  }
}

export default handler;
