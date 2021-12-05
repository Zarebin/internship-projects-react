module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/function-component-definition": "off",
    "react/react-in-jsx-scope": "off",
    "arrow-body-style" : "off",
    "react/jsx-filename-extension" : "off",
    "jsx-a11y/no-static-element-interactions" : "off",
    "react/prop-types": "off"
  },
};
