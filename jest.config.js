/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {

    testEnvironment: 'jsdom',
    clearMocks: true,
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    rootDir: './',
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[j]s?(x)',
    ],
};

module.exports = config;
