module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'standard',
    'plugin:vue/essential'
  ],
  parserOptions: {
    'ecmaVersion': 2022,
    'sourceType': 'module',
  },
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals: {
    env: false
  }
}
