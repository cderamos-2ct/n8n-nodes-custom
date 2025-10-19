# GitHub Setup Guide for n8n Custom Nodes

## Prerequisites Setup

### 1. Install Git for Windows

Download and install Git from: https://git-scm.com/download/win

**Installation Options:**
- ✅ Use Git from the Windows Command Prompt
- ✅ Use the OpenSSL library
- ✅ Checkout Windows-style, commit Unix-style line endings
- ✅ Use MinTTY
- ✅ Enable file system caching

After installation, restart your terminal/PowerShell.

### 2. Configure Git

Open PowerShell and run:

```powershell
git config --global user.name "cderamos-2ct"
git config --global user.email "cderamos@2ct.com"
```

### 3. Set Up GitHub Account

If you haven't already:
1. Go to https://github.com
2. Sign in with username: **cderamos-2ct**
3. Verify your email address

## GitHub Repository Setup

### Step 1: Create New Repository on GitHub

1. Go to https://github.com/new
2. **Repository name**: `n8n-nodes-custom`
3. **Description**: "Professional n8n nodes for MightyCall, OnPrintShop & XPS Ship integrations"
4. **Visibility**: Public (so others can install it)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

### Step 2: Initialize Local Repository

Open PowerShell and navigate to your custom nodes directory:

```powershell
cd C:\Docker\n8n\custom-nodes

# Initialize git repository
git init

# Configure user for this repo (if not set globally)
git config user.name "cderamos-2ct"
git config user.email "cderamos@2ct.com"
```

### Step 3: Add Files to Git

```powershell
# Stage all files
git add .

# Verify what will be committed (should NOT include node_modules or dist)
git status

# Create initial commit
git commit -m "Initial release v1.0.0

- Add MightyCall node with full API coverage
- Add OnPrintShop node with print job management
- Add XPS Ship node with shipping automation
- Include custom branded icons for all nodes
- Add comprehensive documentation and examples"
```

### Step 4: Connect to GitHub

```powershell
# Add remote repository (replace with your actual repo URL)
git remote add origin https://github.com/cderamos-2ct/n8n-nodes-custom.git

# Verify remote
git remote -v
```

### Step 5: Push to GitHub

```powershell
# Push to main branch
git branch -M main
git push -u origin main
```

**If prompted for authentication:**
- Use your GitHub username: `cderamos-2ct`
- Use a Personal Access Token (not password)

### Step 6: Create Personal Access Token (If Needed)

1. Go to https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Note: "n8n custom nodes access"
4. Select scopes: ✅ **repo** (Full control of private repositories)
5. Click **Generate token**
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when pushing

### Step 7: Create First Release

On GitHub website:

1. Go to your repository: https://github.com/cderamos-2ct/n8n-nodes-custom
2. Click **Releases** → **Create a new release**
3. **Tag version**: `v1.0.0`
4. **Release title**: `v1.0.0 - Initial Release`
5. **Description**:
   ```markdown
   ## 🎉 Initial Release
   
   Professional n8n nodes for three major integrations:
   
   ### Included Nodes
   - ✨ **MightyCall** - Phone system automation
   - ✨ **OnPrintShop** - Print job management
   - ✨ **XPS Ship** - Shipping automation
   
   ### Features
   - 🎨 Custom branded icons
   - 🔐 Secure credential management
   - 📚 Comprehensive documentation
   - ⚡ Full TypeScript support
   
   ### Installation
   ```bash
   npm install @cderamos-2ct/n8n-nodes-custom
   ```
   
   Or install via n8n Community Nodes in the UI.
   ```
6. Attach the file: `cderamos-2ct-n8n-nodes-custom-1.0.0.tgz`
7. Click **Publish release**

## Optional: Publish to npm Registry

### Step 1: Create npm Account

1. Go to https://www.npmjs.com/signup
2. Create account (can use same username: cderamos-2ct)
3. Verify email

### Step 2: Login to npm

```powershell
cd C:\Docker\n8n\custom-nodes
npm login
```

Enter your npm credentials.

### Step 3: Publish Package

```powershell
# Verify package contents
npm pack --dry-run

# Publish to npm
npm publish --access public
```

Now anyone can install via:
```bash
npm install @cderamos-2ct/n8n-nodes-custom
```

## GitHub Actions (Optional - Automated Publishing)

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Add npm token to GitHub secrets:
1. Go to repository **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `NPM_TOKEN`
4. Value: Your npm access token

## Verification Checklist

After setup, verify:

- [ ] Repository is public on GitHub
- [ ] README.md displays correctly
- [ ] LICENSE file is present
- [ ] .gitignore is working (no node_modules in repo)
- [ ] Release v1.0.0 is created
- [ ] Package tarball is attached to release
- [ ] All files are committed and pushed
- [ ] Repository URL in package.json matches actual repo

## Sharing Your Nodes

Once published, share the installation command:

```bash
# For npm users
npm install @cderamos-2ct/n8n-nodes-custom

# For n8n Community Nodes
Settings → Community Nodes → Install → @cderamos-2ct/n8n-nodes-custom
```

## Future Updates

When making updates:

```powershell
# 1. Update version in package.json
#    Example: "version": "1.1.0"

# 2. Update CHANGELOG.md with changes

# 3. Commit changes
git add .
git commit -m "Release v1.1.0: Add new features"

# 4. Create tag
git tag v1.1.0

# 5. Push with tags
git push origin main --tags

# 6. Create GitHub release for the new tag

# 7. If published to npm
npm publish
```

## Troubleshooting

### Issue: Git not found
**Solution**: Install Git from https://git-scm.com/download/win and restart terminal

### Issue: Authentication failed
**Solution**: Use Personal Access Token instead of password

### Issue: npm publish fails
**Solution**: Make sure you're logged in with `npm login` and package name is available

### Issue: Package name already taken
**Solution**: Use scoped package name: `@your-username/n8n-nodes-custom`

## Support

If you encounter issues:
- Check GitHub documentation: https://docs.github.com
- Check npm documentation: https://docs.npmjs.com
- Ask in n8n community: https://community.n8n.io

---

**Current Status:**
- ✅ All documentation files created
- ✅ Package built and ready
- ✅ .gitignore configured
- ⏳ Waiting for Git installation
- ⏳ Waiting for GitHub repository creation
- ⏳ Waiting for initial push

