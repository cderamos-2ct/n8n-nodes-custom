# Build Instructions

## Quick Build (Windows)

### Option 1: Run the batch file (Easiest)
1. Open File Explorer
2. Navigate to: `\\WebServer\Web\n8n\n8n\nodes\`
3. Double-click `install-and-build.bat`
4. Wait for it to complete
5. Restart n8n containers (see below)

### Option 2: Manual Command Line
Open PowerShell or Command Prompt and run:

```cmd
cd \\WebServer\Web\n8n\n8n\nodes
npm install
npm run build
```

## After Building

Restart your n8n Docker containers:

```bash
cd \\WebServer\Web\n8n
docker-compose restart n8n n8n-worker n8n-webhook
```

## Verify Installation

1. Open n8n in your browser
2. Create a new workflow or open an existing one
3. Click the "+" button to add a node
4. Search for "OnPrintShop" or "MightyCall"
5. The nodes should appear in the list!

## What Gets Built

The build process compiles TypeScript files to JavaScript and copies icons:

```
dist/
├── OnPrintShop.node.js
├── MightyCall.node.js
├── OnPrintShopApi.credentials.js
├── MightyCallApi.credentials.js
├── onprintshop.svg
└── mightycall.svg
```

These files are automatically loaded by n8n through the custom extensions volume mount.

## Troubleshooting

### "npm not found"
- Make sure Node.js is installed: https://nodejs.org/
- Restart your terminal after installing Node.js

### Build errors
- Make sure you're in the correct directory (`n8n/nodes`)
- Try deleting `node_modules` folder and running `npm install` again
- Check that you have write permissions to the folder

### Nodes don't appear in n8n
- Make sure you restarted ALL n8n containers (main, worker, webhook)
- Check docker-compose logs: `docker-compose logs n8n`
- Verify the `dist` folder was created with compiled files

### Permission errors
- Make sure you have write access to the `\\WebServer\Web\n8n\n8n\nodes` folder
- Try running the command prompt as Administrator

## Need More Help?

Check the full documentation:
- `README.md` - Complete documentation
- `QUICKSTART.md` - Quick start guide
- `SETUP_SUMMARY.md` - Overview of what was created

