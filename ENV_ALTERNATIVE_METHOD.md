# Alternative Method: Direct .env File Upload

## If Hostinger doesn't have Environment Variables UI:

### Step 1: Create .env file locally
Create a file named `.env` (no extension) with this content:

```env
DATABASE_URL=mysql://u454989241_empuser:Employ@2025N@localhost:3306/u454989241_empdb
NEXTAUTH_URL=https://employnation.in
NEXTAUTH_SECRET=employ-nation-production-secret-2025-super-secure-key-hostinger
GOOGLE_CLIENT_ID=265747137855-9d2a9fnd7cgb6pj5gp1tp963f27g6efj.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
FACEBOOK_CLIENT_ID=1207437394477040
FACEBOOK_CLIENT_SECRET=6706f59863c53aa352d1c8da07790cfd
LINKEDIN_CLIENT_ID=78k9k43luixtuf
LINKEDIN_CLIENT_SECRET=WPL_AP1.i5NUuBbn1l9RUbqo.tk78+A==
```

### Step 2: Upload .env file
1. Upload this .env file to your public_html directory (same level as package.json)
2. Make sure the file is named exactly `.env` (with the dot at the beginning)

### Step 3: Verify file upload
In Hostinger File Manager, you should see:
- public_html/.env
- public_html/package.json
- public_html/src/
- etc.