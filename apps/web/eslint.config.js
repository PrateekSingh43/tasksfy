import baseConfig from "@repo/eslint-config/vite";

/** @type {import("eslint").Config[]} */
export default [
  ...baseConfig,
  {
    // You can add app-specific rules here
    rules: {},
  },
];