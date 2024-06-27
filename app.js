const express = require("express");
const app = express();

// Import and use your edge function
const { handler } = require("./getStudents");

app.get("/api/students", async (req, res) => {
  const response = await handler(req, res);
  res.status(response.statusCode).json(JSON.parse(response.body));
});

app.listen(3000, () => {
  console.log("Local server running on http://localhost:3000");
});
