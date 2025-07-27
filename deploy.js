const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting automated deployment...');

try {
  // Build the project
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Check if build was successful
  if (!fs.existsSync('out')) {
    throw new Error('Build failed! "out" directory not found.');
  }
  
  console.log('✅ Build completed successfully!');
  console.log('🌐 Your website is ready for deployment.');
  console.log('');
  console.log('📋 Next steps:');
  console.log('1. Go to your GitHub repository settings');
  console.log('2. Navigate to Pages section');
  console.log('3. Set source to "Deploy from a branch"');
  console.log('4. Select "gh-pages" branch and "/ (root)" folder');
  console.log('5. Save the settings');
  console.log('');
  console.log('🔗 Your site will be available at: https://narasimhakarthik2.github.io/gayathri-hospital');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
} 