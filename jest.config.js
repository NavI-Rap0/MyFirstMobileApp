
module.exports = {
  setupFiles: ['<rootDir>/jest-setup.js'],

  preset: 'react-native',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-navigation|react-native|react-native-reanimated))',
  ],
};
