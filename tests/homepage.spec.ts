import { test, expect } from "@playwright/test";

test("Page d'accueil se charge correctement", async ({ page }) => {
  await page.goto("/");

  // Vérifier le titre
  await expect(page.getByTestId("main-title")).toHaveText("Mon App de Test");

  // Vérifier la présence des liens
  await expect(page.getByTestId("contact-link")).toBeVisible();
  await expect(page.getByTestId("products-link")).toBeVisible();
});

test("Navigation vers les pages", async ({ page }) => {
  await page.goto("/");

  // Tester navigation vers contact
  await page.getByTestId("contact-link").click();
  await expect(page.getByTestId("contact-title")).toBeVisible();

  // Retour à l'accueil
  await page.goBack();

  // Tester navigation vers produits
  await page.getByTestId("products-link").click();
  await expect(page.getByTestId("products-title")).toBeVisible();
});
