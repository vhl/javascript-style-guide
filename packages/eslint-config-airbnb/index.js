module.exports = {
  extends: [
    'eslint-config-vhl-base',
    'eslint-config-vhl-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
