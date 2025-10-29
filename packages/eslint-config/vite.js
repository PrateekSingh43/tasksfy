import baseConfig from "@repo/eslint-config/react";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...baseConfig,
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    ignores: [
      ".docusaurus/**",
      "build/**",
      "node_modules/**",
      "docs/**",
      "blog/**",
      "README.md",
    ],
  }
);
