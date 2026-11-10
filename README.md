# LOriginal — Un regard neuf

Projet réalisé dans le cadre d’un stage avec [LOriginal](https://www.loriginal.org/fr). Le travail initial consistait, pour l’entrevue de stage, à repérer des problèmes sur leur site web et à proposer des améliorations. Ce site a été créé avec Codex pour apprendre à maîtriser l’outil pendant le stage.

Interface française sur fond basalte, accents rouge feu, typographies DM Sans et Instrument Serif auto-hébergées et navigation responsive.

## Démarrer

Node.js **22 ou supérieur** et npm sont nécessaires (validé avec Node.js 24). Depuis le dossier du dépôt :

```sh
npm ci
npm run dev
```

Le serveur de développement utilise le port 3000. Aucune clé API, base de données ou variable d’environnement n’est nécessaire. Si le répertoire de cache npm par défaut n’est pas accessible dans un environnement isolé, utiliser `npm --cache /tmp/loriginal-npm-cache ci`.

Pour la production :

```sh
npm run build
npm run start
```

## Les quatre pages

| Route            | Contenu                                                                      |
| ---------------- | ---------------------------------------------------------------------------- |
| `/`              | Présentation, motivations, démarche et aperçu des constats                   |
| `/anomalies`     | 17 constats, recherche, catégories et modales de détails          |
| `/ameliorations` | Six axes d’amélioration, liés aux constats concernés, avec pistes dépliables |
| `/technologies`  | Codex, Next.js, React, TypeScript et CSS                       |

Les fiches sont partageables par URL : `/anomalies?anomalie=prix-incoherents`. Une modale présente le problème, la page concernée et une piste de correction. Fermeture par bouton, touche Échap ou clic sur l’arrière-plan. Les filtres restent en place après fermeture.

## Contenu de l’audit et captures

Toutes les données sont centralisées dans **`lib/audit-data.ts`**. Les 17 constats sont numérotés de 1 à 17, sans saut. L’absence de pagination des peintures et des artistes est regroupée dans un même constat. Les liens partagés vers l’ancien constat des artistes ouvrent cette fiche commune.

Les visuels explicatifs s’inspirent des captures fournies pour montrer les problèmes et les pistes de correction. Les liens des pages concernées sont renseignés dans chaque fiche. Pour ajouter des captures à la galerie :

1. Déposer les images dans `public/audit/` avec des noms descriptifs.
2. Renseigner `screenshots` pour le constat correspondant dans `lib/audit-data.ts` :

```ts
screenshots: [
  {
    src: "/audit/prix-catalogue.png",
    alt: "Description précise du contenu visible dans la capture",
    caption: "Page et contexte du relevé, avec sa date",
  },
],
```

La galerie affiche automatiquement ces captures à la place du schéma dans la modale. Plusieurs images par constat sont prises en charge. Les cartes conservent leur schéma de synthèse. Vérifier et masquer toute donnée personnelle avant l’ajout d’une image.

## Vérifier

```sh
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

Playwright vérifie les parcours sur ordinateur et mobile : navigation, 17 constats et numérotation, recherche, combinaisons de filtres, modales, liens directs, focus clavier, détails des améliorations et absence de débordement horizontal.

Le navigateur Chromium système est utilisé s’il existe dans `/usr/bin/chromium`. Sinon, l’installer avec `npx playwright install chromium`, ou définir `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` vers un navigateur compatible. Les tests démarrent un serveur de développement si aucun serveur n’utilise déjà le port 3000; pour vérifier la production, lancer préalablement `npm run build` puis `npm run start` dans un autre terminal.

## Structure

```text
app/                         Pages, layout, styles et icône
components/                  Navigation, filtres, modale et illustrations
lib/audit-data.ts            Constats et propositions typés
public/audit/                Captures et ressources de l’audit
tests/site.spec.ts           Parcours Playwright
```

Next.js 16 et React 19 sont installés avec TypeScript strict. Les pages de présentation sont pré-rendues; les interactions utilisent des composants React côté client. Les données sont locales : aucune modification n’est envoyée au site audité.

Chaque tâche infonuagique possède déjà un environnement isolé : réutiliser le checkout existant, sans créer de worktree sauf demande explicite.
