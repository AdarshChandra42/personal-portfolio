# Amazon Linux EC2 Deployment Guide

This guide will help you deploy your portfolio website on an Amazon Linux EC2 instance.

## Prerequisites

1. **Amazon Linux EC2 Instance** (Amazon Linux 2 or Amazon Linux 2023)
2. **SSH access** to your EC2 instance
3. **Security Group** configured to allow HTTP (port 80), HTTPS (port 443), and Custom TCP (port 5000)
4. **Domain name** (optional but recommended)

## Step 1: Prepare Your Amazon Linux EC2 Instance

### Connect to your EC2 instance:
```bash
ssh -i your-key.pem ec2-user@your-ec2-public-ip
```

### Update system packages:
```bash
sudo yum update -y
```

### Install Node.js and npm:
For Amazon Linux 2:
```bash
# Install Node.js 18.x
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
```

For Amazon Linux 2023:
```bash
sudo dnf install -y nodejs npm
```

### Verify installation:
```bash
node --version
npm --version
```

### Install Git (if not already installed):
```bash
sudo yum install -y git
```

### Install development tools (needed for some npm packages):
```bash
sudo yum groupinstall -y "Development Tools"
```

## Step 2: Clone and Deploy Your Application

### Clone your repository:
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### Make deployment script executable:
```bash
chmod +x deploy.sh
```

### Create environment file:
```bash
cp env.example .env
nano .env
```

Edit the `.env` file with your production values:
```
PORT=5000
NODE_ENV=production
FRONTEND_URL=http://your-ec2-public-ip:5000
BACKEND_URL=http://your-ec2-public-ip:5000
```

### Install PM2 globally:
```bash
sudo npm install -g pm2
```

### Run deployment script:
```bash
./deploy.sh
```

## Step 3: Configure Nginx (Recommended for Production)

### Install Nginx:
For Amazon Linux 2:
```bash
sudo amazon-linux-extras install nginx1
```

For Amazon Linux 2023:
```bash
sudo dnf install -y nginx
```

### Start and enable Nginx:
```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Create Nginx configuration:
```bash
sudo nano /etc/nginx/conf.d/portfolio.conf
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com your-ec2-public-ip;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}
```

### Test and restart Nginx:
```bash
sudo nginx -t
sudo systemctl restart nginx
```

## Step 4: Configure Security Groups (AWS Console)

In your AWS Console, configure your Security Group to allow:

1. **SSH (22)** - Your IP only
2. **HTTP (80)** - 0.0.0.0/0
3. **HTTPS (443)** - 0.0.0.0/0  
4. **Custom TCP (5000)** - 0.0.0.0/0 (for direct access during testing)

## Step 5: Test Your Deployment

### Check if your application is running:
```bash
# Check PM2 status
pm2 status

# Check if port 5000 is listening
sudo netstat -tlnp | grep :5000

# Test the health endpoint
curl http://localhost:5000/api/health
```

### Access your application:
- **Direct access**: `http://your-ec2-public-ip:5000`
- **Through Nginx**: `http://your-ec2-public-ip`

## Step 6: SSL Certificate (Optional but Recommended)

### Install Certbot:
For Amazon Linux 2:
```bash
sudo yum install -y certbot python3-certbot-nginx
```

For Amazon Linux 2023:
```bash
sudo dnf install -y certbot python3-certbot-nginx
```

### Obtain SSL certificate (only if you have a domain):
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Step 7: Configure Auto-restart on Boot

### Save PM2 configuration:
```bash
pm2 save
```

### Generate and install PM2 startup script:
```bash
pm2 startup
# Copy and run the command that PM2 outputs
```

## Monitoring and Maintenance

### Essential PM2 commands:
```bash
# Check application status
pm2 status

# View real-time monitoring
pm2 monit

# View logs
pm2 logs portfolio-website

# Restart application
pm2 restart portfolio-website

# Stop application
pm2 stop portfolio-website
```

### System monitoring:
```bash
# Check system resources
htop
# If htop is not installed: sudo yum install -y htop

# Check disk usage
df -h

# Check memory usage
free -m
```

### Update application:
```bash
git pull origin main
./deploy.sh
```

## Troubleshooting

### Common Issues:

1. **Port 5000 blocked**: 
   ```bash
   # Check if the port is listening
   sudo netstat -tlnp | grep :5000
   
   # Check AWS Security Group settings
   ```

2. **Permission denied**:
   ```bash
   # Check file permissions
   ls -la
   
   # Make script executable
   chmod +x deploy.sh
   ```

3. **Build fails**:
   ```bash
   # Check Node.js version
   node --version
   
   # Check PM2 logs
   pm2 logs portfolio-website
   ```

4. **Nginx issues**:
   ```bash
   # Check Nginx status
   sudo systemctl status nginx
   
   # Check Nginx configuration
   sudo nginx -t
   
   # View Nginx logs
   sudo tail -f /var/log/nginx/error.log
   ```

### Check application health:
```bash
curl http://localhost:5000/api/health
curl http://your-ec2-public-ip/api/health
```

## Quick Start Commands Summary

```bash
# 1. Connect to your instance
ssh -i your-key.pem ec2-user@your-ec2-public-ip

# 2. Update system
sudo yum update -y

# 3. Install Node.js
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# 4. Install PM2
sudo npm install -g pm2

# 5. Clone your repository
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# 6. Setup environment
cp env.example .env
nano .env

# 7. Deploy
chmod +x deploy.sh
./deploy.sh
```

Your portfolio website should now be live and accessible via your EC2 public IP! 