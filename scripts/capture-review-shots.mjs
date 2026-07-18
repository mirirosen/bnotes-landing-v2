// Captures fresh full-page + section screenshots for external design review.
// Usage: node scripts/capture-review-shots.mjs [round]
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

const round = process.argv[2] ?? "r1";
const base = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3100";
const outDir = `docs/screenshots/review-${round}`;
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();

async function shoot(name, viewport, opts = {}) {
  const ctx = await browser.newContext({ viewport, ...opts });
  const page = await ctx.newPage();
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForTimeout(2500); // let hero video poster + reveals settle
  // Scroll through the page so scroll-reveal sections are in their revealed
  // state. behavior:"instant" — the page sets scroll-behavior:smooth, and
  // interrupted smooth scrolls would leave sections unvisited.
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 250));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${outDir}/${name}-full.png`, fullPage: true });
  await page.screenshot({ path: `${outDir}/${name}-fold.png` });
  await ctx.close();
  console.log(`captured ${name}`);
}

await shoot("desktop-1440", { width: 1440, height: 900 });
await shoot("mobile-390", { width: 390, height: 844 }, { isMobile: true, hasTouch: true });

await browser.close();
console.log(`done -> ${outDir}`);
