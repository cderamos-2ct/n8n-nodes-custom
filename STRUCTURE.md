# Project Structure

## 📁 Clean, Organized Structure

Your custom nodes repository is now organized with each node in its own directory.

```
n8n-nodes-custom/
│
├── 📂 nodes/                          # All node implementations
│   ├── 📂 MightyCall/
│   │   ├── MightyCall.node.ts        # Node implementation (2,916 lines)
│   │   ├── mightycall.svg            # Custom icon
│   │   └── README.md                  # Node documentation
│   │
│   ├── 📂 OnPrintShop/
│   │   ├── OnPrintShop.node.ts       # Node implementation (6,799 lines)
│   │   ├── onprintshop.svg           # Custom icon
│   │   └── README.md                  # Node documentation
│   │
│   └── 📂 XPSShip/
│       ├── XPS.node.ts                # Node implementation (1,252 lines)
│       ├── xpsshipper.svg             # Custom icon
│       └── README.md                  # Node documentation
│
├── 📂 credentials/                    # All credential definitions
│   ├── MightyCallApi.credentials.ts
│   ├── OnPrintShopApi.credentials.ts
│   ├── XPSApi.credentials.ts
│   └── README.md                      # Credentials documentation
│
├── 📂 dist/                           # Compiled output (gitignored)
│   ├── 📂 nodes/
│   │   ├── 📂 MightyCall/
│   │   ├── 📂 OnPrintShop/
│   │   └── 📂 XPSShip/
│   └── 📂 credentials/
│
├── 📂 node_modules/                   # Dependencies (gitignored)
│
├── 📄 package.json                    # Package configuration
├── 📄 package-lock.json               # Dependency lock file
├── 📄 tsconfig.json                   # TypeScript configuration
├── 📄 gulpfile.js                     # Icon build script
├── 📄 .gitignore                      # Git ignore rules
│
├── 📄 README.md                       # Main documentation
├── 📄 LICENSE                         # MIT License
├── 📄 CHANGELOG.md                    # Version history
├── 📄 example-workflows.json          # Example workflows
│
└── 📄 STRUCTURE.md                    # This file
```

## Benefits of This Structure

### ✅ **Organized by Node**
- Each node has its own directory
- Easy to find related files
- Clear ownership and separation

### ✅ **Self-Documenting**
- Each node has its own README
- Credentials have dedicated documentation
- Clear structure visible at a glance

### ✅ **Maintainable**
- Easy to update individual nodes
- Simple to add new nodes
- Can distribute nodes separately if needed

### ✅ **Professional**
- Industry-standard structure
- Follows n8n community best practices
- Easy for contributors to understand

## File Counts

| Category | Count | Purpose |
|----------|-------|---------|
| **Nodes** | 3 | Main node implementations |
| **Credentials** | 3 | Authentication handlers |
| **Icons** | 3 | Custom branded SVGs |
| **Node READMEs** | 3 | Individual node documentation |
| **Config Files** | 4 | package.json, tsconfig.json, gulpfile.js, .gitignore |
| **Docs** | 4 | Main README, LICENSE, CHANGELOG, STRUCTURE |
| **Examples** | 1 | Example workflows |
| **Total** | 24 | Essential files |

## Build Process

When you run `npm run build`:

1. **TypeScript Compilation** (`tsc`)
   - Compiles all `.ts` files from `nodes/` and `credentials/`
   - Outputs to `dist/` maintaining directory structure
   - Creates `.js` and `.d.ts` files

2. **Icon Building** (`gulp build:icons`)
   - Copies all `.svg` files to appropriate locations in `dist/`

3. **Result:**
   ```
   dist/
   ├── nodes/
   │   ├── MightyCall/
   │   │   ├── MightyCall.node.js
   │   │   ├── MightyCall.node.d.ts
   │   │   └── mightycall.svg
   │   ├── OnPrintShop/
   │   │   ├── OnPrintShop.node.js
   │   │   ├── OnPrintShop.node.d.ts
   │   │   └── onprintshop.svg
   │   └── XPSShip/
   │       ├── XPS.node.js
   │       ├── XPS.node.d.ts
   │       └── xpsshipper.svg
   └── credentials/
       ├── MightyCallApi.credentials.js
       ├── MightyCallApi.credentials.d.ts
       ├── OnPrintShopApi.credentials.js
       ├── OnPrintShopApi.credentials.d.ts
       ├── XPSApi.credentials.js
       └── XPSApi.credentials.d.ts
   ```

## Package.json Paths

The `package.json` now references the organized structure:

```json
"n8n": {
  "credentials": [
    "dist/credentials/OnPrintShopApi.credentials.js",
    "dist/credentials/MightyCallApi.credentials.js",
    "dist/credentials/XPSApi.credentials.js"
  ],
  "nodes": [
    "dist/nodes/OnPrintShop/OnPrintShop.node.js",
    "dist/nodes/MightyCall/MightyCall.node.js",
    "dist/nodes/XPSShip/XPS.node.js"
  ]
}
```

## Adding a New Node

To add a new node to this structure:

1. **Create directory:**
   ```
   nodes/YourNewNode/
   ```

2. **Add files:**
   ```
   nodes/YourNewNode/YourNewNode.node.ts
   nodes/YourNewNode/yournewnode.svg
   nodes/YourNewNode/README.md
   ```

3. **Add credentials (if needed):**
   ```
   credentials/YourNewNodeApi.credentials.ts
   ```

4. **Update package.json:**
   - Add to `n8n.nodes` array
   - Add to `n8n.credentials` array (if applicable)

5. **Build and test:**
   ```bash
   npm run build
   ```

## Development Workflow

1. **Edit source files** in `nodes/` or `credentials/`
2. **Build:** `npm run build`
3. **Test** in local n8n instance
4. **Commit changes** with descriptive message
5. **Push to GitHub** via GitHub Desktop

## Distribution

Users install the entire package:
```bash
npm install @cderamos-2ct/n8n-nodes-custom
```

They get all 3 nodes automatically:
- MightyCall
- OnPrintShop
- XPS Ship

## Version Control

**Tracked (in git):**
- All source files (.ts, .svg)
- Configuration files
- Documentation
- Examples

**Ignored (not in git):**
- `node_modules/` - Dependencies
- `dist/` - Build output
- `*.tgz` - Package files

---

**This structure makes your package professional, maintainable, and easy to extend!** ✨


