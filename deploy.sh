#!/bin/bash

# Portfolio Website Deployment Script
# Run this script on your EC2 instance to deploy your application

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}⚠️  PM2 not found. Installing PM2...${NC}"
    npm install -g pm2
fi

# Create logs directory
mkdir -p logs

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

# Build the React application
echo -e "${YELLOW}🔨 Building React application...${NC}"
cd client
npm install
npm run build
cd ..

# Stop existing PM2 process if running
echo -e "${YELLOW}🛑 Stopping existing processes...${NC}"
pm2 stop portfolio-website 2>/dev/null || true
pm2 delete portfolio-website 2>/dev/null || true

# Start the application with PM2
echo -e "${YELLOW}▶️  Starting application with PM2...${NC}"
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

# Setup PM2 startup script
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp $HOME

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 Your application is now running on port 5000${NC}"
echo -e "${GREEN}📊 Monitor with: pm2 monit${NC}"
echo -e "${GREEN}📋 View logs with: pm2 logs portfolio-website${NC}" 