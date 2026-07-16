import { expect, test } from "@playwright/test";

// Reduced motion makes anchor scrolling instant (globals.css switches
// scroll-behavior to auto), which keeps position assertions deterministic.
// (Playwright 1.61 moved reducedMotion into contextOptions.)
test.use({ contextOptions: { reducedMotion: "reduce" } });

const NAV_ITEMS = [
  { href: "#how-it-works", label: "איך זה עובד" },
  { href: "#pricing", label: "מחיר" },
  { href: "#faq", label: "שאלות" },
];

test.describe("desktop navigation", () => {
  test.skip(({ viewport }) => (viewport?.width ?? 0) < 1024, "desktop-only");

  test("nav links scroll to sections not hidden by the sticky header", async ({
    page,
  }) => {
    await page.goto("/");
    for (const item of NAV_ITEMS) {
      await page
        .locator("header")
        .getByRole("link", { name: item.label, exact: true })
        .click();
      await page.waitForTimeout(150);
      const { sectionTop, headerBottom } = await page.evaluate((selector) => {
        const section = document.querySelector(selector)!;
        const header = document.querySelector("header")!;
        return {
          sectionTop: section.getBoundingClientRect().top,
          headerBottom: header.getBoundingClientRect().bottom,
        };
      }, item.href);
      // The section heading must start below the sticky header, not underneath it.
      expect(
        sectionTop,
        `${item.href} should not be hidden by the sticky header`,
      ).toBeGreaterThanOrEqual(headerBottom - 1);
    }
  });
});

test.describe("mobile menu", () => {
  test.skip(({ viewport }) => (viewport?.width ?? 0) >= 1024, "mobile-only");

  test("opens, closes, and navigates", async ({ page }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "פתיחת תפריט" });
    await expect(trigger).toBeVisible();
    await trigger.click();

    const menu = page.locator("nav#" + (await getPanelId(page)));
    await expect(menu).toBeVisible();
    for (const item of NAV_ITEMS) {
      await expect(
        menu.getByRole("link", { name: item.label, exact: true }),
      ).toBeVisible();
    }

    // Clicking a link closes the menu and reaches the section.
    await menu.getByRole("link", { name: "מחיר", exact: true }).click();
    await expect(menu).not.toBeVisible();
    await page.waitForTimeout(150);
    const pricingVisible = await page.evaluate(() => {
      const rect = document.querySelector("#pricing")!.getBoundingClientRect();
      const header = document.querySelector("header")!.getBoundingClientRect();
      return rect.top >= header.bottom - 1 && rect.top < window.innerHeight;
    });
    expect(pricingVisible).toBe(true);
  });

  test("Escape closes the menu and focus returns to the trigger", async ({
    page,
  }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "פתיחת תפריט" });
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");

    // Focus can move into the menu.
    await page.keyboard.press("Tab");
    const focusInMenu = await page.evaluate(() => {
      const active = document.activeElement;
      return Boolean(
        active?.closest("nav") ||
          active?.getAttribute("aria-label") === "סגירת תפריט",
      );
    });
    expect(focusInMenu).toBe(true);

    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    // Focus must return to the trigger — not fall back to <body>.
    await expect(trigger).toBeFocused();
  });

  test("backdrop click closes the menu", async ({ page }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "פתיחת תפריט" });
    await trigger.click();
    const backdrop = page.getByRole("button", { name: "סגירת תפריט" }).first();
    await expect(backdrop).toBeVisible();
    await backdrop.click({ position: { x: 10, y: 400 } });
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
});

async function getPanelId(page: import("@playwright/test").Page): Promise<string> {
  const id = await page
    .getByRole("button", { name: /תפריט/ })
    .first()
    .getAttribute("aria-controls");
  if (!id) throw new Error("mobile menu trigger has no aria-controls");
  // useId() produces ids with characters CSS selectors need escaped.
  return CSS_ESCAPE(id);
}

function CSS_ESCAPE(value: string): string {
  return value.replace(/[^a-zA-Z0-9_-]/g, (ch) => `\\${ch}`);
}
