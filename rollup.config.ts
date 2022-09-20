import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: 'src/index.ts',
  external: ['@tarojs/shared', '@tarojs/service'],
  plugins: [
    typescript({
      removeComments: true
    }),
  ],
  output: {
    dir: './dist',
    exports: 'auto',
    format: 'cjs',
    sourcemap: true,
    preserveModules: true
  }
});