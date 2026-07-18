// Live motion/hover verification for review closure (design review round 2,
// POLISH item 3): checks the states a still screenshot cannot judge.
import { chromium } from "@playwright/test";

const base = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3100";
const browser = await chromium.launch();
const page = await (
  await browser.newContext({ viewport: { width: 1440, height: 900 } })
).newPage();
await page.goto(base, { waitUntil: "networkidle" });
await page.waitForTimeout(2000);

const results = [];
const check = (name, ok, detail = "") =>
  results.push(`${ok ? "PASS" : "FAIL"} ${name}${detail ? " — " + detail : ""}`);

// 1. Hero video exists and is playing (or has completed its once-fade rest)
const video = await page.evaluate(() => {
  const v = document.querySelector("video");
  if (!v) return null;
  return { playing: !v.paused, currentTime: v.currentTime, opacity: getComputedStyle(v).opacity };
});
check("hero video present", !!video, video ? `playing=${video.playing} t=${video.currentTime.toFixed(1)} opacity=${video.opacity}` : "no <video>");

// 2. Header CTA at top: dark glass (backdrop-filter), no glow
const ctaTop = await page.evaluate(() => {
  const a = document.querySelector("header .header-cta");
  const cs = getComputedStyle(a);
  return { backdrop: cs.backdropFilter, shadow: cs.boxShadow, bg: cs.backgroundColor };
});
check("header CTA at-top dark glass", ctaTop.backdrop.includes("blur") && ctaTop.shadow === "none", JSON.stringify(ctaTop));

// 3. After scroll: header CTA regains filled gradient
await page.mouse.wheel(0, 600);
await page.waitForTimeout(600);
const ctaScrolled = await page.evaluate(() => {
  const a = document.querySelector("header .header-cta");
  const cs = getComputedStyle(a);
  return { bgImage: cs.backgroundImage.slice(0, 40), shadow: cs.boxShadow !== "none" };
});
check("header CTA scrolled filled", ctaScrolled.bgImage.includes("gradient") && ctaScrolled.shadow, JSON.stringify(ctaScrolled));

// 4. Pricing: paper-float + shadow-breathe animations actually running
await page.evaluate(() => document.querySelector("#pricing").scrollIntoView());
await page.waitForTimeout(1200);
const pricingAnim = await page.evaluate(() => {
  const card = document.querySelector("#pricing .paper-float");
  const shadow = document.querySelector("#pricing .shadow-breathe");
  return {
    float: card ? getComputedStyle(card).animationName : "missing",
    breathe: shadow ? getComputedStyle(shadow).animationName : "missing",
  };
});
check("pricing float+shadow animations", pricingAnim.float === "paper-float" && pricingAnim.breathe === "shadow-breathe", JSON.stringify(pricingAnim));

// 5. Pricing lamp cone visible: sample luminance above the card vs stage corner
const cone = await page.evaluate(async () => {
  const sec = document.querySelector("#pricing");
  const r = sec.getBoundingClientRect();
  // compare pixels via an offscreen canvas is not possible on live DOM —
  // instead verify the cone element exists with a real gradient + blur
  const layers = [...sec.querySelectorAll("div[aria-hidden]")].map((d) => {
    const cs = getComputedStyle(d);
    return { clip: cs.clipPath !== "none", blur: cs.filter.includes("blur"), bg: cs.backgroundImage.includes("gradient") };
  });
  return layers.some((l) => l.clip && l.blur && l.bg);
});
check("pricing lamp cone layer present", cone);

// 6. ProductDemo panel: hover straightens the 3D tilt
const demoPanel = page.locator("section:has(img[src*='extension-live-transcript']) .group > div").first();
await demoPanel.scrollIntoViewIfNeeded();
await page.waitForTimeout(600);
const before = await demoPanel.evaluate((el) => getComputedStyle(el).transform);
await demoPanel.hover();
await page.waitForTimeout(900);
const after = await demoPanel.evaluate((el) => getComputedStyle(el).transform);
check("product panel hover straighten", before !== after, `before=${before.slice(0, 30)}… after=${after.slice(0, 30)}…`);

// 7. FAQ opens and closes
const faqItem = page.locator("#faq details").first();
await faqItem.scrollIntoViewIfNeeded();
await faqItem.locator("summary").click();
const opened = await faqItem.evaluate((el) => el.open);
await faqItem.locator("summary").click();
const closed = await faqItem.evaluate((el) => !el.open);
check("FAQ accordion open/close", opened && closed);

// 8. Reduced motion: reveals visible, no animations
const rm = await (await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" })).newPage();
await rm.goto(base, { waitUntil: "networkidle" });
await rm.waitForTimeout(1500);
const rmState = await rm.evaluate(() => {
  const card = document.querySelector("#pricing .paper-float");
  const reveals = [...document.querySelectorAll(".reveal")];
  return {
    floatAnim: getComputedStyle(card).animationName,
    hiddenReveals: reveals.filter((r) => getComputedStyle(r).opacity === "0").length,
  };
});
check("reduced-motion: no float, all visible", rmState.floatAnim === "none" && rmState.hiddenReveals === 0, JSON.stringify(rmState));

console.log(results.join("\n"));
await browser.close();
process.exit(results.some((r) => r.startsWith("FAIL")) ? 1 : 0);
