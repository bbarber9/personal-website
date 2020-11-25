import express from "express";
import path from "path";
const app = express();
const PORT = 13337;

app.use(express.static(path.resolve(__dirname, "../../frontend/build")));

app.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../../frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
