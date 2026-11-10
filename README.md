# LOriginal — Un regard neuf

Site indépendant présentant l’audit de [loriginal.org/fr](https://www.loriginal.org/fr), réalisé et fourni par l’auteur du projet le **9 novembre 2026**. L’objectif : documenter les points de friction et proposer une expérience plus claire, accessible et agréable. Ce projet n’est pas affilié à LOriginal.

Interface française aux tons basalte et aux accents citron, typographies DM Sans et Instrument Serif auto-hébergées, navigation responsive et animations respectant les préférences de mouvement réduit.

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
| `/anomalies`     | 20 constats, recherche, filtres combinés, tri et modales de détails          |
| `/ameliorations` | Six axes d’amélioration, liés aux constats concernés, avec pistes dépliables |
| `/technologies`  | Next.js, React, TypeScript, CSS et structure du projet                       |

Les fiches sont partageables par URL : `/anomalies?anomalie=prix-incoherents`. Une modale comporte le contexte, le résultat attendu, l’impact potentiel, les vérifications et la correction proposée. Fermeture par bouton, touche Échap ou clic sur l’arrière-plan. Les filtres restent en place après fermeture.

## Contenu de l’audit et captures

Toutes les données sont centralisées dans **`lib/audit-data.ts`**. Les 20 numéros originaux sont préservés : 1, 2, 5, 7, 8, 9, 11, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 et 26. Les points retirés n’ont pas été réintroduits.

Les constats sont attribués au relevé fourni par l’auteur, et ne constituent pas une reproduction indépendante des tests. Les statuts distinguent observations rapportées, points à vérifier, précisions nécessaires et suggestions UX. Les priorités ainsi que les estimations d’effort et d’impact sont indicatives. Les pages sources sont nommées sans inventer d’adresses de sous-pages.

**Aucune capture du site n’a été fournie.** Les visuels intégrés sont des schémas explicatifs SVG, clairement identifiés comme tels. Pour ajouter les vraies captures :

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

Playwright vérifie les parcours sur ordinateur et mobile : navigation, 20 constats et numérotation, recherche, combinaisons de filtres, modales, liens directs, focus clavier, détails des améliorations et absence de débordement horizontal.

Le navigateur Chromium système est utilisé s’il existe dans `/usr/bin/chromium`. Sinon, l’installer avec `npx playwright install chromium`, ou définir `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` vers un navigateur compatible. Les tests démarrent un serveur de développement si aucun serveur n’utilise déjà le port 3000; pour vérifier la production, lancer préalablement `npm run build` puis `npm run start` dans un autre terminal.

## Structure

```text
app/                         Pages, layout, styles et icône
components/                  Navigation, filtres, modale et illustrations
lib/audit-data.ts            Constats et propositions typés
public/audit/                Captures réelles à ajouter
tests/site.spec.ts           Parcours Playwright
```

Next.js 16 et React 19 sont installés avec TypeScript strict. Les pages de présentation sont pré-rendues; les interactions utilisent des composants React côté client. Les données sont locales : aucune modification n’est envoyée au site audité.

Chaque tâche infonuagique possède déjà un environnement isolé : réutiliser le checkout existant, sans créer de worktree sauf demande explicite.
