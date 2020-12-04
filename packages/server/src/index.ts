import express from "express";
import dotenv from "dotenv";
import path from "path";
import { getWorkHistory } from "./mongo";

dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();
const PORT = 13337;

app.get("/api/workHistory", async (req, res) => {
  const result = await getWorkHistory();
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
