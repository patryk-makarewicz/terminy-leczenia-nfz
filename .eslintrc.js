module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'plugin:@next/next/recommended', 'next/core-web-vitals'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@next/next'],
  rules: {
    'prettier/prettier': ['warn', { singleQuote: true, printWidth: 120, endOfLine: 'auto' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    'no-unused-vars': 'off',
    'react/prop-types': 'off'
  }
};
