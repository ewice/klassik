import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  minify: true,
  outDir: 'dist',
  sourcemap: true,
  splitting: false,
  target: 'es2017',
  treeshake: true,
  esbuildOptions(opt) {
    opt.keepNames = false;
  },
});
