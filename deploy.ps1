# Automated Deployment Script for Gayathri Hospital
Write-Host "🚀 Starting automated deployment..." -ForegroundColor Green

# Step 1: Build the project
Write-Host "📦 Building the project..." -ForegroundColor Yellow
npm run build

if (!(Test-Path "out")) {
    Write-Host "❌ Build failed! 'out' directory not found." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully!" -ForegroundColor Green

# Step 2: Deploy to GitHub Pages using gh-pages package
Write-Host "🌐 Deploying to GitHub Pages..." -ForegroundColor Yellow

# Install gh-pages if not already installed
if (!(Get-Command npx -ErrorAction SilentlyContinue)) {
    Write-Host "❌ npx not found. Please install Node.js and npm." -ForegroundColor Red
    exit 1
}

# Deploy using gh-pages
npx gh-pages -d out --repo https://github.com/narasimhakarthik2/gayathri-hospital.git

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Deployment completed successfully!" -ForegroundColor Green
    Write-Host "🌍 Your site is available at: https://narasimhakarthik2.github.io/gayathri-hospital" -ForegroundColor Cyan
} else {
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    exit 1
} 