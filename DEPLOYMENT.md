# Deployment Guide

## Vercel Deployment (Recommended)

### Prerequisites
- GitHub account with repository
- Vercel account (free)
- PostgreSQL database (Vercel Postgres or external)

### Step 1: Prepare Repository

```bash
# Ensure all code is committed
git add .
git commit -m "Final deployment preparation"
git push origin main
```

### Step 2: Create Vercel Project

1. Go to vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Framework: Next.js (auto-detected)
5. Click "Deploy"

### Step 3: Configure Environment Variables

In Vercel Dashboard:

1. Go to Settings → Environment Variables
2. Add all production variables:

```
NEXT_PUBLIC_APP_URL=https://yourdomain.com
DATABASE_URL=postgresql://...
JWT_SECRET=<generate-strong-secret>
PETERPAY_API_KEY=...
PETERPAY_SECRET_KEY=...
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

### Step 4: Setup Database

**Option A: Vercel Postgres**
1. In Vercel Dashboard → Storage
2. Create new PostgreSQL database
3. Copy connection string
4. Add as DATABASE_URL

**Option B: External Database**
1. Use AWS RDS, Google Cloud SQL, etc.
2. Copy connection string
3. Ensure database is publicly accessible
4. Add as DATABASE_URL

### Step 5: Run Migrations on Production

```bash
# After deployment, run migrations
vercel env pull  # Download environment variables
npm run prisma:migrate -- --skip-generate

# Or manually in Vercel
vercel ssh
npm run prisma:migrate
```

### Step 6: Configure Domain

1. In Vercel Dashboard → Settings → Domains
2. Add your domain
3. Update DNS records (instructions provided)
4. Wait for SSL certificate (automatic)

---

## Docker Deployment

### Prerequisites
- Docker installed
- Docker Hub account (for image storage)

### Step 1: Create Dockerfile

```dockerfile
# Multi-stage build for optimization
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY --from=builder /app/.next ./.next
COPY public ./public
EXPOSE 3000
CMD ["npm", "start"]
```

### Step 2: Create .dockerignore

```
node_modules
.next
.git
.env.local
.env
*.md
```

### Step 3: Build and Push Image

```bash
# Build image
docker build -t johnonlineservices/josa:latest .

# Login to Docker Hub
docker login

# Push image
docker push johnonlineservices/josa:latest
```

### Step 4: Run Container

```bash
# Run locally
docker run -p 3000:3000 \
  -e DATABASE_URL=postgresql://... \
  -e JWT_SECRET=... \
  johnonlineservices/josa:latest

# Or use docker-compose
docker-compose up
```

---

## AWS Deployment

### Prerequisites
- AWS account
- AWS CLI installed
- ECS cluster setup

### Step 1: Push to ECR

```bash
# Create ECR repository
aws ecr create-repository --repository-name josa

# Build and tag image
docker build -t josa:latest .
docker tag josa:latest <account>.dkr.ecr.<region>.amazonaws.com/josa:latest

# Push to ECR
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account>.dkr.ecr.<region>.amazonaws.com
docker push <account>.dkr.ecr.<region>.amazonaws.com/josa:latest
```

### Step 2: Deploy to ECS

1. Create ECS task definition
2. Create service
3. Configure load balancer
4. Set environment variables
5. Deploy

---

## Manual VPS Deployment

### Prerequisites
- Ubuntu/Linux VPS
- SSH access
- Node.js 18+, PostgreSQL, Nginx

### Step 1: Setup Server

```bash
# Update system
sudo apt update && apt upgrade -y

# Install dependencies
sudo apt install -y nodejs npm postgresql nginx

# Create app user
sudo useradd -m josa
sudo su - josa
```

### Step 2: Deploy Application

```bash
# Clone repository
git clone <url> /home/josa/app
cd /home/josa/app

# Install dependencies
npm install --production

# Create .env
cp .env.example .env
# Edit .env with production values

# Build application
npm run build
```

### Step 3: Setup Database

```bash
# Create database
sudo -u postgres createdb john_services

# Run migrations
npm run prisma:migrate
```

### Step 4: Setup Nginx

Create `/etc/nginx/sites-available/josa`:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and test:
```bash
sudo ln -s /etc/nginx/sites-available/josa /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 5: Setup PM2

```bash
# Install PM2
npm install -g pm2

# Create ecosystem.config.js
pm2 start npm --name josa -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

### Step 6: SSL Certificate

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d yourdomain.com
```

---

## Health Checks

After deployment, verify:

```bash
# Homepage loads
curl https://yourdomain.com

# API responds
curl https://yourdomain.com/api/orders

# Database connected
# Check admin dashboard at /admin

# Payments working
# Test with PeterPay sandbox
```

---

## Monitoring

### Setup Uptime Monitoring

Use services like:
- Vercel Analytics
- New Relic
- Datadog
- UptimeRobot

### Setup Error Tracking

Use:
- Sentry
- LogRocket
- Rollbar

### Setup Performance Monitoring

Use:
- Vercel Analytics (built-in)
- Google PageSpeed Insights
- New Relic APM

---

## Rollback Procedures

### Vercel Rollback

1. Go to Vercel Dashboard
2. Click on deployment
3. Hover over previous deployment
4. Click "Promote to Production"

### Docker Rollback

```bash
# Deploy previous image
docker pull johnonlineservices/josa:v1.0.0
docker stop josa
docker run -d --name josa johnonlineservices/josa:v1.0.0
```

---

## Troubleshooting Deployment

### Build Fails
```bash
# Clear build cache
npm cache clean --force
rm -rf .next
npm run build
```

### Database Connection Error
- Check DATABASE_URL format
- Verify IP whitelist on database
- Check network connectivity

### Performance Issues
- Enable caching
- Use CDN
- Optimize database queries
- Monitor memory usage

---

See SETUP_GUIDE.md for complete setup instructions
