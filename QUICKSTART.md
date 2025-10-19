# Quick Start Guide

This guide will help you get your custom OnPrintShop and MightyCall nodes up and running quickly.

## Prerequisites

✅ Node.js 18+ installed  
✅ npm or pnpm installed  
✅ n8n running (Docker or local)

## Installation Steps

### Step 1: Install Dependencies

**Windows (PowerShell):**
```powershell
cd n8n/nodes
.\setup.ps1
```

**Linux/Mac:**
```bash
cd n8n/nodes
chmod +x setup.sh
./setup.sh
```

**Manual Installation:**
```bash
cd n8n/nodes
npm install
npm run build
```

### Step 2: Restart n8n

**Docker:**
```bash
docker-compose restart n8n n8n-worker n8n-webhook
```

**Local n8n:**
```bash
# Stop n8n
# Start n8n again
n8n start
```

### Step 3: Verify Installation

1. Open n8n in your browser
2. Create a new workflow
3. Click the "+" to add a node
4. Search for "OnPrintShop" or "MightyCall"
5. You should see the custom nodes appear

## Setting Up Credentials

### OnPrintShop Credentials

1. In n8n, go to **Credentials** → **New**
2. Search for "OnPrintShop API"
3. Fill in:
   - **API Key**: Your OnPrintShop API key
   - **Base URL**: Your OnPrintShop instance URL
4. Click **Save**

### MightyCall Credentials

1. In n8n, go to **Credentials** → **New**
2. Search for "MightyCall API"
3. Fill in:
   - **API Key**: Your MightyCall API key
4. Click **Test** to verify
5. Click **Save**

## Testing Your Nodes

### Quick Test - OnPrintShop

1. Add a **Manual Trigger** node
2. Add an **OnPrintShop** node
3. Configure:
   - Resource: **Order**
   - Operation: **Get Many**
   - Limit: **10**
4. Select your credentials
5. Click **Execute Node**

### Quick Test - MightyCall

1. Add a **Manual Trigger** node
2. Add a **MightyCall** node
3. Configure:
   - Resource: **Contact**
   - Operation: **Get Many**
   - Limit: **10**
4. Select your credentials
5. Click **Execute Node**

## Common Issues

### "Node not found"
- Make sure you ran `npm run build`
- Check that docker-compose.yml has the custom volumes mounted
- Restart all n8n containers

### "Authentication failed"
- Verify your API keys are correct
- Check that the base URL is correct (OnPrintShop)
- Test the API keys directly with curl or Postman

### "Module not found" errors
- Make sure all dependencies are installed: `npm install`
- Try deleting `node_modules` and `dist` folders and rebuilding

## Next Steps

- Check out `README.md` for detailed documentation
- Look at `example-workflows.json` for workflow examples
- Explore the API documentation:
  - OnPrintShop: https://documenter.getpostman.com/view/33263100/2sA3kVmMgH#intro
  - MightyCall: https://api.mightycall.com/v4/doc

## Need Help?

- Review the full `README.md`
- Check n8n logs: `docker-compose logs n8n`
- Check the n8n documentation: https://docs.n8n.io/

---

**Happy Automating! 🚀**

