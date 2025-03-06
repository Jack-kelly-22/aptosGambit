import { defineConfig } from 'vitepress'

export default defineConfig({
  // ... existing config ...
  
  // Add these lines:
  base: '/aptos-gambit/', // Use your repository name
  outDir: '.vitepress/dist',
  
  // ... rest of existing config ...
}) 