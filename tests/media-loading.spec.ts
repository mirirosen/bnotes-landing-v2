import { expect, test } from "@playwright/test";

test("only the above-fold hero video mounts on initial load", async ({ page }, testInfo) => {
  await page.goto("/");

  const videos = page.locator("video");
  await expect(videos).toHaveCount(1);

  const expectedSource = testInfo.project.name === "mobile"
    ? "hero-motion-portrait.mp4"
    : "hero-motion-camera-2k.mp4";
  await expect(videos.locator("source")).toHaveAttribute("src", new RegExp(expectedSource));
  await expect(videos).toHaveAttribute("preload", "auto");
});

test("the page keeps motion concentrated in the hero", async ({ page }) => {
  await page.goto("/");
  await page.locator("footer").scrollIntoViewIfNeeded();
  await expect(page.locator("video")).toHaveCount(1);
  await expect(page.locator("video source")).toHaveAttribute(
    "src",
    /hero-motion-(camera-2k|portrait)\.mp4/,
  );
});
