const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(express.json());

// Example route (we'll replace this later with referral logic)
app.post('/referral', (req, res) => {
  console.log('Referral data received:', req.body);
  res.status(200).send({ message: 'Referral received!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
