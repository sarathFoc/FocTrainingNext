const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "." });

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  clearMocks: true,
  moduleDirectories: ["node_modules", "src"],
  // setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testRegex: "(/_tests_/.*|(\\.|/)spec)\\.[jt]sx?$",
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!axios)']
};

module.exports = createJestConfig(customJestConfig);
