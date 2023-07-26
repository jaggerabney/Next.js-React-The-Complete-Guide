import { getAllFeedback } from "./index";

export default function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const feedback = getAllFeedback().find((item) => item.id === feedbackId);

  res.status(200).json({ feedback });
}
