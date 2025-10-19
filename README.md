# n8n Custom Nodes - MightyCall, OnPrintShop & XPS Ship

[![npm version](https://img.shields.io/npm/v/@cderamos-2ct/n8n-nodes-custom.svg)](https://www.npmjs.com/package/@cderamos-2ct/n8n-nodes-custom)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Professional n8n nodes for integrating with MightyCall phone systems, OnPrintShop printing services, and XPS Ship logistics.

## 🚀 Features

- ✅ **MightyCall Integration** - Complete phone system automation (calls, SMS, contacts)
- ✅ **OnPrintShop Integration** - Print job management and order tracking
- ✅ **XPS Ship Integration** - Shipping label creation and tracking
- ✅ **Custom Icons** - Professional branded icons for each service
- ✅ **Full Credential Management** - Secure API authentication for all services
- ✅ **TypeScript** - Fully typed for better development experience

## 📦 Installation

### Option 1: Via n8n Community Nodes (Recommended)

1. Open your n8n instance
2. Go to **Settings** → **Community Nodes**
3. Click **Install**
4. Enter: `@cderamos-2ct/n8n-nodes-custom`
5. Click **Install**

### Option 2: Via npm

```bash
cd ~/.n8n/custom
npm install @cderamos-2ct/n8n-nodes-custom
```

### Option 3: Manual Installation

```bash
cd ~/.n8n/custom
npm install github:cderamos-2ct/n8n-nodes-custom
```

After installation, restart your n8n instance.

## 🔧 Included Nodes

### 1. MightyCall Node

**Purpose:** Integrate with MightyCall's phone system API

**Capabilities:**
- Make outbound calls
- Send SMS messages
- Manage contacts and call logs
- Handle voicemail
- Access call recordings

**Credentials Required:**
- API Token (from MightyCall dashboard)
- Account Type (Personal or Business)

**Example Use Cases:**
- Automated customer call-backs
- SMS notifications
- Contact synchronization
- Call analytics workflows

---

### 2. OnPrintShop Node

**Purpose:** Automate printing operations through OnPrintShop

**Capabilities:**
- Submit print jobs
- Track order status
- Manage product catalog
- Process payments
- Handle customer accounts

**Credentials Required:**
- Client ID (from OnPrintShop developer portal)
- Client Secret
- API Environment (Production/Sandbox)

**Example Use Cases:**
- Automated print job submissions
- Order tracking notifications
- Bulk printing workflows
- Customer order management

---

### 3. XPS Ship Node

**Purpose:** Shipping and logistics automation via XPS Ship

**Capabilities:**
- Create shipping labels
- Track shipments in real-time
- Calculate shipping rates
- Manage shipping addresses
- Handle package information

**Credentials Required:**
- API Key (from XPS Ship admin panel)

**Example Use Cases:**
- Automated label generation
- Shipment tracking updates
- Multi-carrier rate comparisons
- Order fulfillment automation

## 🔐 Setting Up Credentials

### MightyCall API

1. Log into your [MightyCall dashboard](https://www.mightycall.com/)
2. Navigate to **Settings** → **API**
3. Generate a new API token
4. In n8n, create new **MightyCall API** credentials
5. Enter your API token and select account type

### OnPrintShop API

1. Access your [OnPrintShop developer portal](https://onprintshop.com/)
2. Navigate to **API Settings**
3. Create new OAuth application
4. Copy Client ID and Client Secret
5. In n8n, create new **OnPrintShop API** credentials
6. Enter credentials and select environment

### XPS Ship API

1. Log into your [XPS Ship admin panel](https://xpsship.rocksolidinternet.com/)
2. Go to **Settings** → **API Access**
3. Generate new API key
4. In n8n, create new **XPS Ship API** credentials
5. Enter your API key

## 📚 Documentation

For detailed API documentation, refer to:

- [MightyCall API Docs](https://api.mightycall.com/v4/doc)
- [OnPrintShop API Docs](https://documenter.getpostman.com/view/33263100/2sA3kVmMgH)
- [XPS Ship API Docs](https://xpsship.rocksolidinternet.com/restapi/docs/v1-ecommerce/endpoints/overview/)

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn
- TypeScript 4.9+
- n8n installed

### Building from Source

```bash
# Clone the repository
git clone https://github.com/cderamos-2ct/n8n-nodes-custom.git
cd n8n-nodes-custom

# Install dependencies
npm install

# Build the nodes
npm run build

# Watch for changes during development
npm run dev
```

### Project Structure

```
n8n-nodes-custom/
├── MightyCall.node.ts          # MightyCall node implementation
├── MightyCallApi.credentials.ts # MightyCall credentials
├── OnPrintShop.node.ts         # OnPrintShop node implementation
├── OnPrintShopApi.credentials.ts # OnPrintShop credentials
├── XPS.node.ts                 # XPS Ship node implementation
├── XPSApi.credentials.ts       # XPS Ship credentials
├── *.svg                       # Custom icons
├── gulpfile.js                 # Icon build script
├── tsconfig.json               # TypeScript configuration
└── package.json                # Package metadata
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues & Support

Found a bug or need help?

- **GitHub Issues**: [Report a bug](https://github.com/cderamos-2ct/n8n-nodes-custom/issues)
- **Discussions**: [Ask questions](https://github.com/cderamos-2ct/n8n-nodes-custom/discussions)

## 🌟 Changelog

### v1.0.0 (2025-10-19)

**Initial Release**
- ✨ Added MightyCall node with full API coverage
- ✨ Added OnPrintShop node with print job management
- ✨ Added XPS Ship node with shipping automation
- 🎨 Custom branded icons for all nodes
- 🔐 Secure credential management for all services
- 📚 Comprehensive documentation and examples

## 💡 Example Workflows

### Auto-respond to New Orders

```
Trigger (Webhook) 
  → OnPrintShop (Get Order Details)
  → MightyCall (Send SMS to Customer)
  → XPS Ship (Create Shipping Label)
```

### Customer Service Automation

```
MightyCall (New Call Received)
  → Database (Lookup Customer)
  → OnPrintShop (Check Order Status)
  → MightyCall (Send SMS with Update)
```

## 🙏 Acknowledgments

- Built for the [n8n](https://n8n.io/) workflow automation platform
- Icons designed specifically for these integrations

---

**Made with ❤️ for the n8n community**