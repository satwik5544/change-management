const express = require('express');
const app = express();

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Change Management System is running' 
  });
});

// Mock login endpoint for testing
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Mock authentication logic
  if (email === 'manager@company.com' && password === 'password') {
    res.json({
      success: true,
      message: 'Login successful',
      data: {
        token: 'mock-jwt-token-for-testing',
        user: {
          id: 1,
          email: 'manager@company.com',
          name: 'Project Manager',
          role: 'manager'
        }
      }
    });
  } 
  else if (email === 'engineer@company.com' && password === 'password') {
    res.json({
      success: true,
      message: 'Login successful',
      data: {
        token: 'mock-jwt-token-for-testing',
        user: {
          id: 2,
          email: 'engineer@company.com',
          name: 'Software Engineer', 
          role: 'engineer'
        }
      }
    });
  }
  else {
    res.status(401).json({
      success: false,
      error: 'Invalid email or password'
    });
  }
});

module.exports = app;