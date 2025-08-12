import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow plain quotes in JSX text
      "react/no-unescaped-entities": "off",
      // Do not fail build on use of any in UI atoms
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];

export default eslintConfig;
