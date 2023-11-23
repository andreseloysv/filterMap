module.exports = {
  projects: [],

  // defaults for the sub-projects
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.spec.json' }],
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  testTimeout: 30000,
  // standardmäßig deaktiviert, weil sonst Breakpoints nicht funktionieren bzw. in der falschen Zeile greifen
  collectCoverage: false,
  coverageDirectory: './build/coverage/',
  collectCoverageFrom: ['**/*.ts', '!**/*.d.ts', '!**/generated/**/*.ts', '!**/shared/expect-extensions/*.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/services/.*/index.ts$',
    '<rootDir>/services/.*/index.ts$',
    '<rootDir>/services/.*/config.ts$',
    '<rootDir>/.*\\.factory\\.ts$',
    '<rootDir>/node_modules/',
    '<rootDir>/generated',
    '<rootDir>/api-definitions',
    '<rootDir>/shared/ServerBaseConfiguration',
    '<rootDir>/build/',
    '<rootDir>/shared/constants/HttpStatus',
    '<rootDir>/shared/vapi-data-provider/.*/*.api.ts',
    '<rootDir>/shared/vapi-data-provider/.*/*.model.ts',
    '<rootDir>/shared/diaboli-api-data-provider/.*/*.api.ts',
    '<rootDir>/shared/diaboli-api-data-provider/.*/*.model.ts',
    '<rootDir>/features',
    '<rootDir>/startup',

    // we don't use this file, maybe delete it
    '<rootDir>/shared/setup/BaseConfig',
    '<rootDir>/shared/setup/koa-middleware/buildInfo',
    '<rootDir>/shared/setup/koa-middleware/buildHealth',
  ],
  moduleNameMapper: {
    '@shared(.*)$': '<rootDir>/shared/$1',
    '@generated(.*)$': '<rootDir>/generated/$1',
    '@mapper(.*)$': '<rootDir>/mapper/$1',
    '@services(.*)$': '<rootDir>/services/$1',
  },
};
