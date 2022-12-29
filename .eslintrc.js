module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: "eslint:recommended",
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-irregular-whitespace": "off",
    "no-async-promise-executor": "off",
    "no-unused-vars": "off",
    "require-atomic-updates": "off",
    // "semi": ["error", "never"],
    // "quotes": ["error", "single"],
    // "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    // "no-whitespace-before-property": "error"
    "no-extra-semi": "off"
  }
}
