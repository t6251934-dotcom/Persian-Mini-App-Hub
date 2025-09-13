@echo off
chcp 65001 >nul
cls

echo 🚀 Persian Mini-App Hub - Quick Deploy to GitHub
echo ================================================
echo.

echo [INFO] Project name updated to: persian-miniapp-hub
echo [INFO] This name should be unique and available on GitHub
echo.

echo [1/5] Checking if git is installed...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed or not in PATH
    echo Please install Git from: https://git-scm.com/
    pause
    exit /b 1
)
echo ✅ Git is available

echo.
echo [2/5] Initializing Git repository...
if exist .git (
    echo ⚠️  Git repository already exists, skipping init
) else (
    git init
    echo ✅ Git repository initialized
)

echo.
echo [3/5] Adding all files to git...
git add .
git status --porcelain >nul 2>&1
if %errorlevel% equ 0 (
    git commit -m "Initial commit: Persian Mini-App Hub with updated name"
    echo ✅ Files committed to git
) else (
    echo ⚠️  No changes to commit or commit failed
)

echo.
echo [4/5] GitHub Repository Setup
echo =============================
echo Please follow these steps:
echo.
echo 1. Go to: https://github.com/new
echo 2. Repository name: persian-miniapp-hub
echo 3. Description: Persian Mini-App Hub - Telegram Super App Marketplace
echo 4. Make it PUBLIC (recommended)
echo 5. DON'T initialize with README, .gitignore, or license
echo 6. Click "Create repository"
echo.
echo After creating the repository, copy the HTTPS URL
echo Example: https://github.com/yourusername/persian-miniapp-hub.git
echo.
set /p REPO_URL="Paste your GitHub repository URL here: "

echo.
echo [5/5] Pushing to GitHub...
git branch -M main
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ✅ SUCCESS! Your project is now on GitHub!
    echo.
    echo 🎉 Next Steps - Deploy to Vercel:
    echo ================================
    echo 1. Go to: https://vercel.com/new
    echo 2. Click "Import Git Repository"
    echo 3. Select your repository: persian-miniapp-hub
    echo 4. Vercel will auto-detect it's a React project
    echo 5. Click "Deploy" - that's it!
    echo.
    echo 🌐 Your app will be live at: https://persian-miniapp-hub.vercel.app
    echo.
) else (
    echo.
    echo ❌ Failed to push to GitHub
    echo Please check your repository URL and try again
    echo.
)

echo 📁 Want a quick preview? Open demo.html in your browser!
echo.
pause