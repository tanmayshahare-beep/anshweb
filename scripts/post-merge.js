#!/usr/bin/env node

// Cross-platform post-merge script
const { execSync } = require('child_process');

try {
  console.log('Running post-merge script...');
  
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('pnpm install --frozen-lockfile', { stdio: 'inherit' });
  
  // Push database changes
  console.log('Pushing database changes...');
  execSync('pnpm --filter db push', { stdio: 'inherit' });
  
  console.log('Post-merge script completed successfully!');
} catch (error) {
  console.error('Post-merge script failed:', error.message);
  process.exit(1);
}