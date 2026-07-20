import { expect, test } from "@playwright/test";

test("the landing page stays concise", async ({ page, viewport }) => {
  await page.goto("/");

  await expect(page.locator("main > section")).toHaveCount(4);
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const viewportHeight = viewport?.height ?? 900;
  const maximumScreens = (viewport?.width ?? 0) < 768 ? 6.5 : 4.5;

  expect(pageHeight / viewportHeight).toBeLessThanOrEqual(maximumScreens);
});

test("no horizontal overflow", async ({ page, viewport }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  const metrics = await page.evaluate(() => ({
    docScrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
    innerWidth: window.innerWidth,
  }));
  expect(metrics.docScrollWidth).toBeLessThanOrEqual(metrics.innerWidth + 1);
  expect(metrics.bodyScrollWidth).toBeLessThanOrEqual(metrics.innerWidth + 1);

  // Even with body overflow-x hidden, no element should extend past the viewport.
  const offenders = await page.evaluate(() => {
    const bad: string[] = [];
    const width = window.innerWidth;
    for (const el of document.body.querySelectorAll("*")) {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0) continue;
      if (rect.right > width + 2 || rect.left < -2) {
        const cls = typeof el.className === "string" ? el.className : "";
        bad.push(`${el.tagName.toLowerCase()}.${cls.split(" ")[0]} right=${Math.round(rect.right)} left=${Math.round(rect.left)}`);
      }
      if (bad.length > 10) break;
    }
    return bad;
  });
  expect(offenders, `elements outside viewport ${viewport?.width}px`).toEqual([]);
});

test("no fixed or sticky element breaks the viewport", async ({ page }) => {
  await page.goto("/");
  const broken = await page.evaluate(() => {
    const bad: string[] = [];
    for (const el of document.querySelectorAll("*")) {
      const style = getComputedStyle(el);
      if (style.position !== "fixed" && style.position !== "sticky") continue;
      const rect = el.getBoundingClientRect();
      if (rect.width > window.innerWidth + 2 || rect.height > window.innerHeight + 2) {
        bad.push(el.tagName.toLowerCase());
      }
    }
    return bad;
  });
  expect(broken).toEqual([]);
});

test("interactive touch targets are ~44px where practical", async ({
  page,
  viewport,
}) => {
  test.skip((viewport?.width ?? 0) >= 1024, "touch-target check is for mobile");
  await page.goto("/");
  const small = await page.evaluate(() => {
    const bad: string[] = [];
    const controls = document.querySelectorAll<HTMLElement>(
      "header a, header button, summary, main a",
    );
    for (const el of controls) {
      const rect = el.getBoundingClientRect();
      if (rect.height === 0) continue; // hidden at this viewport
      if (rect.height < 40) {
        bad.push(`${el.tagName.toLowerCase()} "${(el.textContent ?? "").trim().slice(0, 30)}" h=${Math.round(rect.height)}`);
      }
    }
    return bad;
  });
  expect(small).toEqual([]);
});

test("meaningful part of the hero transformation is within the mobile fold", async ({
  page,
  viewport,
}) => {
  test.skip((viewport?.width ?? 0) >= 768, "mobile-fold check");
  await page.goto("/");
  // The mobile transformation scene and its story labels ("הרצאה אונליין")
  // must start inside the initial 844px viewport.
  const scene = page.locator('[class*="mobileScene"]').first();
  await expect(scene).toBeVisible();
  const box = await scene.boundingBox();
  expect(box).not.toBeNull();
  expect(box!.y).toBeLessThan(844);
  const flowLabel = scene.getByText("הרצאה אונליין", { exact: true });
  await expect(flowLabel).toBeVisible();
  const flowBox = await flowLabel.boundingBox();
  expect(flowBox).not.toBeNull();
  expect(flowBox!.y + flowBox!.height).toBeLessThanOrEqual(844);
});

test("navigation remains usable at intermediate widths", async ({ page }) => {
  for (const width of [1280, 1024, 900, 768, 640]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const desktopNavVisible = await page
      .locator('header nav[aria-label="ניווט ראשי"]')
      .isVisible();
    const triggerVisible = await page
      .getByRole("button", { name: "פתיחת תפריט" })
      .isVisible();
    expect(
      desktopNavVisible || triggerVisible,
      `no usable navigation at ${width}px`,
    ).toBe(true);
    // Header CTA must remain visible at every width.
    const headerCta = page.locator("header .header-cta");
    await expect(headerCta, `header CTA hidden at ${width}px`).toBeVisible();
  }
});

test("long Hebrew text wraps without clipping", async ({ page }) => {
  await page.goto("/");
  const clipped = await page.evaluate(() => {
    const bad: string[] = [];
    for (const el of document.querySelectorAll<HTMLElement>("h1, h2, h3, p")) {
      // Skip decorative/hidden elements.
      if (el.offsetParent === null) continue;
      // Skip visually-hidden (sr-only) elements: they are 1×1 with overflow
      // hidden by design, which is intentional clipping, not a layout bug.
      const rect = el.getBoundingClientRect();
      if (rect.width <= 1 || rect.height <= 1) continue;
      if (el.scrollWidth > el.clientWidth + 2) {
        bad.push(`${el.tagName.toLowerCase()} "${(el.textContent ?? "").trim().slice(0, 40)}"`);
      }
    }
    return bad;
  });
  expect(clipped).toEqual([]);
});
