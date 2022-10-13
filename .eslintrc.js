module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:react-hooks/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'import'
  ],
  rules: {
    'react/prop-types': 'off',
    'no-console': 'warn',
    'no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_.*?$'
      }
    ],
    'import/order': ['warn', { 'newlines-between': 'always' }],
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': ['warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true
      }
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
    ],
    'no-extra-parens': ['error', 'all', { returnAssign: true }]
  }
}
