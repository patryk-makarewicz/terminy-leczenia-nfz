const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  rootDir: './app',
  testEnvironment: 'jest-environment-jsdom',
  testTimeout: 10000,
  setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/setupTests.ts'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>../.coverage',
  coverageProvider: 'v8',
  coverageReporters: ['text-summary'],
  collectCoverageFrom: [
    '<rootDir>/**/*.{ts,tsx}',
    '!<rootDir>/**/index.{ts,tsx}',
    '!<rootDir>/**/*.model.*',
    '!<rootDir>/**/*.styles.*',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/**/layout.*',
    '!<rootDir>/api/**/*',
    '!<rootDir>/i18n/**/*',
    '!<rootDir>/tests/**/*'
  ]
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
