import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://thecre8studio.com',
    process.env.FRONTEND_URL
  ].filter(Boolean),
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: 'Cre8 Studio Backend Running',
    environment: process.env.NODE_ENV || 'development'
  });
});

// API routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: 'Cre8 Studio API Healthy'
  });
});

// Mock authentication endpoints
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (email === 'demo@cre8studio.com' && password === 'demo123') {
    res.json({
      success: true,
      user: {
        id: 'demo-user-id',
        email: 'demo@cre8studio.com',
        role: 'creator',
        revenueSharePercentage: 70
      },
      token: 'mock-jwt-token'
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/api/auth/register', (req, res) => {
  const { email, password } = req.body;
  
  res.json({
    success: true,
    user: {
      id: 'new-user-id',
      email,
      role: 'creator',
      revenueSharePercentage: 70
    },
    token: 'mock-jwt-token'
  });
});

app.get('/api/auth/me', (req, res) => {
  res.json({
    id: 'demo-user-id',
    email: 'demo@cre8studio.com',
    role: 'creator',
    revenueSharePercentage: 70
  });
});

// Mock wallet endpoints
app.get('/api/wallet/balance', (req, res) => {
  res.json({
    totalBalance: 156.78,
    availableForWithdrawal: 120.45,
    pendingEarnings: 36.33,
    escrowBalance: 0
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Cre8 Studio Backend API',
    status: 'running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Cre8 Studio Backend running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});