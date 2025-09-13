# Project Name Update Summary

## Changes Made

The project name has been updated from "persian-miniapp-center" to "persian-miniapp-hub" to resolve GitHub repository name conflicts.

## Files Updated

### 1. **package.json** (Root)
- Project name: `persian-miniapp-center` → `persian-miniapp-hub`
- Description: Updated to reflect new name
- Repository URL: Updated GitHub URL
- Author: Updated team name

### 2. **frontend/package.json**
- Project name: `persian-miniapp-frontend` → `persian-miniapp-hub-frontend`

### 3. **vercel.json**
- Project name: Updated for Vercel deployment

### 4. **deploy.bat** (PowerShell Script)
- Updated all references to new project name
- Repository name in instructions updated

### 5. **deploy.sh** (Shell Script)
- Updated all references to new project name
- Repository name in instructions updated

### 6. **README.md**
- Title: Persian Mini-App Center → Persian Mini-App Hub
- Persian title: سنتر → هاب
- All project references updated
- Contact information updated
- Website URLs updated

### 7. **demo.html**
- Page title updated
- Welcome message updated
- Platform statistics section updated

### 8. **docker-compose.yml**
- Database name: `persian_miniapp` → `persian_miniapp_hub`
- All database connection strings updated

### 9. **quick-deploy.bat** (NEW FILE)
- New enhanced deployment script
- Better error handling
- Step-by-step instructions
- Success/failure feedback

## New Repository Instructions

When creating the GitHub repository:

1. **Repository Name**: `persian-miniapp-hub`
2. **Description**: `Persian Mini-App Hub - Telegram Super App Marketplace`
3. **Visibility**: Public (recommended)
4. **Don't initialize** with README, .gitignore, or license

## Deployment Commands

### Quick Deployment (Recommended)
```batch
# Run the new enhanced script
./quick-deploy.bat
```

### Alternative Methods
```batch
# Windows PowerShell
./deploy.bat

# Mac/Linux
chmod +x deploy.sh
./deploy.sh
```

## Vercel Deployment

After GitHub upload:
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your repository: `persian-miniapp-hub`
3. Vercel auto-detects React project
4. Click "Deploy"

Your app will be live at: `https://persian-miniapp-hub.vercel.app`

## Benefits of the Change

- **Unique Name**: Avoids conflicts with existing repositories
- **Consistent Branding**: "Hub" conveys a central marketplace concept
- **Better SEO**: More distinctive name for search and discovery
- **Future-Proof**: Reduces likelihood of naming conflicts

All functionality remains the same - only the project name and branding have been updated.