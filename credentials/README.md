# Credentials

This directory contains the credential definitions for all custom nodes.

## Files

### MightyCallApi.credentials.ts
Handles authentication for the MightyCall phone system.

**Required Fields:**
- API Token
- Account Type (Personal/Business)

**Get Credentials:**
https://www.mightycall.com/ → Settings → API

---

### OnPrintShopApi.credentials.ts
Handles OAuth authentication for OnPrintShop printing services.

**Required Fields:**
- Client ID
- Client Secret  
- Environment (Production/Sandbox)

**Get Credentials:**
https://onprintshop.com/ → Developer Portal → API Settings

---

### XPSApi.credentials.ts
Handles API key authentication for XPS Ship logistics.

**Required Fields:**
- API Key

**Get Credentials:**
https://xpsship.rocksolidinternet.com/ → Settings → API Access

## Usage in n8n

1. Go to **Settings** → **Credentials**
2. Click **Add Credential**
3. Search for the credential type (MightyCall API, OnPrintShop API, or XPS Ship API)
4. Enter your credentials
5. Test connection
6. Save

## Security

- Credentials are encrypted in n8n's database
- Never commit actual credential values to version control
- Use environment variables for sensitive data in production


