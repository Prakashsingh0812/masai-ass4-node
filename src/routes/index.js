const express = require('express');
const router = express.Router();

// Authorization Middleware
router.use((req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  // Check for the "Authorization" header and validate it
  if (!authHeader || authHeader !== 'Bearer your-secret-token') {
    return res.status(401).json({ error: 'Unauthorized: Missing or invalid Authorization header' });
  }
  
  next(); // Proceed to the next middleware or route handler
});

// Root Route - Welcome Message
router.get('/', (req, res) => {
  const currentDate = new Date().toISOString();
  res.send(`Welcome to the LMS Middleware App! Current server time: ${currentDate}`);
});

// Example Route - Get All Courses
router.get('/courses', (req, res) => {
  // Simulating a database of courses
  const courses = [
    { id: 1, name: 'JavaScript Basics', instructor: 'John Doe' },
    { id: 2, name: 'Advanced Node.js', instructor: 'Jane Smith' },
    { id: 3, name: 'React for Beginners', instructor: 'Mary Johnson' },
  ];
  
  res.json(courses); // Respond with the courses in JSON format
});

module.exports = router;
