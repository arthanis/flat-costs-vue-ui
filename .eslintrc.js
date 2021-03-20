module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-self-closing': ['error', { html: { normal: 'never' } }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 2,
      multiline: { allowFirstLine: true },
    }],
  },
};
