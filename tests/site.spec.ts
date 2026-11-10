import { expect, test, type Page } from "@playwright/test";
import { anomalies } from "../lib/audit-data";

async function openNavigation(page: Page) {
  const menu = page.getByRole("button", {
    name: "Ouvrir la navigation",
    exact: true,
  });
  if (await menu.isVisible()) await menu.click();
}

test("les quatre pages sont accessibles depuis la navigation principale", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator("main h1")).toContainText("Un regard neuf");

  for (const [name, path] of [
    ["Les anomalies", "/anomalies"],
    ["Les améliorations", "/ameliorations"],
    ["Les technologies", "/technologies"],
    ["Vue d’ensemble", "/"],
  ]) {
    await openNavigation(page);
    await page
      .getByRole("navigation", { name: "Navigation principale" })
      .getByRole("link", { name: new RegExp(name) })
      .click();
    await expect(page).toHaveURL(
      new RegExp(`${path === "/" ? "/$" : `${path}$`}`),
    );
    await expect(page.locator("main h1")).toBeVisible();
    // Le menu mobile est refermé et retiré de l'arbre d'accessibilité après
    // navigation. L'attribut d'état demeure vérifiable dans le DOM.
    await expect(
      page.locator("nav a").filter({ hasText: name }),
    ).toHaveAttribute("aria-current", "page");
  }
  expect(errors).toEqual([]);
});

test("les vingt constats conservent la numérotation originale", async ({
  page,
}) => {
  const expectedNumbers = [
    1, 2, 5, 7, 8, 9, 11, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  ];
  expect(anomalies.map((item) => Number(item.number))).toEqual(expectedNumbers);
  await page.goto("/anomalies");
  await expect(page.locator(".anomaly-card")).toHaveCount(20);
  const numbers = await page.locator(".visual-number").allTextContents();
  expect(numbers.map((number) => Number(number.replace(/\D/g, "")))).toEqual(
    expectedNumbers,
  );
});

test("la recherche, son état vide et la réinitialisation fonctionnent", async ({
  page,
}) => {
  await page.goto("/anomalies");
  const search = page.getByRole("searchbox", {
    name: "Rechercher une anomalie",
  });
  await search.fill("millions");
  await expect(page.locator(".anomaly-card")).toHaveCount(1);
  await expect(page.locator(".anomaly-card")).toContainText(/prix/i);
  await search.fill("aucun-resultat-inexistant-xyz");
  await expect(page.locator(".anomaly-card")).toHaveCount(0);
  await expect(page.locator(".empty-state")).toBeVisible();
  await page
    .getByRole("button", { name: /Réinitialiser les filtres/i })
    .click();
  await expect(search).toHaveValue("");
  await expect(page.locator(".anomaly-card")).toHaveCount(20);
});

test("catégorie et priorité se combinent sans perdre le filtre", async ({
  page,
}) => {
  await page.goto("/anomalies");
  const filters = page.getByRole("group", {
    name: "Filtrer les anomalies par catégorie",
  });
  await filters
    .getByRole("button", { name: "Formulaires", exact: true })
    .click();
  await expect(page.locator(".anomaly-card")).toHaveCount(2);
  await page
    .getByRole("combobox", { name: "Filtrer par priorité" })
    .selectOption("Élevée");
  await expect(page.locator(".anomaly-card")).toHaveCount(1);
  await expect(page.locator(".anomaly-card")).toContainText(
    /location|validation/i,
  );
  await expect(
    filters.getByRole("button", { name: "Formulaires", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
});

test("une fiche ouvre une modale accessible avec illustration et navigation", async ({
  page,
}) => {
  await page.goto("/anomalies");
  const firstCard = page.locator(".anomaly-card").first();
  const firstTitle = await firstCard.locator("h2").innerText();
  await firstCard.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("heading", { level: 2 })).toHaveText(
    firstTitle,
  );
  await expect(dialog.locator(".modal-image").getByRole("img")).toBeVisible();
  await expect(dialog.locator(".image-caption")).toContainText(
    /illustration|capture/i,
  );
  await expect(
    dialog.getByRole("button", { name: "Précédent", exact: true }),
  ).toBeDisabled();
  await dialog.getByRole("button", { name: "Suivant", exact: true }).click();
  await expect(
    page.getByRole("dialog").getByRole("heading", { level: 2 }),
  ).not.toHaveText(firstTitle);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(page).toHaveURL(/\/anomalies$/);
});

test("fermer une modale restitue le focus à la fiche activée", async ({
  page,
}) => {
  await page.goto("/anomalies");
  const card = page.locator(".anomaly-card").first();
  await card.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("dialog")).toBeVisible();
  await page
    .getByRole("button", { name: "Fermer les détails", exact: true })
    .click();
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(card).toBeFocused();
});

test("un lien direct ouvre le bon constat et un identifiant inconnu reste récupérable", async ({
  page,
}) => {
  await page.goto(`/anomalies?anomalie=${encodeURIComponent(anomalies[0].id)}`);
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(
    page.getByRole("dialog").getByRole("heading", { level: 2 }),
  ).toHaveText(anomalies[0].title);
  await page
    .getByRole("button", { name: "Fermer les détails", exact: true })
    .click();
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await page.goto("/anomalies?anomalie=inconnu-xyz");
  await expect(page.getByText("Cette fiche n’existe pas.")).toBeVisible();
  await page.getByRole("button", { name: /Revenir à la liste/i }).click();
  await expect(page).toHaveURL(/\/anomalies$/);
  await expect(page.locator(".anomaly-card")).toHaveCount(20);
});

test("les améliorations se filtrent et leurs détails sont dépliables", async ({
  page,
}) => {
  await page.goto("/ameliorations");
  await expect(page.locator(".improvement-card")).toHaveCount(6);
  const filters = page.getByRole("group", {
    name: "Filtrer les améliorations par catégorie",
  });
  await filters.getByRole("button", { name: "Images", exact: true }).click();
  await expect(page.locator(".improvement-card")).toHaveCount(1);
  const card = page.locator(".improvement-card");
  const details = card.locator("details");
  await details.locator("summary").click();
  await expect(details).toHaveAttribute("open", "");
  await expect(details.locator("li").first()).toBeVisible();
  await details.locator("summary").click();
  await expect(details).not.toHaveAttribute("open", "");
  await filters.getByRole("button", { name: "Tous", exact: true }).click();
  await expect(page.locator(".improvement-card")).toHaveCount(6);
});

test("aucune page ne déborde horizontalement et les liens externes sont sécurisés", async ({
  page,
}) => {
  for (const route of ["/", "/anomalies", "/ameliorations", "/technologies"]) {
    await page.goto(route);
    await expect(page.locator("main h1")).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
    }));
    expect(dimensions.document, route).toBeLessThanOrEqual(
      dimensions.viewport + 1,
    );
    for (const link of await page.locator('a[target="_blank"]').all()) {
      await expect(link).toHaveAttribute("rel", /noopener/);
      await expect(link).toHaveAttribute("rel", /noreferrer/);
    }
  }
});
