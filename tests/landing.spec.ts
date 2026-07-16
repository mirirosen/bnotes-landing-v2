import { expect, test } from "@playwright/test";
import { CHROME_STORE_URL, collectPageIssues, hydrationErrors } from "./helpers";

test.describe("document and metadata", () => {
  test("html lang/dir, title, description, viewport", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("lang", "he");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");

    await expect(page).toHaveTitle(/B Notes/);
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute("content", /.+/);

    const viewport = await page
      .locator('meta[name="viewport"]')
      .getAttribute("content");
    expect(viewport).toContain("width=device-width");
    expect(viewport).toContain("initial-scale=1");
  });

  test("exactly one visible h1", async ({ page }) => {
    await page.goto("/");
    const headings = page.locator("h1");
    await expect(headings).toHaveCount(1);
    await expect(headings.first()).toBeVisible();
    await expect(headings.first()).toHaveText("ההרצאה מתקדמת. החומר כבר מתארגן.");
  });

  test("no duplicate element ids", async ({ page }) => {
    await page.goto("/");
    const duplicates = await page.evaluate(() => {
      const seen = new Map<string, number>();
      for (const el of document.querySelectorAll("[id]")) {
        seen.set(el.id, (seen.get(el.id) ?? 0) + 1);
      }
      return [...seen.entries()].filter(([, n]) => n > 1).map(([id]) => id);
    });
    expect(duplicates).toEqual([]);
  });

  test("all images have alternative text", async ({ page }) => {
    await page.goto("/");
    const missingAlt = await page.evaluate(() =>
      [...document.querySelectorAll("img")]
        .filter((img) => !img.hasAttribute("alt"))
        .map((img) => img.src),
    );
    expect(missingAlt).toEqual([]);
  });

  test("no broken internal anchor targets", async ({ page }) => {
    await page.goto("/");
    const broken = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')]
        .map((a) => a.getAttribute("href")!)
        // A bare "#" is a valid scroll-to-top link.
        .filter((href) => href !== "#" && !document.querySelector(href)),
    );
    expect(broken).toEqual([]);
  });
});

test.describe("primary CTA", () => {
  test("hero CTA above the fold with correct name and URL", async ({ page }, testInfo) => {
    await page.goto("/");
    const heroCta = page
      .locator("main")
      .getByRole("link", { name: /התקינו את B Notes ב־Chrome/ })
      .first();
    await expect(heroCta).toBeVisible();
    await expect(heroCta).toHaveAttribute("href", CHROME_STORE_URL);
    await expect(heroCta).toHaveAttribute("target", "_blank");
    await expect(heroCta).toHaveAttribute("rel", /noopener/);

    const box = await heroCta.boundingBox();
    expect(box).not.toBeNull();
    const foldHeight = testInfo.project.name === "mobile" ? 844 : 900;
    expect(box!.y + box!.height).toBeLessThanOrEqual(foldHeight);
  });

  test("header CTA present and correct", async ({ page }, testInfo) => {
    await page.goto("/");
    const label =
      testInfo.project.name === "mobile" ? "התקנה" : /התקינו את B Notes ב־Chrome/;
    const headerCta = page.locator("header").getByRole("link", { name: label });
    await expect(headerCta).toBeVisible();
    await expect(headerCta).toHaveAttribute("href", CHROME_STORE_URL);
  });

  test("CTA keyboard focus is visible", async ({ page }) => {
    await page.goto("/");
    const heroCta = page
      .locator("main")
      .getByRole("link", { name: /התקינו את B Notes ב־Chrome/ })
      .first();
    await heroCta.focus();
    const outline = await heroCta.evaluate((el) => {
      const style = getComputedStyle(el);
      return { width: style.outlineWidth, style: style.outlineStyle };
    });
    expect(outline.style).not.toBe("none");
    expect(parseFloat(outline.width)).toBeGreaterThan(0);
  });

  test("CTA click opens the Chrome Web Store in a new tab", async ({
    page,
    context,
  }) => {
    // Stub the external store so the test does not depend on external network.
    await context.route("**/chromewebstore.google.com/**", (route) =>
      route.fulfill({ status: 200, contentType: "text/html", body: "<html>store</html>" }),
    );
    await page.goto("/");
    const heroCta = page
      .locator("main")
      .getByRole("link", { name: /התקינו את B Notes ב־Chrome/ })
      .first();
    const [popup] = await Promise.all([page.waitForEvent("popup"), heroCta.click()]);
    await popup.waitForLoadState("domcontentloaded");
    expect(popup.url()).toBe(CHROME_STORE_URL);
    await popup.close();
  });
});

test.describe("product content", () => {
  test("no Lectify, correct pricing, illustration disclosure", async ({ page }) => {
    await page.goto("/");
    const bodyText = (await page.locator("body").innerText()).replace(/\s+/g, " ");

    expect(bodyText).not.toContain("Lectify");
    expect(bodyText).toContain("B Notes");
    expect(bodyText).toContain("₪9.90");
    expect(bodyText).toContain("7 ימי התנסות");
    expect(bodyText).toContain("ביטול בכל עת");

    // Honesty contract: the hero scene is described as an illustration for
    // assistive tech, and the real interface is explicitly labeled as real.
    await expect(page.locator('main .sr-only', { hasText: "איור" })).toHaveCount(1);
    await expect(page.getByText("צילום מסך אמיתי מתוך התוסף")).toBeVisible();
  });

  test("no fabricated proof: no ratings, review counts, or user counts", async ({
    page,
  }) => {
    await page.goto("/");
    const bodyText = (await page.locator("body").innerText()).replace(/\s+/g, " ");
    // Patterns that would indicate fabricated social proof.
    expect(bodyText).not.toMatch(/★|⭐/);
    expect(bodyText).not.toMatch(/\d[\d,.]*\s*(משתמשים|התקנות|ביקורות|users|installs|reviews)/i);
    // The product demo section shows the real extension screenshot,
    // explicitly labeled as real (no fabricated demo).
    await expect(
      page.getByRole("img", { name: /ממשק התוסף B Notes/ }),
    ).toBeVisible();
    await expect(page.getByText("צילום מסך אמיתי מתוך התוסף")).toBeVisible();
  });
});

test.describe("FAQ", () => {
  test("FAQ uses details/summary and works with mouse", async ({ page }) => {
    await page.goto("/");
    const firstItem = page.locator("#faq details").first();
    const firstSummary = firstItem.locator("summary");
    await expect(firstItem).not.toHaveAttribute("open", "");
    await firstSummary.click();
    await expect(firstItem).toHaveAttribute("open", "");
    await expect(firstItem.locator("p")).toBeVisible();
    await firstSummary.click();
    await expect(firstItem).not.toHaveAttribute("open", "");
  });

  test("FAQ works with keyboard and exposes expanded state", async ({ page }) => {
    await page.goto("/");
    const firstItem = page.locator("#faq details").first();
    const firstSummary = firstItem.locator("summary");
    await firstSummary.focus();
    await page.keyboard.press("Enter");
    await expect(firstItem).toHaveAttribute("open", "");
    await expect(firstItem.locator("p")).toBeVisible();
    await page.keyboard.press(" ");
    await expect(firstItem).not.toHaveAttribute("open", "");
  });
});

test.describe("console and network", () => {
  test("no uncaught errors, hydration errors, or failed first-party requests", async ({
    page,
  }) => {
    const issues = collectPageIssues(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    // Exercise the page a little so lazy failures surface.
    await page.mouse.wheel(0, 4000);
    await page.waitForTimeout(500);

    expect(issues.pageErrors).toEqual([]);
    expect(hydrationErrors(issues)).toEqual([]);
    expect(issues.consoleErrors).toEqual([]);
    expect(issues.failedFirstPartyRequests).toEqual([]);
  });
});
