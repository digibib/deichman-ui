import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/legacy.css',
    format: 'es',
  },
  external: Object.keys(pkg.dependencies),
  plugins: [
    external(),
    postcss({
      extract: true,
      config: {
        path: 'config/legacy/postcss.config.js',
      },
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    resolve(),
    commonjs(),
  ],
};
