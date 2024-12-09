module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        "^.+\\.ts$": ['ts-jest', {
            isolatedModules: true
        }]
    },
    testMatch: ["<rootDir>/tests/**/*.test.ts"],
    // runInBand: true
}