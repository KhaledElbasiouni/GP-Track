const express = require("express");
const path = require("node:path");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/respond", (req, res) => {
  res.json({
    message: "Backend response",
  });
});

if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../../GP-Track/dist");

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
