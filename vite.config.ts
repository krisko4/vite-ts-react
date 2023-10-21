import { defineConfig } from 'vite'
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
  build: {
    outDir: 'build',
  },
  plugins: [
    react({
      include: '**/*.tsx',
    }),
    viteTsconfigPaths(),
    svgrPlugin(),],
})
