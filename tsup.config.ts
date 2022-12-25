import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'Bipack',
  entry: ['src'],
  sourcemap: true,
  clean: true,
  minify: true,
  outDir: './dist',
  format: ['cjs', 'esm'],
  globalName: 'Bipack',
  dts: true,
  bundle: false,
  treeshake: true,
  banner: {
    js: '// Banner',
  },
})