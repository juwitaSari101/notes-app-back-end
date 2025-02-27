import globals from 'globals';
import pluginJs from '@eslint/js';
import deStyle from 'eslint-config-dicodingacademy';


export default [
  deStyle,
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];