import { test, expect } from "@playwright/test";

test("Parcours utilisateur complet", async ({ page }) => {
  // Démarrer sur la page d'accueil
  await page.goto("/");
  await expect(page.getByTestId("main-title")).toBeVisible();

  // Aller voir les produits
  await page.getByTestId("products-link").click();
  await expect(page.getByTestId("products-title")).toBeVisible();

  // Retourner à l'accueil
  await page.goBack();

  // Aller au contact
  await page.getByTestId("contact-link").click();

  // Remplir et envoyer le formulaire
  await page.getByTestId("name-input").fill("Marie Dupont");
  await page.getByTestId("email-input").fill("marie@test.com");
  await page
    .getByTestId("message-input")
    .fill("Je souhaite plus d'informations sur vos assurances");

  await page.getByTestId("submit-button").click();

  // Vérifier le succès
  await expect(page.getByTestId("success-message")).toBeVisible();
});
