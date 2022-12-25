import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'Bipack',
  entry: ['src/index.ts'],
  sourcemap: true,
  clean: true,
  minify: true,
  outDir: './dist',
  format: ['cjs', 'esm'],
  globalName: 'Bipack',
  dts: true,
  bundle: true,
  treeshake: true,
  banner: {
    js: '// Banner',
  },
})