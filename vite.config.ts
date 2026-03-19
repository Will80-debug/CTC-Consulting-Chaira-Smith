import build from '@hono/vite-build/cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    build({
      minify: true,
      emptyOutDir: true,
      external: [],
      outputDir: 'dist',
      serverEntry: 'src/index.tsx',
      routes: {
        exclude: ['/static/*', '/videos/*', '/downloads/*']
      }
    }),
    devServer({
      adapter,
      entry: 'src/index.tsx'
    })
  ],
  publicDir: 'public'
})
