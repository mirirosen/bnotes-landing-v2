import { defineConfig } from "@playwright/test";

/**
 * QA configuration for the B Notes landing page.
 * baseURL comes from PLAYWRIGHT_BASE_URL (defaults to the local dev server on :3100 —
 * ports 3000/3001/3010 are occupied by unrelated projects on this machine).
 * Artifacts land under docs/qa-artifacts/ per the Phase 3 QA specification.
 */
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3100";

export default defineConfig({
  testDir: "./tests",
  outputDir: "./docs/qa-artifacts/test-results",
  fullyParallel: true,
  retries: 1,
  reporter: [
    ["list"],
    ["html", { outputFolder: "docs/qa-artifacts/playwright-report", open: "never" }],
  ],
  use: {
    baseURL,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "desktop",
      use: {
        browserName: "chromium",
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: "mobile",
      use: {
        browserName: "chromium",
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
  webServer: {
    command: "npm run dev -- -p 3100",
    url: baseURL,
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
