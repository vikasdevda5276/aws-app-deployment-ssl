const http = require('http');

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vikas Dev | Cloud & DevOps Engineer</title>
    <style>
        :root { --bg: #0f172a; --card: #1e293b; --accent: #38bdf8; --text: #f8fafc; }
        body { font-family: 'Inter', sans-serif; background-color: var(--bg); color: var(--text); margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; text-align: center; }
        .container { padding: 2rem; max-width: 800px; background: var(--card); border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); }
        .status-badge { background: rgba(16, 185, 129, 0.2); color: #10b981; padding: 0.5rem 1rem; border-radius: 999px; font-size: 0.8rem; font-weight: bold; display: inline-block; margin-bottom: 1rem; }
        h1 { font-size: 3rem; margin: 0; color: var(--accent); }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-top: 2rem; }
        .skill-card { background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); }
    </style>
</head>
<body>
    <div class="container">
        <div class="status-badge">● System Hardened & Live</div>
        <h1>Vikas Dev</h1>
        <p>Cloud Security & DevOps Engineer</p>
        <div style="color: #38bdf8; font-size: 1.5rem; margin-top: 1rem;">🛡️ HTTPS SSL Secured</div>
        <div class="grid">
            <div class="skill-card"><h3>AWS EC2</h3></div>
            <div class="skill-card"><h3>Linux Hardening</h3></div>
            <div class="skill-card"><h3>Nginx Proxy</h3></div>
            <div class="skill-card"><h3>SSL / TLS</h3></div>
        </div>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(htmlContent);
});

server.listen(3000, 'localhost');
