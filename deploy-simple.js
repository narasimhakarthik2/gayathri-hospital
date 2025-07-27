const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting simple deployment...');

try {
  // Build the project
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Check if build was successful
  if (!fs.existsSync('out')) {
    throw new Error('Build failed! "out" directory not found.');
  }
  
  console.log('✅ Build completed successfully!');
  console.log('');
  console.log('📋 Manual deployment steps:');
  console.log('1. Go to your GitHub repository: https://github.com/narasimhakarthik2/gayathri-hospital');
  console.log('2. Go to Settings → Pages');
  console.log('3. Set Source to "Deploy from a branch"');
  console.log('4. Select "main" branch and "/docs" folder');
  console.log('5. Save the settings');
  console.log('');
  console.log('📁 Copy the contents of the "out" folder to a "docs" folder in your repository');
  console.log('🔗 Your site will be available at: https://narasimhakarthik2.github.io/gayathri-hospital');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
} 