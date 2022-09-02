module.exports = {
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-mutating-props': 'off',
    'comma-dangle': 0,
    'vue/max-attributes-per-line': [1, { singleline: 10, multiline: { max: 1 } }],
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-self-closing': 0,
    'vue/multi-word-component-names': 0,
    'space-before-function-paren': 0,
    'no-dupe-keys': 0,
    'vue/html-closing-bracket-newline': 0,
  },
  overrides: [
    {
      files: ['src/api/**/*.ts'],
      rules: {
        camelcase: 'off',
      },
    },
  ],
}
