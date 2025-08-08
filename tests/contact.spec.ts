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
  await page.getByTestId("name-input").fill("John Doe");
  await page.getByTestId("email-input").fill("john@example.com");
  await page.getByTestId("message-input").fill("Message de test");

  // Soumettre
  await page.getByTestId("submit-button").click();

  // Vérifier le message de succès
  await expect(page.getByTestId("success-message")).toBeVisible();
  await expect(page.getByTestId("success-message")).toHaveText(
    "Message envoyé avec succès !"
  );
});

test("Validation du formulaire", async ({ page }) => {
  await page.goto("/contact");

  // Essayer de soumettre un formulaire vide
  await page.getByTestId("submit-button").click();

  // Le navigateur devrait empêcher la soumission (validation HTML5)
  await expect(page.getByTestId("success-message")).not.toBeVisible();
});
