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
      "« Main au Doigt Levé », de Samantha Regan, affiche un prix de plusieurs millions.",
    category: "Données",
    page: "Catalogue et fiche de « Main au Doigt Levé » — Samantha Regan",
    sources: [
      {
        label: "Voir « Main au Doigt Levé »",
        url: "https://www.loriginal.org/fr/peinture/main-au-doigt-leve-samantha-regan-96308",
      },
    ],
    description:
      "« Main au Doigt Levé », de Samantha Regan, affiche un prix de plusieurs millions. Le montant, la devise et le format des nombres méritent d’être contrôlés.",
    recommendation:
      "Comparer le prix affiché au prix validé par l’artiste et corriger la conversion ou le formatage si nécessaire.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "pagination-peintures",
    number: "02",
    title: "Une pagination de peintures trop chargée",
    summary:
      "La pagination existe, mais ses nombreux raccourcis encombrent le bas du catalogue.",
    category: "Navigation",
    page: "Catalogue des peintures — pagination",
    sources: [
      {
        label: "Voir le catalogue des peintures",
        url: "https://www.loriginal.org/fr/peintures",
      },
    ],
    description:
      "Les nombreux raccourcis de pages encombrent le bas du catalogue des peintures, surtout sur mobile.",
    recommendation:
      "Limiter les numéros visibles avec des ellipses et des boutons Précédent / Suivant, tout en conservant les filtres.",
    screenshots: [],
    illustration: "navigation",
  },
  {
    id: "livraison-incoherente",
    number: "05",
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
    number: "07",
    title: "Un programme numérique gratuit ou à 28 $ par mois ?",
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
      "Le programme artiste numérique est présenté comme gratuit, mais un abonnement de 28 $ par mois est aussi annoncé. Les conditions de l’offre ne sont pas claires.",
    recommendation:
      "Préciser le tarif, la devise et les éventuelles conditions de gratuité dans toutes les présentations du programme.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "faq-programmes-artistes",
    number: "08",
    title: "Une FAQ ambiguë sur les œuvres numériques",
    summary:
      "Le refus des prints et du digital semble contredire l’existence d’un programme numérique.",
    category: "Contenu",
    page: "FAQ — œuvres acceptées et programme artiste numérique",
    sources: [
      {
        label: "Voir la FAQ des programmes artistes",
        url: "https://www.loriginal.org/fr/devenir-artiste",
      },
    ],
    description:
      "La FAQ refuse les prints et les œuvres numériques, alors qu’un programme numérique existe. Il manque une distinction claire entre les deux programmes.",
    recommendation:
      "Préciser les types d’œuvres acceptés pour chaque programme et ajouter les liens correspondants.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "compteurs-artistes",
    number: "09",
    title: "Des compteurs d’artistes difficiles à comparer",
    summary:
      "Les valeurs 850, 1 100 et 13 464 apparaissent sans définition commune suffisamment claire.",
    category: "Données",
    page: "Pages publiques affichant des chiffres sur la communauté d’artistes",
    sources: [
      {
        label: "Liste des artistes",
        url: "https://www.loriginal.org/fr/artistes",
      },
      {
        label: "Accueil",
        url: "https://www.loriginal.org/fr",
      },
      {
        label: "Programme artistes",
        url: "https://www.loriginal.org/fr/devenir-artiste",
      },
    ],
    description:
      "Les nombres 850, 1 100 et 13 464 artistes apparaissent selon les pages. Sans précision sur les populations ou les dates, ils sont difficiles à comparer.",
    recommendation:
      "Indiquer ce que mesure chaque compteur et harmoniser ceux qui parlent de la même communauté.",
    screenshots: [],
    illustration: "performance",
  },
  {
    id: "placeholder-courriel",
    number: "11",
    title: "Une adresse d’exemple trop spécifique",
    summary:
      "Le placeholder « artur@artur.com » pourrait être remplacé par un exemple de format plus neutre.",
    category: "Formulaires",
    page: "Formulaire comportant le placeholder courriel « artur@artur.com »",
    sources: [
      {
        label: "Voir le formulaire de bénévolat",
        url: "https://www.loriginal.org/fr/benevolat",
      },
    ],
    description:
      "Le champ courriel utilise « artur@artur.com » comme exemple. Une adresse neutre aiderait à comprendre le format attendu.",
    recommendation:
      "Utiliser « nom@exemple.com » et conserver un libellé visible pour le champ.",
    screenshots: [],
    illustration: "form",
  },
  {
    id: "titre-oeuvre-surcharge",
    number: "13",
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
      "Le titre « Another Year I Cannot Do Alone » regroupe aussi des dimensions, des informations techniques, un prix et des devises. L’ensemble devient difficile à lire.",
    recommendation:
      "Séparer le titre, les dimensions, la technique et le prix dans des champs distincts, en conservant l’URL existante.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "villes-normalisation",
    number: "14",
    title: "Des noms de villes présentés de façon variable",
    summary:
      "« Montreal / Montréal » et « levis / Lévis » illustrent des variantes d’écriture à harmoniser.",
    category: "Données",
    page: "Profils d’artistes et affichages de leur localisation",
    sources: [
      {
        label: "Voir la liste des artistes",
        url: "https://www.loriginal.org/fr/artistes",
      },
    ],
    description:
      "Les variantes « Montreal / Montréal » et « levis / Lévis » donnent une présentation irrégulière des localisations.",
    recommendation:
      "Harmoniser la casse et les accents, tout en conservant les traductions adaptées à chaque langue.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "validation-location-galerie",
    number: "16",
    title: "Des saisies invalides non signalées dans la location",
    summary:
      "Le formulaire de location doit mieux encadrer champs obligatoires, dates, courriel et nombre d’invités.",
    category: "Formulaires",
    page: "Formulaire de location de galerie",
    sources: [
      {
        label: "Voir le formulaire de location",
        url: "https://www.loriginal.org/fr/location-galerie",
      },
    ],
    description:
      "Le formulaire de location ne signale pas certaines saisies invalides : champs obligatoires, dates, courriel et nombre d’invités.",
    recommendation:
      "Afficher les erreurs près des champs, valider les contraintes côté client et serveur et conserver les informations déjà saisies.",
    screenshots: [],
    illustration: "form",
  },
  {
    id: "espacement-faq-bureau",
    number: "17",
    title: "Des questions de FAQ trop proches des bords",
    summary:
      "La FAQ liée à « Décore bureau » manque de marges internes sur ses questions à fond bleu foncé.",
    category: "Interface",
    page: "FAQ « Décore bureau »",
    sources: [],
    description:
      "Les questions sur fond bleu foncé de la FAQ « Décore bureau » sont trop proches des bords. Le texte et les icônes manquent d’espace.",
    recommendation:
      "Augmenter les marges internes et l’espace entre le texte et les icônes, sur mobile comme sur ordinateur.",
    screenshots: [],
    illustration: "contrast",
  },
  {
    id: "contenu-fiscal-bureau",
    number: "18",
    title: "Une affirmation fiscale à contextualiser",
    summary:
      "« Actif financier amortissable » semble trop général dans le cas du bureau de Céline.",
    category: "Contenu",
    page: "Étude de cas « Le bureau de Céline repensé par une œuvre »",
    sources: [],
    description:
      "Le cas « Le bureau de Céline repensé par une œuvre » emploie l’expression « actif financier amortissable » sans préciser les conditions fiscales applicables.",
    recommendation:
      "Faire valider la formulation par un spécialiste et préciser les conditions dans lesquelles elle s’applique.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "grille-peintures-anglaise",
    number: "19",
    title: "Une grille de peintures aux formats irréguliers",
    summary:
      "Le catalogue anglais pourrait mieux aligner les cartes tout en préservant chaque œuvre entière.",
    category: "Images",
    page: "Catalogue des peintures — version anglaise",
    sources: [
      {
        label: "Voir le catalogue anglais",
        url: "https://www.loriginal.org/en/paintings",
      },
    ],
    description:
      "Les cartes du catalogue anglais ont des formats irréguliers qui compliquent la lecture de la grille.",
    recommendation:
      "Utiliser des cadres cohérents et des images centrées, sans recadrer ni déformer les œuvres.",
    screenshots: [],
    illustration: "images",
  },
  {
    id: "oeuvres-adoptees",
    number: "20",
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
    id: "liste-artistes",
    number: "21",
    title: "Une longue liste d’artistes sans pagination",
    summary:
      "La liste des artistes ne propose pas de pagination pour faciliter le parcours.",
    category: "Navigation",
    page: "Liste des artistes",
    sources: [
      {
        label: "Voir la liste des artistes",
        url: "https://www.loriginal.org/fr/artistes",
      },
    ],
    description:
      "La liste des artistes est longue et ne propose pas de pagination, ce qui oblige à faire défiler de nombreux profils.",
    recommendation:
      "Ajouter une pagination ou un chargement progressif accessible, avec recherche et conservation de la position au retour d’un profil.",
    screenshots: [],
    illustration: "navigation",
  },
  {
    id: "profil-incomplet",
    number: "22",
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
    number: "23",
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
    number: "24",
    title: "Un pied de page absent des artistes favoris",
    summary:
      "Le pied de page est absent de la page « Artistes favoris » de PickArt.",
    category: "Interface",
    page: "PickArt — Artistes favoris",
    sources: [],
    description:
      "La page « Artistes favoris » de PickArt ne présente pas le pied de page habituel.",
    recommendation:
      "Rétablir le pied de page et vérifier qu’il reste accessible lors du défilement.",
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "echelle-tableau",
    number: "25",
    title: "Une mise en situation à l’échelle incohérente",
    summary:
      "« Main au Doigt Levé », donnée autour de 10 cm de large, paraît bien plus grande dans son décor.",
    category: "Images",
    page: "« Main au Doigt Levé » — Samantha Regan, visuel de mise en situation",
    sources: [
      {
        label: "Voir la mise en situation de l’œuvre",
        url: "https://www.loriginal.org/fr/peinture/main-au-doigt-leve-samantha-regan-96308",
      },
    ],
    description:
      "« Main au Doigt Levé » est indiquée autour de 10 cm de large, mais apparaît beaucoup plus grande dans son décor.",
    recommendation:
      "Confirmer les dimensions et les unités, puis ajuster la mise en situation à l’échelle réelle de l’œuvre.",
    screenshots: [],
    illustration: "images",
  },
  {
    id: "photos-notre-histoire",
    number: "26",
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
      "Alléger la pagination des peintures, distinguer les disponibilités et structurer la longue liste des artistes.",
    category: "Navigation",
    icon: "compass",
    ticketIds: ["pagination-peintures", "oeuvres-adoptees", "liste-artistes"],
    details: [
      "Compacter la pagination existante des peintures avec ellipses, Précédent / Suivant et conservation des filtres.",
      "Proposer un filtre « Disponibles » sans supprimer les fiches des œuvres adoptées ni leur intérêt de portfolio.",
      "Paginer les artistes côté serveur par 24 ou 48, ou proposer une progression accessible, avec recherche, tri et état dans l’URL.",
    ],
  },
  {
    id: "coherence-editoriale",
    title: "Donner une seule version des informations clés",
    description:
      "Clarifier destinations de livraison, tarifs, programmes artistes et affirmations fiscales à partir de sources validées.",
    category: "Contenu",
    icon: "message",
    ticketIds: [
      "livraison-incoherente",
      "tarif-programme-numerique",
      "faq-programmes-artistes",
      "contenu-fiscal-bureau",
    ],
    details: [
      "Centraliser la liste des pays desservis et le tarif confirmé du programme numérique avec leurs conditions.",
      "Distinguer règles des programmes physique et numérique au lieu de supprimer une restriction hors contexte.",
      "Faire valider le contenu fiscal par un spécialiste et harmoniser les formulations des pages FR / EN.",
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
      "Clarifier les champs et signaler les erreurs de location sans faire perdre les informations déjà saisies.",
    category: "Formulaires",
    icon: "message",
    ticketIds: ["placeholder-courriel", "validation-location-galerie"],
    details: [
      "Remplacer le placeholder spécifique par « nom@exemple.com », avec libellé visible et attributs email adaptés.",
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
      "Retrouver la FAQ signalée et ajuster padding responsive et gaps sans couper les contenus longs.",
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
      "Régulariser les contenants du catalogue anglais avec centrage et contain, sans recadrer les peintures.",
      "Valider dimensions, unités et ratio de « Main au Doigt Levé » avant de recalibrer sa mise en situation.",
      "Partir de sources adaptées, contrôler srcset / sizes et choisir des variantes WebP / AVIF sans agrandir les vignettes.",
    ],
  },
];
