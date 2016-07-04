import argvSetEnv from 'argv-set-env';
argvSetEnv();

import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'lib/index.js',
  plugins: [
    babel(),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs()
  ],
  format: 'iife',
  dest: 'dist/jquery.css-mahoro.js'
};
