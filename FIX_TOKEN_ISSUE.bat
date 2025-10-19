@echo off
REM Fix the token exposure issue

echo ========================================
echo  Fixing Token Exposure Issue
echo ========================================
echo.

cd /d "%~dp0"

echo Removing the problematic commit...
git reset --soft HEAD~1

echo Re-staging files with token removed...
git add .

echo Creating new commit without token...
git commit -m "Initial release v1.0.0

- Add MightyCall node with full API coverage
- Add OnPrintShop node with print job management
- Add XPS Ship node with shipping automation
- Include custom branded icons for all nodes
- Add comprehensive documentation"

echo Pushing to GitHub (you'll be prompted for credentials)...
echo.
echo Username: cderamos-2ct
echo Password: Enter your token when prompted (not shown in script)
echo.
git push -u origin main

if errorlevel 1 (
    echo.
    echo Push failed. Please enter credentials when prompted.
    pause
    exit /b 1
)

echo.
echo ========================================
echo  SUCCESS! Code pushed to GitHub!
echo ========================================
echo.
pause

