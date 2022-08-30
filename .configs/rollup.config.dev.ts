import resolve from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-ts';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/cjs/index.js',
        sourcemap: true,
      },
      {
        format: 'esm',
        file: 'dist/esm/index.js',
        sourcemap: true,
      },
    ],
    plugins: [ts({ tsconfig: './tsconfig.json' }), resolve()],
  },
];
