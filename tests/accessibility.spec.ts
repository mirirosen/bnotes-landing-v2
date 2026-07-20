import { expect, test } from "@playwright/test";

test("landmarks: header, main, footer, labelled nav", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("header")).toHaveCount(1);
  await expect(page.locator("main#main")).toHaveCount(1);
  await expect(page.locator("footer")).toHaveCount(1);
  const labelledNavs = page.locator("nav[aria-label]");
  expect(await labelledNavs.count()).toBeGreaterThanOrEqual(1);
});

test("heading hierarchy has no skipped levels", async ({ page }) => {
  await page.goto("/");
  const levels = await page.evaluate(() =>
    [...document.querySelectorAll("h1, h2, h3, h4, h5, h6")]
      .filter((el) => (el as HTMLElement).offsetParent !== null)
      .map((el) => Number(el.tagName[1])),
  );
  expect(levels[0]).toBe(1);
  for (let i = 1; i < levels.length; i++) {
    expect(
      levels[i] - levels[i - 1],
      `heading level jump at index ${i}: h${levels[i - 1]} -> h${levels[i]}`,
    ).toBeLessThanOrEqual(1);
  }
});

test("skip link jumps to main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "דילוג לתוכן הראשי" });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
});

test("keyboard tab order reaches CTA, nav, and FAQ", async ({ page }, testInfo) => {
  await page.goto("/");
  const reached: string[] = [];
  for (let i = 0; i < 40; i++) {
    await page.keyboard.press("Tab");
    const info = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null;
      if (!el || el === document.body) return null;
      return `${el.tagName.toLowerCase()}:${(el.getAttribute("aria-label") ?? el.textContent ?? "").trim().slice(0, 40)}`;
    });
    if (info) reached.push(info);
  }
  const joined = reached.join("\n");
  expect(joined).toContain("התקינו את B Notes");
  if (testInfo.project.name === "mobile") {
    expect(joined).toContain("פתיחת תפריט");
  }
  expect(joined).toMatch(/summary:/);
});

test("focus is visible on interactive elements", async ({ page }) => {
  await page.goto("/");
  const selectors = ['header a', '#faq summary'];
  for (const selector of selectors) {
    const el = page.locator(selector).first();
    await el.focus();
    const hasIndicator = await el.evaluate((node) => {
      const style = getComputedStyle(node);
      const outlineVisible =
        style.outlineStyle !== "none" && parseFloat(style.outlineWidth) > 0;
      const shadowVisible = style.boxShadow !== "none";
      return outlineVisible || shadowVisible;
    });
    expect(hasIndicator, `no focus indicator on ${selector}`).toBe(true);
  }
});

test("no information conveyed by color alone in trust line", async ({ page }) => {
  await page.goto("/");
  // Trust line must be real text (readable without color perception).
  const trust = page.getByRole("note").first();
  const text = (await trust.innerText()).replace(/\s+/g, " ");
  expect(text).toContain("₪23.90");
  expect(text).toContain("ביטול בכל עת");
});

test("hero visual has a text alternative", async ({ page }) => {
  await page.goto("/");
  const srOnly = page.locator("main .sr-only", { hasText: "איור" });
  await expect(srOnly).toHaveCount(1);
});
