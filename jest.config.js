module.exports = {
  testEnvironment: "node",
  coverageDirectory: "coverage", 
  collectCoverageFrom: ["src/**/*.js", "app.js", "!**/node_modules/**"],
  coverageThreshold: {
    global: { branches: 70, functions: 50, lines: 70, statements: 70 }
  },
  testMatch: ["**/tests/**/*.test.js"]
};
