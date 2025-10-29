import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/tailwind.config";

const config: Pick<Config, "presets" | "content"> = {
  presets: [sharedConfig],
  content: [
    // 1. Scan your local HTML file
    "./index.html",
    // 2. Scan all files in your local src directory
    "./src/**/*.{js,ts,jsx,tsx}",
    // 3. Scan all files in the shared UI package
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config;
