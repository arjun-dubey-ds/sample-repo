const allowedOrigins = [
  'http://localhost:4200',
  'http://127.0.0.1:4200',
  'https://pl-pe-medrx-dev.prod.internal-gcp.optum.com',
  'https://pl-pe-medrx-stg.prod.internal-gcp.optum.com',
  'https://pl-pe-medrx-tst.prod.internal-gcp.optum.com'
];

function validateOrigin(origin) {
  if (!origin) return false;
  return allowedOrigins.includes(origin);
}

function addSecurityHeaders(req, res, next) {
  const origin = req.headers.origin;

  if (validateOrigin(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.removeHeader('Access-Control-Allow-Origin');
  }

  // Additional security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  next();
}

module.exports = { addSecurityHeaders, validateOrigin };
