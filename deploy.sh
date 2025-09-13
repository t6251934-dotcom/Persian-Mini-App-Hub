#!/bin/bash

echo "🚀 Persian Mini-App Hub - Quick Deploy Script"
echo "================================================"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}Step 1: Initializing Git repository...${NC}"
git init
git add .
git commit -m "Initial commit: Persian Mini-App Hub"

echo -e "${BLUE}Step 2: Please create a new repository on GitHub${NC}"
echo "1. Go to https://github.com/new"
echo "2. Repository name: persian-miniapp-hub"
echo "3. Make it public"
echo "4. Don't initialize with README (we already have files)"
echo ""
echo "Then copy the repository URL (e.g., https://github.com/yourusername/persian-miniapp-hub.git)"
echo ""
read -p "Enter your GitHub repository URL: " REPO_URL

echo -e "${BLUE}Step 3: Adding remote and pushing to GitHub...${NC}"
git branch -M main
git remote add origin $REPO_URL
git push -u origin main

echo -e "${GREEN}✅ Successfully uploaded to GitHub!${NC}"
echo ""
echo -e "${YELLOW}Next steps for Vercel deployment:${NC}"
echo "1. Go to https://vercel.com"
echo "2. Import your GitHub repository"
echo "3. Vercel will auto-detect it's a frontend project"
echo "4. Deploy!"
echo ""
echo -e "${GREEN}🎉 Your Persian Mini-App Hub will be live in 2-3 minutes!${NC}"