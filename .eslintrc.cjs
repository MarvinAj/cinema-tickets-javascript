module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'import/extensions': [
      'error',
      {
        js: 'ignorePackages',
      },
    ],
  },
};
