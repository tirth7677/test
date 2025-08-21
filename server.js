require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// GET /health
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is healthy',
  });
});

app.get('/keyword', (req, res) => {
  const keywords = [
    "srv1330.hstgr.io","3306","wZ?vqt3!8","u740372902_QVEROSDEV","u740372902_QVEROSDEV"
  ];

  res.status(200).json({
    status: "success",
    message: "Keyword list generated",
    status_code: 200,
    data: {
      keywords
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
