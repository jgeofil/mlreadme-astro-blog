## 2024-06-25 - [Add HTTP Security Headers]
**Vulnerability:** Missing standard HTTP security headers (X-Frame-Options, X-Content-Type-Options, etc.).
**Learning:** Security headers are not applied automatically by Astro/Vercel and must be configured via `vercel.json` routing configuration to protect against common web attacks like clickjacking and MIME-type sniffing.
**Prevention:** Always verify and include security headers in project deployments, specifically using the platform's configuration files.
