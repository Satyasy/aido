# 🚀 AIDOC Production Deployment Guide

## ✅ Build Status
✅ **BUILD SUCCESSFUL** - Aplikasi siap untuk production!

## 📋 Pre-requisites
1. **Node.js** (v18 atau lebih tinggi)
2. **PostgreSQL Database**
3. **Google Gemini API Key**
4. **Environment Variables**

## 🔧 Environment Setup

### 1. Database Setup
```bash
# Pastikan PostgreSQL berjalan
# Jalankan Prisma migrations
npx prisma generate
npx prisma db push
```

### 2. Environment Variables (.env.production)
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/aidoc_production"

# JWT Secret
JWT_SECRET="your-super-secret-jwt-key-for-production"

# Google Gemini API
GOOGLE_API_KEY="your-gemini-api-key"

# Next.js
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your-nextauth-secret"

# Production Settings
NODE_ENV="production"
```

## 🏗️ Build Commands

### Local Production Build
```bash
# Install dependencies
npm install

# Generate Prisma Client
npx prisma generate

# Build aplikasi
npm run build

# Start production server
npm run start
```

### Production Deployment Options

#### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod

# Set environment variables di Vercel Dashboard
```

#### Option 2: Self-hosted (VPS/Server)
```bash
# Clone repository
git clone https://github.com/satyasy/aido.git
cd aido

# Install dependencies
npm install --production

# Setup environment
cp .env.example .env.production
# Edit .env.production dengan nilai yang sesuai

# Build aplikasi
npm run build

# Start dengan PM2
npm install -g pm2
pm2 start npm --name "aidoc" -- start
pm2 startup
pm2 save
```

#### Option 3: Docker
```dockerfile
# Dockerfile (sudah tersedia)
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# Build & Run Docker
docker build -t aidoc .
docker run -p 3000:3000 --env-file .env.production aidoc
```

## 🔒 Security Checklist

### ✅ Authentication & Authorization
- JWT tokens dengan expiry 7 hari
- Password hashing dengan bcrypt
- Role-based access control (Admin/Patient)
- Automatic token refresh dan logout

### ✅ API Security
- CORS protection
- Rate limiting ready
- Input validation
- SQL injection protection (Prisma ORM)

### ✅ Data Protection
- Environment variables untuk secrets
- Secure database connections
- No sensitive data di client-side

## 📊 Performance Optimizations

### ✅ Build Optimizations
- Next.js static generation
- Tree shaking
- Code splitting
- Image optimization ready

### ✅ Frontend Optimizations
- Poppins font dengan font-display: swap
- Tailwind CSS purging
- Component lazy loading
- Client-side hydration fixes

### ✅ Backend Optimizations
- Prisma query optimization
- JWT token validation
- Efficient API endpoints

## 🚀 Deployment Checklist

### Before Deployment
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Gemini API key tested
- [ ] Build successful (`npm run build`)
- [ ] All tests passing

### After Deployment
- [ ] Health check endpoints working
- [ ] Authentication flow tested
- [ ] AI chat functionality working
- [ ] Database connectivity verified
- [ ] SSL certificate configured

## 🔍 Monitoring & Maintenance

### Health Checks
```bash
# Check application status
curl https://your-domain.com/api/health

# Check database connectivity
curl https://your-domain.com/api/v1/auth/login
```

### Log Monitoring
```bash
# PM2 logs
pm2 logs aidoc

# Docker logs
docker logs aidoc-container
```

## 📱 Features Ready for Production

### ✅ Core Features
- User Authentication (Login/Register)
- AI Health Consultation dengan Gemini
- Real-time Chat Interface
- Responsive Design (Mobile/Desktop)
- Admin Panel (User Management)

### ✅ AI Integration
- Google Gemini 2.5 Pro
- Conversation history
- Markdown response formatting
- Indonesian language support

### ✅ UI/UX
- Modern design dengan Poppins font
- Gradient backgrounds
- Interactive animations
- Loading states
- Error handling

## 🎯 Production URLs Structure
```
https://your-domain.com/              # Homepage
https://your-domain.com/login         # Login page  
https://your-domain.com/register      # Register page
https://your-domain.com/consultation  # AI Consultation
https://your-domain.com/features      # Features demo
https://your-domain.com/dashboard     # User dashboard
```

## 🆘 Troubleshooting

### Common Issues
1. **Database Connection**: Check DATABASE_URL
2. **JWT Errors**: Verify JWT_SECRET
3. **Gemini API**: Test GOOGLE_API_KEY
4. **Build Errors**: Clear `.next` folder dan rebuild

### Support
- 📧 Email: aidoc@support.com
- 📚 Documentation: `/docs`
- 🐛 Issues: GitHub Issues

---
**🎉 AIDOC is Production Ready!** 
*Healthcare AI Assistant dengan teknologi terkini*