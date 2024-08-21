import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: 'Your App Name',
      short_name: 'App',
      description: 'Your app description',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'favicon.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'favicon.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'favicon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  }),
 ],
 resolve: {
   alias: {
     "@": path.resolve(__dirname, "./src"),
   },
 },
})
