import { expect, test } from "@playwright/test";

// Playwright 1.61 moved reducedMotion into contextOptions.
test.use({ contextOptions: { reducedMotion: "reduce" } });

test("decorative motion is disabled", async ({ page }) => {
  await page.goto("/");
  const runningAnimations = await page.evaluate(() => {
    const running: string[] = [];
    for (const el of document.querySelectorAll<HTMLElement>("*")) {
      if (el.offsetParent === null) continue;
      const style = getComputedStyle(el);
      if (style.animationName !== "none") {
        const duration = parseFloat(style.animationDuration) || 0;
        // globals.css clamps animation-duration to 0.001ms under reduced motion;
        // HeroVisual.module.css removes its animations entirely.
        if (duration > 0.01) {
          running.push(`${el.tagName.toLowerCase()}.${String(el.className).split(" ")[0]} ${style.animationName} ${style.animationDuration}`);
        }
      }
    }
    return running;
  });
  expect(runningAnimations).toEqual([]);
});

test("transformation content is fully visible without animation", async ({
  page,
  viewport,
}) => {
  await page.goto("/");
  const isMobile = (viewport?.width ?? 0) < 768;
  if (isMobile) {
    // Mobile reduced-motion shows the static three-state flow.
    const staticFlow = page.locator('[class*="staticRoot"]').first();
    await expect(staticFlow).toBeVisible();
    // Scope to the static flow: the same label text also exists in the
    // hidden desktop flow bar, which getByText would match first.
    await expect(
      staticFlow.getByText("הרצאה אונליין", { exact: true }).first(),
    ).toBeVisible();
  } else {
    // Desktop reduced-motion shows the cinematic frame at rest.
    const stage = page.locator('[class*="animatedRoot"]').first();
    await expect(stage).toBeVisible();
    // The generated frame must be present (background-image applied) and the
    // flow labels at full opacity with no animation dependence.
    const frame = stage.locator('[class*="sceneFrame"]').first();
    await expect(frame).toBeVisible();
    const bg = await frame.evaluate((el) => getComputedStyle(el).backgroundImage);
    expect(bg).toContain("hero-frame");
    const flow = stage.locator('[class*="flowBar"]').first();
    await expect(flow).toBeVisible();
    const opacity = await flow.evaluate((el) => getComputedStyle(el).opacity);
    expect(parseFloat(opacity)).toBe(1);
  }
});

test("scroll behavior is instant under reduced motion", async ({ page }) => {
  await page.goto("/");
  const behavior = await page.evaluate(
    () => getComputedStyle(document.documentElement).scrollBehavior,
  );
  expect(behavior).toBe("auto");
});

test("no content is hidden behind animation completion", async ({ page }) => {
  await page.goto("/");
  // Every section heading must be visible when scrolled to, immediately.
  for (const id of ["#how-it-works", "#pricing", "#faq"]) {
    await page.evaluate((sel) => {
      document.querySelector(sel)!.scrollIntoView();
    }, id);
    const heading = page.locator(`${id} h2`).first();
    await expect(heading).toBeVisible();
    const opacity = await heading.evaluate((el) => getComputedStyle(el).opacity);
    expect(parseFloat(opacity)).toBeGreaterThan(0.99);
  }
});

test("reduced motion never mounts decorative videos", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("video")).toHaveCount(0);
});
