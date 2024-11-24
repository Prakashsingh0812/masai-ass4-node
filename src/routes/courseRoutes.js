const express = require('express');
const authenticateRequest = require('../middlewares/authMiddleware');

const router = express.Router();

// Protect routes with authentication middleware
router.use(authenticateRequest);

router.post('/courses', (req, res) => {
  res.json({ message: 'Course created successfully' });
});

router.put('/courses/:id', (req, res) => {
  res.json({ message: `Course with ID ${req.params.id} updated successfully` });
});

router.delete('/courses/:id', (req, res) => {
  res.json({ message: `Course with ID ${req.params.id} deleted successfully` });
});

module.exports = router;
