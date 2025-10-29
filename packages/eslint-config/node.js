import globals from "globals";
import { baseConfig } from "./index.js";

/** @type {import("eslint").Config[]} */
export const config = [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

export default config;