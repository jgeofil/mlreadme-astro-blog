## 2024-03-14 - Add standard security headers
**Vulnerability:** The application was missing standard HTTP security headers (e.g., `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`), making it more susceptible to clickjacking, MIME-type sniffing, and some XSS attacks.
**Learning:** The Vercel deployment configuration (`vercel.json`) did not have a `headers` array defined.
**Prevention:** Ensure new projects or deployments include a baseline set of security headers in their deployment configuration (like `vercel.json`, `next.config.js`, or similar).
