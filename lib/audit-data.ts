/** Relevé utilisateur du 9 novembre 2026. Aucune vérification technique indépendante ni capture d’origine disponible. */
export const auditInfo = {
  date: "9 novembre 2026",
  site: "https://www.loriginal.org/fr",
  scope: "Pages publiques FR / EN · Catalogues · FAQ · PickArt · Formulaires",
};

export type Category =
  "Navigation" | "Contenu" | "Données" | "Formulaires" | "Interface" | "Images";
export type Severity = "Élevée" | "Moyenne" | "Faible";
export type AnomalyStatus =
  "À vérifier" | "À préciser" | "Observé" | "Piste UX";
export type Anomaly = {
  id: string;
  number: string;
  title: string;
  summary: string;
  category: Category;
  severity: Severity;
  status: AnomalyStatus;
  page: string;
  description: string;
  expected: string;
  impact: string;
  recommendation: string;
  steps: string[];
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
export const severities: Severity[] = ["Élevée", "Moyenne", "Faible"];

export const anomalies: Anomaly[] = [
  {
    id: "prix-incoherents",
    number: "01",
    title: "Des prix affichés à plusieurs millions",
    summary:
      "Le prix de « Main au Doigt Levé », de Samantha Regan, paraît disproportionné et doit être vérifié.",
    category: "Données",
    severity: "Élevée",
    status: "À vérifier",
    page: "Catalogue et fiche de « Main au Doigt Levé » — Samantha Regan",
    description:
      "Le relevé utilisateur du 9 novembre 2026 signale des montants de plusieurs millions, notamment pour « Main au Doigt Levé ». Cela ne suffit pas à conclure à une erreur : le prix de l’artiste, la devise, la conversion et les séparateurs numériques doivent être contrôlés.",
    expected:
      "Le prix correspond au montant validé par l’artiste, avec une devise explicite et un format numérique cohérent.",
    impact:
      "Un montant inattendu peut semer le doute sur le catalogue et empêcher une décision d’achat éclairée.",
    recommendation:
      "Comparer le prix source et le prix affiché, auditer conversions et formatage, puis signaler les valeurs atypiques pour validation humaine. Ne pas corriger automatiquement un prix uniquement parce qu’il est élevé.",
    steps: [
      "Retrouver l’œuvre et relever montant, devise et langue affichés.",
      "Comparer avec le prix de référence validé par l’artiste.",
      "Vérifier conversion, unités et séparateurs avant toute modification.",
    ],
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
    severity: "Moyenne",
    status: "Piste UX",
    page: "Catalogue des peintures — pagination",
    description:
      "Le relevé utilisateur du 9 novembre 2026 décrit une pagination déjà présente dans le catalogue des peintures, avec de nombreux raccourcis de pages. La proposition concerne leur simplification, et non une absence de pagination.",
    expected:
      "La position reste lisible, avec un accès simple aux pages voisines et aux extrémités.",
    impact:
      "De nombreux contrôles peuvent compliquer le choix d’une page, surtout sur un petit écran.",
    recommendation:
      "Utiliser une pagination compacte avec ellipses, page active, première et dernière pages et commandes Précédent / Suivant. Conserver filtres et tri à chaque changement de page.",
    steps: [
      "Examiner la pagination sur mobile et ordinateur.",
      "Parcourir le début, une page intermédiaire et la fin du catalogue.",
      "Contrôler lisibilité, navigation clavier et conservation des filtres et du tri.",
    ],
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
    severity: "Élevée",
    status: "Observé",
    page: "FAQ — livraison et contenus présentant les destinations desservies",
    description:
      "Le relevé utilisateur du 9 novembre 2026 rapporte un écart entre une FAQ mentionnant 13 pays, dont le Canada, les États-Unis et la France, et une promesse de livraison mondiale. Ce constat porte sur les pays desservis, sans anomalie signalée sur les frais de livraison.",
    expected:
      "Les différentes pages publiques présentent la même liste de destinations à jour.",
    impact:
      "Un visiteur peut croire son pays desservi puis découvrir une restriction pendant son parcours d’achat.",
    recommendation:
      "Faire confirmer les pays réellement desservis, centraliser la liste de référence et harmoniser FAQ et présentations de la livraison.",
    steps: [
      "Retrouver les deux formulations et leur contexte.",
      "Faire valider les destinations effectives par la personne responsable.",
      "Comparer les contenus concernés dans chaque langue à cette liste de référence.",
    ],
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
    severity: "Élevée",
    status: "Observé",
    page: "Pages de présentation du programme artiste numérique",
    description:
      "Le relevé utilisateur du 9 novembre 2026 signale un programme artiste numérique présenté comme gratuit à un endroit et comme un abonnement de 28 $ par mois à un autre. Le tarif réel, sa devise et les éventuelles conditions restent à confirmer.",
    expected:
      "Toutes les pages indiquent le même tarif, la même devise et les conditions de l’offre concernée.",
    impact:
      "La contradiction empêche un artiste de comprendre son engagement financier avant son inscription.",
    recommendation:
      "Faire valider tarif et conditions, centraliser l’information et actualiser les présentations du programme ainsi que les contenus associés.",
    steps: [
      "Identifier les deux passages et l’offre à laquelle chacun se rapporte.",
      "Confirmer tarif, devise et conditions de gratuité éventuelles.",
      "Vérifier les pages FR / EN et l’inscription à partir de la source tarifaire validée.",
    ],
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
    severity: "Élevée",
    status: "À préciser",
    page: "FAQ — œuvres acceptées et programme artiste numérique",
    description:
      "Le relevé utilisateur du 9 novembre 2026 rapproche un passage refusant les prints et les œuvres numériques de l’existence d’un programme numérique. La règle pourrait ne concerner que le programme physique : son périmètre doit être précisé.",
    expected:
      "Chaque règle identifie clairement son programme et les types d’œuvres qu’il accepte.",
    impact:
      "Un artiste numérique peut se croire exclu ou ne pas comprendre quelle offre lui correspond.",
    recommendation:
      "Confirmer le périmètre de la règle, distinguer explicitement programmes physique et numérique et ajouter des liens utiles. Ne pas supprimer une restriction valide sans examiner son contexte.",
    steps: [
      "Relire la question complète et les présentations des deux programmes.",
      "Faire préciser leurs critères d’admission respectifs.",
      "Contrôler que textes et liens orientent correctement chaque type d’artiste.",
    ],
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
    severity: "Moyenne",
    status: "À vérifier",
    page: "Pages publiques affichant des chiffres sur la communauté d’artistes",
    description:
      "Le relevé utilisateur du 9 novembre 2026 mentionne 850, 1 100 et 13 464 artistes. Ces chiffres peuvent désigner des populations, programmes ou dates différents ; leur différence ne démontre pas à elle seule une erreur de données.",
    expected:
      "Chaque indicateur précise sa population, son périmètre et sa date ou sa fréquence de mise à jour.",
    impact:
      "Des chiffres sans contexte rendent la communauté difficile à comprendre et peuvent fragiliser la confiance.",
    recommendation:
      "Définir les indicateurs et leurs sources, puis centraliser ceux qui mesurent la même population. Conserver des valeurs distinctes lorsque des libellés clairs expliquent leur différence.",
    steps: [
      "Relever chaque nombre avec son intitulé et son emplacement.",
      "Identifier population, période et méthode de calcul.",
      "Comparer uniquement les indicateurs de même périmètre et clarifier les autres libellés.",
    ],
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
    severity: "Faible",
    status: "Piste UX",
    page: "Formulaire comportant le placeholder courriel « artur@artur.com »",
    description:
      "Le relevé utilisateur du 9 novembre 2026 signale l’adresse « artur@artur.com » comme exemple dans un champ courriel. Il s’agit d’une amélioration de clarté ; cette adresse ne prouve pas à elle seule un défaut fonctionnel du formulaire.",
    expected:
      "Le champ comporte un libellé visible et un exemple de format neutre, distinct d’une valeur déjà saisie.",
    impact:
      "Un exemple spécifique peut être pris pour une valeur attendue ou une adresse liée au service.",
    recommendation:
      'Employer « nom@exemple.com », conserver un libellé visible et utiliser type="email" et autocomplete="email".',
    steps: [
      "Retrouver le champ et vérifier son libellé permanent.",
      "Contrôler type et attribut d’autocomplétion.",
      "Vérifier qu’un exemple neutre reste lisible sans remplacer le libellé.",
    ],
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
    severity: "Moyenne",
    status: "Observé",
    page: "Fiche de « Another Year I Cannot Do Alone »",
    description:
      "Le relevé utilisateur du 9 novembre 2026 rapporte un titre réunissant le nom « Another Year I Cannot Do Alone », des dimensions, des informations techniques, un prix et des devises. Ces éléments nécessitent des champs distincts plutôt qu’une seule chaîne de texte.",
    expected:
      "Le titre ne contient que le nom de l’œuvre ; dimensions, technique, prix et devise ont leurs propres rubriques.",
    impact:
      "Le nom devient difficile à lire et les informations peuvent être dupliquées ou interprétées de façon incohérente.",
    recommendation:
      "Séparer les champs dans les données et l’affichage, vérifier les métadonnées et préserver l’URL stable pour ne pas dégrader les liens et le référencement existants.",
    steps: [
      "Comparer titre visible, métadonnées et informations de la fiche.",
      "Faire confirmer le titre artistique et identifier chaque autre donnée.",
      "Contrôler affichage et liens existants après séparation, sans changement d’URL inutile.",
    ],
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
    severity: "Moyenne",
    status: "Observé",
    page: "Profils d’artistes et affichages de leur localisation",
    description:
      "Le relevé utilisateur du 9 novembre 2026 signale les variantes « Montreal / Montréal » et « levis / Lévis ». Il faut distinguer les traductions légitimes des incohérences de casse, d’accentuation ou de saisie.",
    expected:
      "Chaque ville repose sur une identité commune et un libellé adapté à la langue consultée.",
    impact:
      "Des variantes non maîtrisées peuvent fragmenter les filtres géographiques et rendre les profils visuellement irréguliers.",
    recommendation:
      "Normaliser les localisations avec des identifiants stables et des libellés multilingues ; rapprocher les variantes existantes après vérification des cas ambigus.",
    steps: [
      "Recenser les variantes et la langue de chaque affichage.",
      "Confirmer qu’elles représentent la même localité.",
      "Contrôler profils, recherche et filtres après normalisation et traduction.",
    ],
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
    severity: "Élevée",
    status: "Observé",
    page: "Formulaire de location de galerie",
    description:
      "Le relevé utilisateur du 9 novembre 2026 décrit des saisies invalides non signalées dans la location de galerie : champs obligatoires, dates, courriel et invités. L’existence et le comportement d’une validation serveur n’ont pas été confirmés.",
    expected:
      "Les erreurs sont expliquées près des champs, les règles de dates et de capacité sont appliquées et les autres saisies sont conservées.",
    impact:
      "Une demande incomplète ou incohérente peut être difficile à corriger pour le visiteur et à traiter pour l’équipe.",
    recommendation:
      "Définir les contraintes métier, valider côté client et serveur, associer les erreurs aux champs et préserver la saisie. Vérifier la validation serveur avant de conclure à son absence.",
    steps: [
      "En environnement de test, essayer champs vides, courriel mal formé, dates incohérentes et invités hors capacité.",
      "Vérifier les messages, le focus clavier et la conservation des autres informations.",
      "Contrôler les règles serveur avec l’équipe technique sans envoyer de demandes réelles.",
    ],
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
    severity: "Moyenne",
    status: "Observé",
    page: "FAQ associée à « Décore bureau » — emplacement exact à confirmer",
    description:
      "Le relevé utilisateur du 9 novembre 2026 signale un padding presque nul autour de questions sur fond bleu foncé dans le contexte « Décore bureau ». L’emplacement exact du composant reste à confirmer avant l’examen de son code.",
    expected:
      "Questions, icônes et réponses disposent d’un espacement confortable, y compris sur mobile.",
    impact:
      "Le texte peut sembler tassé, être moins agréable à lire et offrir des zones d’interaction peu distinctes.",
    recommendation:
      "Retrouver le composant puis ajuster padding responsive et gaps de mise en page flex, sans dimensions fixes qui couperaient les questions longues.",
    steps: [
      "Identifier la FAQ exacte mentionnée dans le relevé.",
      "Contrôler padding et espaces entre texte et icône aux différentes largeurs.",
      "Vérifier questions longues, dépliage et zoom après ajustement.",
    ],
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
    severity: "Moyenne",
    status: "À vérifier",
    page: "Étude de cas « Le bureau de Céline repensé par une œuvre »",
    description:
      "Le relevé utilisateur du 9 novembre 2026 demande de vérifier l’expression « actif financier amortissable ». Sa validité dépend notamment de la juridiction et des conditions applicables. Il s’agit d’un sujet éditorial et fiscal, pas d’un bug de code établi.",
    expected:
      "Les éventuels avantages fiscaux sont formulés avec des conditions et limites validées par un spécialiste compétent.",
    impact:
      "Une formule générale peut laisser croire qu’un traitement fiscal vaut pour chaque acheteur et chaque œuvre.",
    recommendation:
      "Faire relire le passage par un spécialiste fiscal, préciser contexte et conditions et éviter les promesses générales non étayées.",
    steps: [
      "Retrouver la phrase complète dans son contexte.",
      "Faire vérifier portée et conditions par un spécialiste de la juridiction concernée.",
      "Harmoniser les autres pages reprenant la même formulation avec le contenu validé.",
    ],
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
    severity: "Moyenne",
    status: "Piste UX",
    page: "Catalogue des peintures — version anglaise",
    description:
      "Le relevé utilisateur du 9 novembre 2026 décrit une grille irrégulière dans le catalogue anglais. La diversité des formats fait partie des œuvres : la proposition porte sur les contenants, sans recadrer les peintures.",
    expected:
      "Les cartes sont cohérentes et montrent chaque œuvre intégralement dans ses proportions d’origine.",
    impact:
      "Une grille irrégulière peut ralentir le balayage visuel et la comparaison des titres ou des actions.",
    recommendation:
      "Définir un cadre cohérent, centrer les images avec object-fit: contain et utiliser un fond neutre. Éviter tout recadrage supprimant une partie de la peinture.",
    steps: [
      "Comparer les cartes verticales, horizontales et carrées du catalogue anglais.",
      "Vérifier l’alignement des titres et la présence intégrale de chaque œuvre.",
      "Contrôler la grille sur mobile et ordinateur avec des formats très différents.",
    ],
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
    severity: "Moyenne",
    status: "Piste UX",
    page: "Catalogue d’achat — œuvres disponibles et œuvres adoptées ou vendues",
    description:
      "Le relevé utilisateur du 9 novembre 2026 indique que des œuvres adoptées ou vendues sont mêlées au catalogue d’achat. Leur conservation peut relever d’un choix produit pertinent pour le portfolio ; la piste concerne la distinction des disponibilités.",
    expected:
      "Le visiteur identifie immédiatement les œuvres achetables et peut filtrer les disponibilités tout en consultant le portfolio.",
    impact:
      "Un acheteur peut s’intéresser à une œuvre avant de découvrir qu’elle n’est plus disponible.",
    recommendation:
      "Proposer un filtre « Disponibles », rendre les statuts visibles et préserver les fiches des œuvres adoptées, avec des suggestions similaires lorsque pertinent.",
    steps: [
      "Contrôler les statuts des cartes et des fiches.",
      "Confirmer avec l’équipe les objectifs du catalogue et du portfolio.",
      "Tester le filtre en préservant fiches, liens existants et autres filtres.",
    ],
    screenshots: [],
    illustration: "navigation",
  },
  {
    id: "liste-artistes",
    number: "21",
    title: "Une longue liste d’artistes sans pagination",
    summary:
      "Contrairement aux peintures, la liste des artistes est signalée sans pagination.",
    category: "Navigation",
    severity: "Élevée",
    status: "Piste UX",
    page: "Liste des artistes",
    description:
      "Le relevé utilisateur du 9 novembre 2026 décrit une longue liste d’artistes dépourvue de pagination. Ce point est distinct du numéro 02, consacré aux nombreux raccourcis d’une pagination déjà existante pour les peintures.",
    expected:
      "La liste permet de trouver un artiste et de poursuivre la consultation sans chargement ni défilement excessifs.",
    impact:
      "Un grand nombre de profils peut allonger la recherche et rendre les artistes éloignés dans la liste difficiles à atteindre.",
    recommendation:
      "Prévoir une pagination serveur de 24 ou 48 profils, ou un chargement progressif accessible, avec recherche et tri. Conserver l’état dans l’URL et restaurer la position au retour d’une fiche.",
    steps: [
      "Examiner le comportement de la liste et le nombre de profils chargés.",
      "Comparer pagination de 24 / 48 éléments et progression accessible selon les usages.",
      "Tester recherche, tri, clavier, historique et restauration de l’état depuis l’URL.",
    ],
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
    severity: "Moyenne",
    status: "Piste UX",
    page: "Profil de Zen-ruffinen Véronique",
    description:
      "Le relevé utilisateur du 9 novembre 2026 signale des blancs dans ce profil, notamment pour la biographie et la ville. Ces champs peuvent être optionnels : leur absence ne justifie aucune biographie ni localisation inventée.",
    expected:
      "Le profil demeure compréhensible et équilibré lorsque des informations facultatives ne sont pas disponibles.",
    impact:
      "Des sections vides peuvent donner l’impression d’une fiche inachevée ou d’un problème de chargement.",
    recommendation:
      "Afficher un message discret pour une biographie non renseignée ou masquer les sections optionnelles vides. Afficher la localisation uniquement si fournie et masquer l’année de naissance absente.",
    steps: [
      "Identifier les champs renseignés et les champs facultatifs du profil.",
      "Comparer les rendus d’un profil complet et incomplet.",
      "Vérifier les états vides sans fabriquer de biographie, de localisation ni d’année de naissance.",
    ],
    screenshots: [],
    illustration: "hierarchy",
  },
  {
    id: "carte-artiste-inactive",
    number: "23",
    title: "Une carte artiste qui ne se retourne pas",
    summary:
      "« Retournez la carte » est signalé inactif dans le composant « Créez-la avec Fish vik ».",
    category: "Interface",
    severity: "Élevée",
    status: "Observé",
    page: "Profil artiste — « Créez-la avec Fish vik », emplacement exact à confirmer",
    description:
      "Le relevé utilisateur du 9 novembre 2026 rapporte que le clic sur « Retournez la carte » ne produit pas l’effet attendu dans « Créez-la avec Fish vik ». L’emplacement exact doit être retrouvé et aucune cause technique n’est confirmée.",
    expected:
      "La commande retourne la carte et donne accès à son contenu à la souris, au toucher et au clavier.",
    impact:
      "L’action inactive bloque l’accès au verso annoncé et rend le fonctionnement du composant incompréhensible.",
    recommendation:
      "Contrôler gestionnaire d’événement, état, CSS 3D et couches interceptant le clic. Prévoir un vrai bouton, un focus visible et un comportement adapté aux préférences de mouvement.",
    steps: [
      "Retrouver le composant et reproduire l’action sur plusieurs tailles d’écran.",
      "Examiner événements, état et couches CSS pour isoler la cause sans la présupposer.",
      "Tester retournement, retour et accès au contenu à la souris comme au clavier.",
    ],
    screenshots: [],
    illustration: "images",
  },
  {
    id: "pickart-footer",
    number: "24",
    title: "Un pied de page absent des artistes favoris",
    summary:
      "La page « Artistes favoris » de PickArt est signalée sans footer.",
    category: "Interface",
    severity: "Moyenne",
    status: "Observé",
    page: "PickArt — Artistes favoris",
    description:
      "Le relevé utilisateur du 9 novembre 2026 rapporte l’absence de footer sur « Artistes favoris » dans PickArt. Il reste à établir s’il manque au rendu ou si une règle de mise en page le masque.",
    expected:
      "Le pied de page et ses liens restent présents et accessibles dans les états pertinents de PickArt.",
    impact:
      "Le visiteur peut perdre l’accès aux liens habituellement proposés en bas du site.",
    recommendation:
      "Vérifier layout, conditions de rendu et règles overflow / height qui peuvent masquer le footer, puis harmoniser son intégration.",
    steps: [
      "Ouvrir la page avec favoris et sans favoris si un compte de test est disponible.",
      "Comparer son layout aux autres pages et rechercher le footer dans le rendu.",
      "Contrôler défilement, hauteurs et accès clavier sur mobile et ordinateur.",
    ],
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
    severity: "Élevée",
    status: "Observé",
    page: "« Main au Doigt Levé » — Samantha Regan, visuel de mise en situation",
    description:
      "Le relevé utilisateur du 9 novembre 2026 décrit un écart entre une largeur indiquée d’environ 10 cm et la taille représentée dans le décor. Les dimensions de référence, leur unité et la construction du visuel restent à vérifier.",
    expected:
      "La mise en situation respecte les dimensions validées de l’œuvre, ses proportions et l’échelle du décor.",
    impact:
      "Le visiteur peut se faire une idée erronée de l’encombrement réel du tableau avant son achat.",
    recommendation:
      "Contrôler largeur et hauteur, unités pouces / centimètres, éventuelle inversion et ratio. Calibrer ensuite l’échelle du décor à partir de dimensions confirmées.",
    steps: [
      "Comparer les dimensions affichées à celles confirmées par l’artiste.",
      "Vérifier unités, conversions, ordre largeur / hauteur et ratio du visuel.",
      "Mesurer l’échelle dans le décor et contrôler les différents formats d’affichage.",
    ],
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
    severity: "Moyenne",
    status: "Observé",
    page: "Notre histoire — photographies",
    description:
      "Le relevé utilisateur du 9 novembre 2026 signale des photographies floues sur « Notre histoire ». Sources trop petites, compression ou variante inadaptée sont des hypothèses à examiner ; aucune cause n’est confirmée.",
    expected:
      "Chaque photographie dispose d’une définition adaptée à sa taille et à la densité de l’écran, avec un poids raisonnable.",
    impact:
      "Des images peu nettes peuvent diminuer la qualité perçue d’une page présentant l’histoire et l’identité du projet.",
    recommendation:
      "Comparer sources originales et fichiers servis, générer des variantes adaptées et contrôler srcset / sizes. Utiliser WebP ou AVIF lorsque pertinent et éviter d’agrandir une vignette.",
    steps: [
      "Identifier les photos et leurs dimensions servies et affichées.",
      "Comparer sources, compression et choix de variante.",
      "Vérifier netteté et poids à plusieurs largeurs et densités d’écran après optimisation.",
    ],
    screenshots: [],
    illustration: "images",
  },
];

export type Improvement = {
  id: string;
  title: string;
  description: string;
  category: Category;
  effort: "Faible" | "Moyen" | "Important";
  impact: "Élevé" | "Modéré";
  icon: string;
  details: string[];
  ticketIds: string[];
};

/** Impact et effort restent des estimations à confirmer après diagnostic. */
export const improvements: Improvement[] = [
  {
    id: "navigation-catalogues",
    title: "Faciliter l’exploration des catalogues",
    description:
      "Alléger la pagination des peintures, distinguer les disponibilités et structurer la longue liste des artistes.",
    category: "Navigation",
    effort: "Important",
    impact: "Élevé",
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
    effort: "Moyen",
    impact: "Élevé",
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
    effort: "Important",
    impact: "Élevé",
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
    effort: "Moyen",
    impact: "Élevé",
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
    effort: "Moyen",
    impact: "Élevé",
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
    effort: "Moyen",
    impact: "Élevé",
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

export const principles = [
  {
    title: "Observer avec méthode",
    description:
      "Décrire chaque situation, son contexte et les étapes permettant de la vérifier.",
  },
  {
    title: "Comprendre l’impact",
    description:
      "Relier les problèmes aux difficultés concrètes rencontrées par les visiteurs.",
  },
  {
    title: "Proposer avec intention",
    description:
      "Suggérer des solutions utiles, accessibles et respectueuses de l’identité du site.",
  },
];
