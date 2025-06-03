# AWS EC2 Deployment Guide

This guide will help you deploy your portfolio website on an AWS EC2 instance.

## Prerequisites

1. **AWS EC2 Instance** running Ubuntu 20.04 or later
2. **SSH access** to your EC2 instance
3. **Security Group** configured to allow HTTP (port 80) and HTTPS (port 443) traffic
4. **Domain name** (optional but recommended)

## Step 1: Prepare Your EC2 Instance

### Connect to your EC2 instance:
```bash
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

### Update system packages:
```bash
sudo apt update && sudo apt upgrade -y
```

### Install Node.js (using NodeSource repository):
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Verify installation:
```bash
node --version
npm --version
```

### Install Git:
```bash
sudo apt install git -y
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
FRONTEND_URL=http://your-domain.com
BACKEND_URL=http://your-domain.com
```

### Run deployment script:
```bash
./deploy.sh
```

## Step 3: Configure Nginx (Recommended)

### Install Nginx:
```bash
sudo apt install nginx -y
```

### Create Nginx configuration:
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

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
    }
}
```

### Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Step 4: Configure Firewall

### Allow necessary ports:
```bash
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

## Step 5: SSL Certificate (Optional but Recommended)

### Install Certbot:
```bash
sudo apt install certbot python3-certbot-nginx -y
```

### Obtain SSL certificate:
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Step 6: Configure Auto-restart on Boot

The deployment script automatically configures PM2 to start on boot. To verify:

```bash
pm2 startup
pm2 save
```

## Monitoring and Maintenance

### Check application status:
```bash
pm2 status
pm2 monit
```

### View logs:
```bash
pm2 logs portfolio-website
```

### Restart application:
```bash
pm2 restart portfolio-website
```

### Update application:
```bash
git pull origin main
./deploy.sh
```

## Troubleshooting

### Common Issues:

1. **Port 5000 blocked**: Check AWS Security Group settings
2. **Permission denied**: Check file permissions with `ls -la`
3. **Build fails**: Check Node.js version compatibility
4. **PM2 not starting**: Check logs with `pm2 logs`

### Check application health:
```bash
curl http://localhost:5000/api/health
```

### Check Nginx status:
```bash
sudo systemctl status nginx
```

### View Nginx logs:
```bash
sudo tail -f /var/log/nginx/error.log
```

## Security Considerations

1. **Keep system updated**: Regular `sudo apt update && sudo apt upgrade`
2. **Configure fail2ban**: Protect against brute force attacks
3. **Use strong passwords**: For all user accounts
4. **Regular backups**: Of your application and data
5. **Monitor logs**: Check for suspicious activity

## Performance Optimization

1. **Enable gzip compression** in Nginx
2. **Configure caching** for static assets
3. **Use a CDN** for better global performance
4. **Monitor resource usage** with `htop` or `pm2 monit`

Your portfolio website should now be live and accessible via your domain or EC2 public IP! 