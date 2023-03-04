module.exports = {
  testEnvironment: "jsdom",
  testMatch: ['**/?(*.)(spec).js?(x)'],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': '<rootDir>/node_modules/@vue/vue2-jest',
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/*.{js,vue}',
    '!**/node_modules/**',
    '!documentation/**',
    '!docs/**'
  ]
}
