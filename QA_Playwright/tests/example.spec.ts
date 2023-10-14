import { test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.locator("#email").fill("itsthakkarpratham@gmail.com");
  await page.waitForTimeout(2000);
  await page.locator("#password").fill("1234");
  await page.waitForTimeout(2000);
  await page.locator("#login-btn").click();
  await page.waitForTimeout(2000);
});
