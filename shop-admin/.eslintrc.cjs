module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'comma-dangle': 0,
    'vue/max-attributes-per-line': [1, { singleline: 10, multiline: { max: 1 } }],
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-self-closing': 0,
  },
}
