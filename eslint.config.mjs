import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Generated QA artifacts (Playwright HTML report bundles) and vendored
    // agent-skill scripts are not application code.
    "docs/qa-artifacts/**",
    ".agents/**",
    ".playwright-mcp/**",
  ]),
]);

export default eslintConfig;
