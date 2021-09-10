module.exports = function() {
  return {
    testFramework: 'jest',
    env: {
      type: 'node',
    },
    tests: ['test/**/*.test.js'],
    files: ['**/*.js', '!node_modules/**/*',  '!**/*.test.js', '!**/.*'],
  };
};