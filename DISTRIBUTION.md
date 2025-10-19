# n8n Custom Nodes Distribution Guide

## Installation Instructions for Others

### Option 1: Via npm (Recommended)

```bash
npm install @cderamos-2ct/n8n-nodes-custom
```

### Option 2: Direct from GitHub

```bash
npm install github:cderamos-2ct/n8n-nodes-custom
```

### Option 3: Via n8n Community Nodes

1. Open n8n UI
2. Go to Settings → Community Nodes
3. Click "Install"
4. Search for: `@cderamos-2ct/n8n-nodes-custom`
5. Click Install

## What's Included

This package contains three custom n8n nodes:

### 1. MightyCall Node
- **Purpose**: Integration with MightyCall phone system API
- **Credentials**: MightyCall API (requires API token and account type)
- **Icon**: Custom MightyCall logo
- **Features**: 
  - Make calls
  - Send SMS
  - Manage contacts
  - Handle call logs

### 2. OnPrintShop Node
- **Purpose**: Integration with OnPrintShop printing services
- **Credentials**: OnPrintShop API (requires Client ID and Client Secret)
- **Icon**: Custom OnPrintShop logo
- **Features**:
  - Submit print jobs
  - Track order status
  - Manage products
  - Handle payments

### 3. XPS Ship Node
- **Purpose**: Integration with XPS Ship shipping services
- **Credentials**: XPS Ship API (requires API key)
- **Icon**: Custom XPS Ship logo
- **Features**:
  - Create shipping labels
  - Track shipments
  - Calculate shipping rates
  - Manage addresses

## Configuration

After installation, you'll need to configure credentials for each service:

1. **MightyCall**: Get API token from your MightyCall dashboard
2. **OnPrintShop**: Get Client ID and Secret from OnPrintShop developer portal
3. **XPS Ship**: Get API key from XPS Ship admin panel

## Usage Examples

### MightyCall - Make a Call
```
1. Add MightyCall node to workflow
2. Configure credentials
3. Select "Make Call" operation
4. Set destination number and message
```

### OnPrintShop - Submit Print Job
```
1. Add OnPrintShop node to workflow
2. Configure credentials
3. Select "Submit Job" operation
4. Upload file and set print parameters
```

### XPS Ship - Create Shipping Label
```
1. Add XPS Ship node to workflow
2. Configure credentials
3. Select "Create Label" operation
4. Set origin/destination addresses
```

## Support

- **Repository**: https://github.com/cderamos-2ct/n8n-nodes-custom
- **Issues**: Report bugs and feature requests on GitHub
- **Documentation**: Check individual node descriptions in n8n UI

## Version History

- **v1.0.0**: Initial release with MightyCall, OnPrintShop, and XPS Ship nodes
  - All nodes include custom icons
  - Full credential management
  - Comprehensive API coverage

## License

MIT License - See LICENSE file for details
