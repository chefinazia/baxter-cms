import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: "remotes",
      filename: "cmsEntry.js",
      exposes: {
        "./LoginButton": "./src/components/LoginButton"
      },
      shared: ["react", "react-dom"]
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: '[name].js'
      }
    }
  },
  preview: {
    port: 3001,
    strictPort: true,
  }
})
