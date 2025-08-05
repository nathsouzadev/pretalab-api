const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.spec.ts", "**/tests/**/*.test.ts"],
  transform: {
    ...tsJestTransformCfg,
  },
  setupFiles: ["<rootDir>/tests/jest.setup.js"],
};