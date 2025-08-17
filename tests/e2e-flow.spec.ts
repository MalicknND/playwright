import { test, expect } from "@playwright/test";

test("Parcours utilisateur complet", async ({ page }) => {
  // Démarrer sur la page d'accueil
  await page.goto("/");
  await expect(page.getByTestId("main-title")).toBeVisible(); // Vérifier que le titre principal est visible

  // Aller voir les produits
  await page.getByTestId("products-link").click(); // Aller voir les produits
  await expect(page.getByTestId("products-title")).toBeVisible(); // Vérifier que le titre des produits est visible

  // Retourner à l'accueil
  await page.goBack(); // Retourner à l'accueil

  // Aller au contact
  await page.getByTestId("contact-link").click(); // Aller au contact

  // Remplir et envoyer le formulaire
  await page.getByTestId("name-input").fill("Marie Dupont"); // Remplir le formulaire
  await page.getByTestId("email-input").fill("marie@test.com"); // Remplir le formulaire
  await page
    .getByTestId("message-input")
    .fill("Je souhaite plus d'informations sur vos assurances"); // Remplir le formulaire

  await page.getByTestId("submit-button").click(); // Soumettre le formulaire

  // Vérifier le succès
  await expect(page.getByTestId("success-message")).toBeVisible(); // Vérifier que le message de succès est visible
});
