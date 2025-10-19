@echo off
REM Push n8n Custom Nodes to GitHub
REM Run this in a NEW PowerShell window (to pick up Git in PATH)

echo ========================================
echo  n8n Custom Nodes - GitHub Push Script
echo ========================================
echo.

cd /d "%~dp0"

echo Step 1: Initializing git repository...
git init
if errorlevel 1 (
    echo ERROR: Git not found! Please:
    echo 1. Close this window
    echo 2. Open a NEW PowerShell window
    echo 3. Run this script again
    pause
    exit /b 1
)

echo Step 2: Configuring git user...
git config user.name "cderamos-2ct"
git config user.email "cderamos@2ct.com"

echo Step 3: Adding all files...
git add .

echo Step 4: Creating initial commit...
git commit -m "Initial release v1.0.0 - Add MightyCall, OnPrintShop, and XPS Ship nodes with custom icons"

echo Step 5: Adding GitHub remote...
git remote add origin https://github.com/cderamos-2ct/n8n-nodes-custom.git

echo Step 6: Renaming branch to main...
git branch -M main

echo Step 7: Pushing to GitHub...
echo.
echo NOTE: You may be prompted for GitHub credentials.
echo Username: cderamos-2ct
echo Password: Use your Personal Access Token (NOT your GitHub password)
echo.
git push -u origin main

if errorlevel 1 (
    echo.
    echo ========================================
    echo  Push Failed - Authentication Needed
    echo ========================================
    echo.
    echo If you need a Personal Access Token:
    echo 1. Go to: https://github.com/settings/tokens
    echo 2. Click "Generate new token (classic)"
    echo 3. Select scope: repo (full control)
    echo 4. Copy the token and use it as your password
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo  SUCCESS! Code pushed to GitHub!
echo ========================================
echo.
echo Your repository: https://github.com/cderamos-2ct/n8n-nodes-custom
echo.
echo Next steps:
echo 1. Go to your repository on GitHub
echo 2. Create a release (v1.0.0)
echo 3. Attach: cderamos-2ct-n8n-nodes-custom-1.0.0.tgz
echo.
pause

