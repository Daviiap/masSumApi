const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  bail: true,
  roots: ['<rootDir>/__tests__'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    ...tsjPreset.preset,
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  testEnvironment: 'node',
};
