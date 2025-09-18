# HOSTINGER DEPLOYMENT PACKAGE 
 
## Upload Instructions: 
1. Upload this entire folder to your Hostinger public_html directory 
2. Set environment variables from .env.local in Hostinger control panel 
3. Run: npm install --production 
4. Run: npx prisma migrate deploy 
5. Start with: node .next/standalone/employ-nation/server.js 
