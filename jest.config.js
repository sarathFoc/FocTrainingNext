const nextJest = require('next/jest')

const createJestConfig = nextJest({dir: '.'}) 

const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',
    clearMocks: true,
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testRegex: '(/__tests__/.*|(\\.|/)spec)\\.[jt]sx?$',
}

module.exports = createJestConfig(customJestConfig)


