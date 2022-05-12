'use strict';
module.exports = {
    roots: ['<rootDir>/src'],
    rootDir: '../..',
    setupFiles: ['react-app-polyfill/jsdom'],
    setupFilesAfterEnv: ['<rootDir>/configs/test/setup-enzyme.ts'],
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
        '^.+\\.css$': '<rootDir>/configs/test/cssTransform.js',
        '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
            '<rootDir>/configs/test/fileTransform.js',
    },
    modulePaths: ['<rootDir>/src'],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '^lodash-es': 'lodash',
    },
    moduleFileExtensions: [
        'web.js',
        'js',
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'json',
        'web.jsx',
        'jsx',
        'node',
    ],
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
    resetMocks: false,
    coverageReporters: ['text', 'lcov', 'json', 'cobertura'],
    coveragePathIgnorePatterns: [
        '.styles.(js|jsx|ts|tsx)',
        '.style.(js|jsx|ts|tsx)',
        'config/jest/setupTests.ts',
        'src/icons/',
        'src/shared/styles/',
        'src/images/',
        'public/',
        '.scss',
        '.mock.(js|jsx|ts|tsx)',
    ],
};
