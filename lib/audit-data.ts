export type Category =
  "Navigation" | "Contenu" | "Données" | "Formulaires" | "Interface" | "Images";
export type Anomaly = {
  id: string;
  number: string;
  title: string;
  summary: string;
  category: Category;
  page: string;
  sources: { label: string; url: string }[];
  description: string;
  recommendation: string;
  screenshots: { src: string; alt: string; caption: string }[];
  illustration:
    "navigation" | "contrast" | "form" | "images" | "hierarchy" | "performance";
};

export const categories: Category[] = [
  "Navigation",
  "Contenu",
  "Données",
  "Formulaires",
  "Interface",
  "Images",
];
export const anomalies: Anomaly[] = [
  {
    id: "prix-incoherents",
    number: "01",
    title: "Des prix affichés à plusieurs millions",
    summary:
      "« Main au Doigt Levé », de Samantha Regan, est affichée à 7 200 025 $ dans le catalogue.",
    category: "Données",
    page: "Catalogue des peintures — « Main au Doigt Levé », Samantha Regan",
    sources: [
      {
        label: "Voir le catalogue des peintures",
        url: "https://www.loriginal.org/fr/peintures",
      },
    ],
    description:
      "La carte de « Main au Doigt Levé » affiche 7 200 025 $ pour une œuvre de 4 × 30 po. Le montant et son format doivent être comparés au prix validé par l’artiste.",
    recommendation:
      "Comparer le prix affiché au prix validé par l’artiste et corriger la conversion ou le formatage si nécessaire.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "pagination-peintures",
    number: "02",
    title: "Des peintures et artistes sans pagination",
    summary:
      "Les peintures se chargent au défilement et la liste des artistes ne propose pas de pagination.",
    category: "Navigation",
    page: "Catalogue des peintures et liste des artistes",
    sources: [
      {
        label: "Voir le catalogue des peintures",
        url: "https://www.loriginal.org/fr/peintures",
      },
      {
        label: "Voir la liste des artistes",
        url: "https://www.loriginal.org/fr/artistes",
      },
    ],
    description:
      "Dans le catalogue, de nouvelles peintures se chargent automatiquement lorsqu’on approche du pied de page. La liste des artistes est également longue et sans pagination. Ces parcours rendent la position et l’accès au pied de page difficiles à retrouver.",
    recommendation:
      "Ajouter une pagination aux peintures et aux artistes, en conservant les filtres et la position au retour d’une fiche, pour faciliter le parcours et l’accès au pied de page.",
    screenshots: [],
    illustration: "navigation",
  },
  {
    id: "livraison-incoherente",
    number: "03",
    title: "Des destinations de livraison contradictoires",
    summary:
      "La FAQ évoque 13 pays, dont Canada, États-Unis et France, tandis qu’un autre contenu annonce le monde entier.",
    category: "Contenu",
    page: "FAQ — livraison et contenus présentant les destinations desservies",
    sources: [
      {
        label: "FAQ du catalogue",
        url: "https://www.loriginal.org/fr/peintures",
      },
      {
        label: "FAQ de l’accueil",
        url: "https://www.loriginal.org/fr",
      },
    ],
    description:
      "La FAQ du catalogue annonce 13 pays desservis, dont le Canada, les États-Unis et la France. D’autres contenus évoquent une livraison dans le monde entier.",
    recommendation:
      "Confirmer les destinations desservies et afficher la même information sur les pages concernées.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "tarif-programme-numerique",
    number: "04",
    title: "Sans abonnement ou à 28 $ par mois ?",
    summary:
      "Les présentations du programme artiste numérique annoncent des conditions tarifaires différentes.",
    category: "Contenu",
    page: "Pages de présentation du programme artiste numérique",
    sources: [
      {
        label: "Voir le programme artiste numérique",
        url: "https://www.loriginal.org/fr/devenir-artiste-numerique",
      },
    ],
    description:
      "Le programme artiste numérique indique « Sans abonnement », puis affiche « 28 $/mois » sous le bouton de candidature. Les conditions de l’offre ne sont pas claires.",
    recommendation:
      "Préciser le tarif, la devise et les éventuelles conditions de gratuité dans toutes les présentations du programme.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "faq-programmes-artistes",
    number: "05",
    title: "Une FAQ ambiguë sur les œuvres numériques",
    summary:
      "Deux réponses de FAQ se contredisent sur les tirages et les œuvres numériques.",
    category: "Contenu",
    page: "Programme artiste numérique — FAQ",
    sources: [
      {
        label: "Voir la FAQ du programme numérique",
        url: "https://www.loriginal.org/fr/devenir-artiste-numerique",
      },
    ],
    description:
      "Une réponse affirme que seules les œuvres originales physiques sont acceptées et refuse les impressions et le numérique. Une autre indique que le parcours accueille uniquement les tirages et les œuvres numériques.",
    recommendation:
      "Retirer la réponse contradictoire et préciser les œuvres acceptées dans ce programme.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "compteurs-artistes",
    number: "06",
    title: "Des compteurs d’artistes difficiles à comparer",
    summary:
      "« Plus de 850 artistes vivants » et « 13 724 artistes représentés » apparaissent sur deux pages.",
    category: "Données",
    page: "Liste des artistes et programme artiste numérique",
    sources: [
      {
        label: "Liste des artistes",
        url: "https://www.loriginal.org/fr/artistes",
      },
      {
        label: "Programme artiste numérique",
        url: "https://www.loriginal.org/fr/devenir-artiste-numerique",
      },
    ],
    description:
      "La page des artistes annonce « Plus de 850 artistes vivants ». Le programme numérique affiche « 13 724 artistes représentés ». Les deux compteurs ne précisent pas s’ils désignent la même communauté.",
    recommendation:
      "Indiquer ce que mesure chaque compteur et harmoniser ceux qui parlent de la même communauté.",
    screenshots: [],
    illustration: "performance",
  },
  {
    id: "titre-oeuvre-surcharge",
    number: "07",
    title: "Un titre mêlé aux informations techniques",
    summary:
      "Le titre de « Another Year I Cannot Do Alone » contient dimensions, informations techniques, prix et devises.",
    category: "Données",
    page: "Fiche de « Another Year I Cannot Do Alone »",
    sources: [
      {
        label: "Voir « Another Year I Cannot Do Alone »",
        url: "https://www.loriginal.org/fr/peinture/another-year-i-cannot-do-alone-30x40-acrylic-watercolor-oil-12-800-000-00-usd-97020",
      },
    ],
    description:
      "Le titre contient « “Another Year I Cannot Do Alone” 30x40 | Acrylic, Watercolor, Oil 12,800,000.00 USD (USD) ». La carte affiche aussi les dimensions 40 × 30 po et le prix 15 360 080 $, ce qui mélange et répète les informations.",
    recommendation:
      "Séparer le titre, les dimensions, la technique et le prix dans des champs distincts, en conservant l’URL existante.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "villes-normalisation",
    number: "08",
    title: "Des noms de villes présentés de façon variable",
    summary:
      "Les fiches affichent notamment « levis », « Lévis » et « Maple. ont. » avec des formats différents.",
    category: "Données",
    page: "Profils d’artistes et affichages de leur localisation",
    sources: [
      {
        label: "Voir la liste des artistes",
        url: "https://www.loriginal.org/fr/artistes",
      },
    ],
    description:
      "Abie est localisé à « levis, Canada », A.Marie Langlois à « Lévis, Canada » et Adi Zur à « Maple. ont., Canada ». La casse, les accents et les abréviations ne sont pas harmonisés.",
    recommendation:
      "Uniformiser la casse, les accents et les abréviations des localisations, en respectant les noms des villes.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "validation-location-galerie",
    number: "09",
    title: "Des saisies invalides non signalées dans la location",
    summary:
      "Le formulaire accepte visuellement un nombre d’invités négatif, des dates inversées et un courriel invalide.",
    category: "Formulaires",
    page: "Formulaire de location de galerie",
    sources: [
      {
        label: "Voir le formulaire de location",
        url: "https://www.loriginal.org/fr/location-galerie",
      },
    ],
    description:
      "La capture montre −1 invité, une fin le 6 novembre avant le début le 9 novembre, et « allo » dans le champ courriel. Aucun message d’erreur n’est affiché à côté de ces saisies.",
    recommendation:
      "Afficher les erreurs près des champs, valider les contraintes côté client et serveur et conserver les informations déjà saisies.",
    screenshots: [],
    illustration: "form",
  },
  {
    id: "espacement-faq-bureau",
    number: "10",
    title: "Des questions de FAQ trop proches des bords",
    summary:
      "La FAQ liée à « Décore bureau » manque de marges internes sur ses questions à fond bleu foncé.",
    category: "Interface",
    page: "FAQ « Décore bureau »",
    sources: [
      {
        label: "Voir la FAQ « Décore bureau »",
        url: "https://www.loriginal.org/fr/etudes-de-cas/decore-bureau",
      },
    ],
    description:
      "Les questions sur fond bleu foncé de la FAQ « Décore bureau » sont trop proches des bords. Le texte et les icônes manquent d’espace.",
    recommendation:
      "Augmenter les marges internes et l’espace entre le texte et les icônes, sur mobile comme sur ordinateur.",
    screenshots: [],
    illustration: "contrast",
  },
  {
    id: "grille-peintures-anglaise",
    number: "11",
    title: "Une grille de peintures aux formats irréguliers",
    summary:
      "Les cartes du catalogue ont des hauteurs irrégulières qui décalent les titres et les informations.",
    category: "Images",
    page: "Catalogue des peintures — format de la grille",
    sources: [
      {
        label: "Voir le catalogue des peintures",
        url: "https://www.loriginal.org/fr/peintures",
      },
    ],
    description:
      "Dans le catalogue, les formats des images et des cartes créent des décalages entre les colonnes. Une grille aux cadres réguliers rendrait les œuvres plus faciles à parcourir.",
    recommendation:
      "Harmoniser le format des cadres et l’alignement des informations, tout en affichant chaque peinture entière sans recadrage.",
    screenshots: [],
    illustration: "images",
  },
  {
    id: "oeuvres-adoptees",
    number: "12",
    title: "Des œuvres adoptées mêlées aux disponibles",
    summary:
      "Le catalogue d’achat pourrait mieux distinguer les œuvres vendues sans les retirer du portfolio.",
    category: "Navigation",
    page: "Catalogue d’achat — œuvres disponibles et œuvres adoptées ou vendues",
    sources: [
      {
        label: "Voir le catalogue d’achat",
        url: "https://www.loriginal.org/fr/peintures",
      },
    ],
    description:
      "Les œuvres déjà adoptées ou vendues sont mêlées à celles encore disponibles dans le catalogue d’achat.",
    recommendation:
      "Ajouter un filtre « Disponibles » et un libellé clair sur les œuvres adoptées, tout en conservant leur fiche.",
    screenshots: [],
    illustration: "navigation",
  },
  {
    id: "profil-incomplet",
    number: "13",
    title: "Des espaces vides dans un profil artiste",
    summary:
      "Le profil de Zen-ruffinen Véronique laisse des blancs pour sa biographie ou sa ville non renseignées.",
    category: "Contenu",
    page: "Profil de Zen-ruffinen Véronique",
    sources: [
      {
        label: "Voir le profil de Zen-ruffinen Véronique",
        url: "https://www.loriginal.org/fr/artistes/zen-ruffinen-veronique",
      },
    ],
    description:
      "Le profil de Zen-ruffinen Véronique laisse des espaces vides lorsque la biographie ou la ville ne sont pas renseignées.",
    recommendation:
      "Masquer les rubriques facultatives vides ou afficher un message discret, sans inventer d’informations.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "carte-artiste-inactive",
    number: "14",
    title: "Une carte artiste qui ne se retourne pas",
    summary:
      "« Retournez la carte » ne fonctionne pas dans le composant « Créez-la avec Fish vik ».",
    category: "Interface",
    page: "Profil artiste — « Créez-la avec Fish vik »",
    sources: [
      {
        label: "Voir le profil de Fish vik",
        url: "https://www.loriginal.org/fr/artistes/fish-vik",
      },
    ],
    description:
      "Dans « Créez-la avec Fish vik », le clic sur « Retournez la carte » ne déclenche pas le retournement annoncé.",
    recommendation:
      "Corriger l’interaction et vérifier qu’elle fonctionne à la souris, au toucher et au clavier.",
    screenshots: [],
    illustration: "images",
  },
  {
    id: "pickart-footer",
    number: "15",
    title: "Un pied de page absent des artistes favoris",
    summary:
      "Le pied de page est absent de la page « Artistes favoris » de PickArt.",
    category: "Interface",
    page: "PickArt — Artistes favoris",
    sources: [
      {
        label: "Commencer le parcours PickArt",
        url: "https://www.loriginal.org/fr/pickart/",
      },
      {
        label: "Voir les artistes favoris après les swipes",
        url: "https://www.loriginal.org/fr/pickart/artistes-favoris",
      },
    ],
    description:
      "Après les swipes de PickArt, la page « Artistes favoris » ne présente pas le pied de page habituel et ses liens.",
    recommendation:
      "Rétablir le pied de page et vérifier qu’il reste accessible lors du défilement.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "echelle-tableau",
    number: "16",
    title: "Une mise en situation à l’échelle incohérente",
    summary:
      "« Main au Doigt Levé » mesure 10 × 76 cm, mais paraît beaucoup plus large dans la prévisualisation du bureau.",
    category: "Images",
    page: "« Main au Doigt Levé » — Samantha Regan, visuel de mise en situation",
    sources: [
      {
        label: "Voir la mise en situation de l’œuvre",
        url: "https://www.loriginal.org/fr/peinture/main-au-doigt-leve-samantha-regan-96308",
      },
    ],
    description:
      "La vue « Taille réelle » indique 10 × 76 cm et montre une œuvre très étroite. Dans la prévisualisation du bureau, la même œuvre paraît nettement plus large : les deux représentations ne sont pas cohérentes.",
    recommendation:
      "Confirmer les dimensions et les unités, puis ajuster la mise en situation à l’échelle réelle de l’œuvre.",
    screenshots: [],
    illustration: "images",
  },
  {
    id: "photos-notre-histoire",
    number: "17",
    title: "Des photographies floues dans « Notre histoire »",
    summary:
      "Les photographies semblent manquer de définition à leur taille d’affichage.",
    category: "Images",
    page: "Notre histoire — photographies",
    sources: [
      {
        label: "Voir « Notre histoire »",
        url: "https://www.loriginal.org/fr/histoire",
      },
    ],
    description:
      "Les photographies de la page « Notre histoire » paraissent floues à leur taille d’affichage.",
    recommendation:
      "Utiliser des sources de meilleure définition et servir une taille d’image adaptée à l’écran.",
    screenshots: [],
    illustration: "images",
  },
];

export type Improvement = {
  id: string;
  title: string;
  description: string;
  category: Category;
  icon: string;
  details: string[];
  ticketIds: string[];
};

export const improvements: Improvement[] = [
  {
    id: "navigation-catalogues",
    title: "Faciliter l’exploration des catalogues",
    description:
      "Paginer les peintures et les artistes, et distinguer les œuvres disponibles.",
    category: "Navigation",
    icon: "compass",
    ticketIds: ["pagination-peintures", "oeuvres-adoptees"],
    details: [
      "Ajouter une pagination aux peintures et aux artistes pour limiter le défilement et rendre le pied de page accessible.",
      "Proposer un filtre « Disponibles » sans supprimer les fiches des œuvres adoptées ni leur intérêt de portfolio.",
      "Conserver les filtres, la page consultée et la position au retour d’une fiche.",
    ],
  },
  {
    id: "coherence-editoriale",
    title: "Donner une seule version des informations clés",
    description:
      "Clarifier les destinations de livraison, les tarifs et les conditions des programmes artistes.",
    category: "Contenu",
    icon: "message",
    ticketIds: [
      "livraison-incoherente",
      "tarif-programme-numerique",
      "faq-programmes-artistes",
    ],
    details: [
      "Centraliser la liste des pays desservis et le tarif confirmé du programme numérique avec leurs conditions.",
      "Harmoniser les réponses de FAQ sur les œuvres acceptées dans le programme numérique.",
    ],
  },
  {
    id: "fiabilite-donnees",
    title: "Fiabiliser les données du catalogue",
    description:
      "Vérifier les prix atypiques, définir les compteurs et séparer les informations des œuvres et des localisations.",
    category: "Données",
    icon: "zap",
    ticketIds: [
      "prix-incoherents",
      "compteurs-artistes",
      "titre-oeuvre-surcharge",
      "villes-normalisation",
    ],
    details: [
      "Comparer les prix aux sources artistes, contrôler devise et conversion et soumettre les écarts à validation humaine.",
      "Définir population et période de chaque compteur avant de comparer ses valeurs.",
      "Séparer les champs des œuvres sans changer inutilement les URL ; normaliser les villes avec identifiants et libellés multilingues.",
    ],
  },
  {
    id: "formulaires-fiables",
    title: "Accompagner et valider chaque saisie",
    description:
      "Signaler les erreurs du formulaire de location sans faire perdre les informations déjà saisies.",
    category: "Formulaires",
    icon: "message",
    ticketIds: ["validation-location-galerie"],
    details: [
      "Définir les règles de champs obligatoires, dates, courriel et capacité avec des erreurs explicites.",
      "Vérifier puis compléter validations client et serveur, conserver les saisies et tester en environnement dédié.",
    ],
  },
  {
    id: "interface-coherente",
    title: "Soigner les détails qui rendent l’interface fiable",
    description:
      "Aérer la FAQ, traiter les profils incomplets et rétablir interactions et repères attendus.",
    category: "Interface",
    icon: "palette",
    ticketIds: [
      "espacement-faq-bureau",
      "profil-incomplet",
      "carte-artiste-inactive",
      "pickart-footer",
    ],
    details: [
      "Aérer les questions de la FAQ « Décore bureau » sans couper les contenus longs.",
      "Prévoir les profils incomplets sans inventer biographie ou localisation et masquer l’année de naissance absente.",
      "Diagnostiquer la carte à retourner et le footer PickArt puis tester clic, clavier, défilement et responsive.",
    ],
  },
  {
    id: "images-fideles",
    title: "Montrer les œuvres avec justesse",
    description:
      "Présenter des images nettes, intégrales et à une échelle crédible, dans une grille cohérente.",
    category: "Images",
    icon: "image",
    ticketIds: [
      "grille-peintures-anglaise",
      "echelle-tableau",
      "photos-notre-histoire",
    ],
    details: [
      "Régulariser les cadres du catalogue avec centrage des images, sans recadrer les peintures.",
      "Valider dimensions, unités et ratio de « Main au Doigt Levé » avant de recalibrer sa mise en situation.",
      "Partir de sources adaptées, contrôler srcset / sizes et choisir des variantes WebP / AVIF sans agrandir les vignettes.",
    ],
  },
];
