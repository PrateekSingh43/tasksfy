import baseConfig from "@repo/eslint-config/node";

/** @type {import("eslint").Config[]} */
export default [
  ...baseConfig,
  {
    // App-specific rules
    rules: {},
  },
];