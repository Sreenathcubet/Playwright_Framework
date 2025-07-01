module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require tests/steps/**/*.ts',
    'tests/Features/**/*.feature'
  ].join(' ')
};