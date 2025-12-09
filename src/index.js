
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3600;

app.get('/health', (req,res) => res.json({service:'salespilot', ok:true}));

app.post('/api/v1/leads', (req,res) => {
  const lead = req.body;
  // TODO: persist lead, score, queue outreach
  res.status(201).json({ created: true, lead });
});

app.listen(PORT, () => console.log(`SalesPilot started on ${PORT}`));
module.exports = app;