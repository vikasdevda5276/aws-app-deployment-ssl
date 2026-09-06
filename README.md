# 🌐 Production Web App Deployment on AWS with SSL/TLS

**Objective:** Deploy a secure, production-grade Node.js application on AWS EC2 using Nginx as a reverse proxy with automated SSL/TLS encryption.

---

### 🚀 Implementation Strategy

1. **Cloud Networking:** Configured AWS Security Groups allowing only essential traffic (2222, 80, 443).
2. **Production-Ready Proxy:** Implemented Nginx to handle ingress traffic, secure headers, and SSL termination.
3. **Application Lifecycle:** Managed Node.js via **PM2** for background execution and zero-downtime persistence.
4. **Encryption:** Automated Let's Encrypt SSL issuance via Certbot with mandatory HTTPS redirection.

> **Note on Domain:** Used a **DuckDNS subdomain** for this demonstration/POC. The same architecture is fully compatible with registered domains (Route53/Namecheap/Cloudflare) in a commercial environment.

---

### 📊 Visual Evidence & Documentation

#### 1. Cloud-Level Firewall (AWS Security Group)
Strict inbound rules using a "Least Privilege" approach.
<img width="1915" height="649" alt="AWS Security Group" src="https://github.com/user-attachments/assets/3e71c94c-f16c-4aa3-afcc-6bc4b1fb164b" />


#### 2. Global DNS Propagation
Verified A-Record mapping via DuckDNS across global nodes.
<img width="1877" height="966" alt="DNS Checker" src="https://github.com/user-attachments/assets/65266447-53ca-46fb-9133-5760c698aa54" />


#### 3. SSL/TLS Certificate Status
Verified certificate issuance via Certbot (Let's Encrypt).
<img width="1172" height="528" alt="Certbot Certificates" src="https://github.com/user-attachments/assets/b9c86e48-c4b3-461f-b390-cc1e250809f2" />


#### 4. Production-Ready Nginx Proxy
Configuration handles SSL handshakes and proxies traffic to the local Node.js service.
<img width="1343" height="803" alt="Nginx Config" src="https://github.com/user-attachments/assets/ffa34594-e10f-43d6-b01e-a0978d423752" />


#### 5. Application Process Management (PM2)
Ensuring 24/7 uptime and automated restarts for the Node.js application.
<img width="1462" height="323" alt="Screenshot from 2026-09-03 15-18-19" src="https://github.com/user-attachments/assets/12e46792-11cb-4e37-a85a-a62f8fd2ad4b" />



#### 6. Live Production Environment (HTTPS Verified)
The final hardened portfolio page secured with an SSL certificate.
<img width="1920" height="1053" alt="Live Browser View" src="https://github.com/user-attachments/assets/6be95a0f-0caf-4386-9140-1bc885f83601" />


---

### 📁 Project Structure
*   **/app**: Source code for the Node.js landing page.
*   **/configs**: Nginx server blocks, PM2 configurations, and security scripts.
*   **/docs**: [Step-by-Step Deployment Guide](docs/deployment-guide.md) with troubleshooting notes.

---

### 🧰 Tech Stack
* **Cloud:** AWS EC2 (Ubuntu 26.04.1 LTS)
* **Web Server:** Nginx
* **Process Management:** PM2
* **Security:** Let's Encrypt SSL, UFW, Certbot
