@echo off
chcp 65001 >nul
cls

echo 🚀 Persian Mini-App Center - Quick Deploy Script
echo ================================================
echo.

echo [1/4] Initializing Git repository...
git init
git add .
git commit -m "Initial commit: Persian Mini-App Center"

echo.
echo [2/4] Please create a new repository on GitHub:
echo   1. Go to https://github.com/new
echo   2. Repository name: persian-miniapp-center
echo   3. Make it public
echo   4. Don't initialize with README
echo.
set /p REPO_URL="Enter your GitHub repository URL: "

echo.
echo [3/4] Adding remote and pushing to GitHub...
git branch -M main
git remote add origin %REPO_URL%
git push -u origin main

echo.
echo ✅ Successfully uploaded to GitHub!
echo.
echo 📋 Next steps for Vercel deployment:
echo   1. Go to https://vercel.com
echo   2. Import your GitHub repository
echo   3. Vercel will auto-detect it's a frontend project
echo   4. Deploy!
echo.
echo 🎉 Your Persian Mini-App Center will be live in 2-3 minutes!
echo.

echo 📁 Quick preview: Open demo.html in your browser for immediate preview
echo.
pause