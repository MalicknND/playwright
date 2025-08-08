import { test, expect } from "@playwright/test";

test("Page produits affiche les assurances", async ({ page }) => {
  await page.goto("/products");

  // Vérifier le titre
  await expect(page.getByTestId("products-title")).toHaveText(
    "Nos Produits d'Assurance"
  );

  // Vérifier que les 3 produits sont affichés
  await expect(page.getByTestId("product-1")).toBeVisible();
  await expect(page.getByTestId("product-2")).toBeVisible();
  await expect(page.getByTestId("product-3")).toBeVisible();
});

test("Boutons de souscription sont présents", async ({ page }) => {
  await page.goto("/products");

  // Vérifier les boutons de souscription
  await expect(page.getByTestId("buy-1")).toBeVisible();
  await expect(page.getByTestId("buy-2")).toBeVisible();
  await expect(page.getByTestId("buy-3")).toBeVisible();

  // Tester le clic sur un bouton (ici juste vérifier qu'il est cliquable)
  await page.getByTestId("buy-1").click();
});
