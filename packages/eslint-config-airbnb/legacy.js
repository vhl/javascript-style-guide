module.exports = {
  'extends': [
    'eslint-config-vhl/rules/best-practices',
    'eslint-config-vhl/rules/errors',
    'eslint-config-vhl/rules/legacy',
    'eslint-config-vhl/rules/node',
    'eslint-config-vhl/rules/strict',
    'eslint-config-vhl/rules/style',
    'eslint-config-vhl/rules/variables'
  ],
  'env': {
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jquery': true,
    'jasmine': true
  },
  'ecmaFeatures': {},
  'globals': {
    'angular': true,
      '_': true
  },
  'rules': {}
};
