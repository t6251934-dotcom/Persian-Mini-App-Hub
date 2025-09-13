@echo off
chcp 65001 >nul
cls

echo 🔧 Persian Mini-App Hub - GitHub Upload Fix
echo =============================================
echo.

echo 📋 Current Issue: Git authentication mismatch
echo    Your repository: keyvanium/persian-miniapp-hub
echo    Git account: t6251934-dotcom (different account)
echo.

echo 💡 Solution Options:
echo.
echo 🌟 OPTION 1 (RECOMMENDED - Easiest):
echo    Use GitHub Desktop app:
echo    1. Download GitHub Desktop from: https://desktop.github.com/
echo    2. Sign in with your keyvanium account
echo    3. Clone your repository: keyvanium/persian-miniapp-hub
echo    4. Copy all project files to the cloned folder
echo    5. Commit and push - Done!
echo.

echo 🌟 OPTION 2 (Web Upload):
echo    1. Go to: https://github.com/keyvanium/persian-miniapp-hub
echo    2. Click "uploading an existing file"
echo    3. Drag and drop the entire project folder
echo    4. Commit directly - Done!
echo.

echo 🌟 OPTION 3 (Command Line Fix):
echo    Update Git credentials and push manually
echo.

echo 🎯 After upload, Vercel deployment steps:
echo    1. Go to https://vercel.com
echo    2. Import from GitHub: keyvanium/persian-miniapp-hub
echo    3. Vercel auto-detects React + Vite
echo    4. Deploy! (2-3 minutes to live)
echo.

echo 📁 Quick Local Preview:
echo    Open demo.html in your browser for immediate preview
echo.

echo ✅ All layout issues have been fixed!
echo    Your deployed app will look perfect.
echo.

set /p choice="Which option do you prefer? (1/2/3): "

if "%choice%"=="1" (
    echo.
    echo 🚀 Opening GitHub Desktop download page...
    start https://desktop.github.com/
    echo.
    echo 📋 Steps to follow:
    echo 1. Install GitHub Desktop
    echo 2. Sign in with keyvanium account  
    echo 3. Clone: keyvanium/persian-miniapp-hub
    echo 4. Copy all files from f:\MINI APP QODER to cloned folder
    echo 5. Commit and push
    echo.
) else if "%choice%"=="2" (
    echo.
    echo 🌐 Opening your GitHub repository...
    start https://github.com/keyvanium/persian-miniapp-hub
    echo.
    echo 📋 Steps to follow:
    echo 1. Click "uploading an existing file"
    echo 2. Drag entire project folder
    echo 3. Write commit message: "Initial commit: Persian Mini-App Hub"
    echo 4. Click "Commit new files"
    echo.
) else if "%choice%"=="3" (
    echo.
    echo 🔑 Setting up Git credentials...
    echo Please enter your GitHub username when prompted
    git config --global user.name "keyvanium"
    echo Please enter your GitHub email when prompted
    set /p email="Enter your GitHub email: "
    git config --global user.email "%email%"
    echo.
    echo 🔐 You'll need to authenticate with GitHub...
    echo Use your GitHub username: keyvanium
    echo Use a Personal Access Token as password
    echo.
    echo 📝 To create a token:
    echo 1. Go to: https://github.com/settings/tokens
    echo 2. Generate new token (classic)
    echo 3. Select "repo" permissions
    echo 4. Copy the token and use as password
    echo.
    pause
    git push -u origin main
)

echo.
echo 🎉 Next: Deploy to Vercel for instant live app!
echo.
pause