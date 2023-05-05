const express = require('express');
const router = express.Router();

// User registration route
router.post('/register', async (req, res) => {
  const { pseudoName } = req.body;

  try {
    // Add your logic to save the user in the database

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
