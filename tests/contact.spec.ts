import { test, expect } from "@playwright/test";

test("Formulaire de contact fonctionne", async ({ page }) => {
  await page.goto("/contact");

  // Vérifier les éléments du formulaire
  await expect(page.getByTestId("name-input")).toBeVisible();
  await expect(page.getByTestId("email-input")).toBeVisible();
  await expect(page.getByTestId("message-input")).toBeVisible();
  await expect(page.getByTestId("submit-button")).toBeVisible();
});

test("Soumission du formulaire", async ({ page }) => {
  await page.goto("/contact");

  // Remplir le formulaire
  await page.getByTestId("name-input").fill("John Doe"); // Remplacer par le nom de l'utilisateur
  await page.getByTestId("email-input").fill("john@example.com"); // Remplacer par l'email de l'utilisateur
  await page.getByTestId("message-input").fill("Message de test"); // Remplacer par le message de l'utilisateur

  // Soumettre
  await page.getByTestId("submit-button").click(); // Soumettre le formulaire

  // Vérifier le message de succès
  await expect(page.getByTestId("success-message")).toBeVisible(); // Vérifier que le message de succès est visible
  await expect(page.getByTestId("success-message")).toHaveText(
    "Message envoyé avec succès !" // Vérifier que le message de succès est correct
  );
});

test("Validation du formulaire", async ({ page }) => {
  await page.goto("/contact"); // Aller sur la page de contact

  // Essayer de soumettre un formulaire vide
  await page.getByTestId("submit-button").click(); // Soumettre le formulaire

  // Le navigateur devrait empêcher la soumission (validation HTML5)
  await expect(page.getByTestId("success-message")).not.toBeVisible(); // Vérifier que le message de succès n'est pas visible
});
