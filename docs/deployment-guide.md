# 📖 Detailed Deployment & Troubleshooting Guide

### 🛠 Phase 1: DNS Setup
- Configured A-Record pointing to AWS Public IP.
- *Note:* Used DuckDNS for demo purposes; production environments would utilize AWS Route53.

### 🛠 Phase 2: App Setup & PM2
- Installed Node.js 20.x.
- Managed process with PM2 to ensure the app survives crashes/reboots.

```bash
pm2 start app.js --name "my-app" && pm2 save
```

### 🛠 Phase 3: Nginx Proxy Configuration
- Set up a reverse proxy to forward traffic from Port 80/443 to the internal Port 3000.
- Implemented HTTP to HTTPS redirection.

```nginx
server {
    listen 80;
    server_name your-subdomain.duckdns.org;

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

### 🛠 Phase 4: SSL via Certbot
- Automated SSL issuance:

```bash
sudo certbot --nginx -d your-subdomain.duckdns.org
```

- Verified auto-renewal cronjob:

```bash
sudo certbot renew --dry-run
```

### ⚠️ Troubleshooting & Lessons Learned

1. **Firewall Blocks:** Initially, Port 3000 was unreachable until I explicitly allowed it in UFW and AWS Security Groups.

   ```bash
   sudo ufw allow 3000/tcp
   ```

2. **Nginx Syntax:** Encountered a `server_name` semicolon error; resolved by correcting the Nginx server block syntax.

3. **SSL Redirection:** Configured Certbot to handle the redirect logic to ensure "Secure" status across all entries.
