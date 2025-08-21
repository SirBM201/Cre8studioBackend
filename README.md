# Cre8 Studio Backend API

## 🚀 Production-Ready Express.js API for Content Monetization Platform

### Features
- **Revenue Sharing System** - 70% user share, 30% platform share
- **Social Platform Integration** - Facebook, Instagram, YouTube, TikTok, etc.
- **Geo-based Revenue Calculation** - Different rates for monetization vs non-monetization countries
- **Safe Mode Compliance** - Visa restrictions and earnings protection
- **Content Review System** - AI-assisted fair use compliance
- **Wallet & Withdrawals** - PayPal, Paystack, Wise integration

### Quick Start

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Setup:**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

3. **Start Server:**
   ```bash
   npm start
   ```

### Environment Variables

See `.env.example` for all required environment variables.

### API Endpoints

#### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration  
- `GET /api/auth/me` - Get current user profile

#### Wallet & Revenue
- `GET /api/wallet/balance` - Get wallet balance
- `GET /api/wallet/earnings` - Get earnings history
- `POST /api/wallet/withdrawals` - Request withdrawal
- `GET /api/wallet/withdrawals` - Get withdrawal history

#### Health Check
- `GET /health` - API health status
- `GET /api/health` - API health status

### Deployment

#### Koyeb (Recommended)
1. Push to GitHub repository
2. Create Koyeb service from GitHub
3. Set environment variables
4. Deploy with PostgreSQL database

See `KOYEB_DEPLOYMENT.md` in the main project for detailed deployment instructions.

### Database Schema

Uses PostgreSQL with these main tables:
- `users` - User accounts and settings
- `social_accounts` - Connected social media accounts  
- `revenue_records` - Earnings tracking
- `withdrawals` - Withdrawal requests

### Security Features

- **JWT Authentication** - Secure API access
- **CORS Protection** - Configured for production domains
- **Input Validation** - Request data validation
- **Safe Mode** - Compliance with visa restrictions

---

**Support:** For deployment issues, refer to the detailed deployment guides in the main project.