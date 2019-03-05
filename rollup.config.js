import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import copy from 'rollup-plugin-copy-glob';
import svgr from '@svgr/rollup';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    external(),
    postcss({
      extract: true,
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    resolve(),
    commonjs(),
    copy(
      [
        { files: 'public/icons.svg', dest: 'dist' },
        { files: 'public/images/logo.svg', dest: 'dist' },
        { files: 'public/images/logo-inverted.svg', dest: 'dist' },
        { files: 'public/images/logo-small.svg', dest: 'dist' },
        { files: 'public/images/logo-small-inverted.svg', dest: 'dist' },
        { files: 'public/logo-styleguide.svg', dest: 'dist' },
      ],
      { verbose: true },
    ),
  ],
};
