import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import imagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
const isGhPages =
  process.env.GITHUB_ACTIONS === 'true' ||
  process.env.DEPLOY_TARGET === 'gh-pages' ||
  process.env.VITE_DEPLOY_TARGET === 'gh-pages'

const shouldOptimizeImages = process.env.ENABLE_IMAGE_MIN === 'true'

export default defineConfig({
  base: isGhPages ? '/Mee_trials/' : '/',
  plugins: [
    react(),
    tailwindcss(),
    visualizer({ 
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true
    }),
    ...(shouldOptimizeImages
      ? [
          imagemin({
            gifsicle: { optimizationLevel: 7 },
            mozjpeg: { quality: 80 },
            pngquant: { quality: [0.65, 0.8] },
            svgo: {
              plugins: [
                { name: 'removeViewBox', active: false },
                { name: 'removeEmptyAttrs', active: false }
              ]
            }
          })
        ]
      : [])
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    }
  }
})
