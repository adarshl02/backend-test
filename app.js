const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.status(200).send("infra-career backend is running from green deployment pipeline");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
