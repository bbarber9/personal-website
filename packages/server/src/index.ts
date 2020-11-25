import express from "express";
import path from "path";
const app = express();
const PORT = 13337;

app.get("/api/test", (req, res) => {
  res.send("HELLO WORLD");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
