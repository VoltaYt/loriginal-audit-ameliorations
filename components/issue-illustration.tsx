import type { ReactNode } from "react";

const c = {
  bg: "#202422",
  panel: "#2b312a",
  dark: "#171c18",
  line: "#46503f",
  muted: "#a2ae96",
  cream: "#f0f0e6",
  lime: "#d9f36c",
  amber: "#e6b18b",
};

const titles: Record<string, string> = {
  "prix-incoherents":
    "Schéma d’un prix atypique dont le montant et le format doivent être vérifiés",
  "pagination-peintures":
    "Schéma comparant une pagination dense et une pagination compacte",
  "livraison-incoherente":
    "Schéma de deux formulations à harmoniser sur les destinations de livraison",
  "tarif-programme-numerique":
    "Schéma de deux présentations tarifaires différentes du programme numérique",
  "faq-programmes-artistes":
    "Schéma distinguant les programmes d’œuvres physiques et numériques",
  "compteurs-artistes":
    "Schéma de compteurs dont les populations et les dates sont à préciser",
  "placeholder-courriel":
    "Schéma d’un champ courriel et d’un exemple de format neutre",
  "titre-oeuvre-surcharge":
    "Schéma séparant le titre artistique et les informations techniques",
  "villes-normalisation":
    "Schéma de variantes de noms de villes à normaliser selon la langue",
  "validation-location-galerie":
    "Schéma de champs et de dates à valider dans une demande de location",
  "espacement-faq-bureau":
    "Schéma comparant des espacements de questions de FAQ",
  "contenu-fiscal-bureau":
    "Schéma d’une affirmation fiscale à faire relire dans son contexte",
  "grille-peintures-anglaise":
    "Schéma d’une grille cohérente qui conserve les œuvres entières",
  "oeuvres-adoptees":
    "Schéma distinguant œuvres adoptées et œuvres disponibles",
  "liste-artistes":
    "Schéma d’une longue liste d’artistes et d’une pagination proposée",
  "profil-incomplet":
    "Schéma d’un profil artiste comportant des informations manquantes",
  "carte-artiste-inactive":
    "Schéma d’une carte artiste et de son interaction de retournement à contrôler",
  "pickart-footer":
    "Schéma du pied de page à retrouver sur les artistes favoris PickArt",
  "echelle-tableau":
    "Schéma du contrôle des unités et de l’échelle d’un tableau dans un décor",
  "photos-notre-histoire":
    "Schéma comparant une image floue et une source adaptée",
};

function Label({
  x,
  y,
  children,
  accent = false,
}: {
  x: number;
  y: number;
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      fill={accent ? c.lime : c.muted}
      fontSize="12"
      letterSpacing=".3"
    >
      {children}
    </text>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <text x="112" y="131" fill={c.cream} fontSize="21" fontWeight="600">
      {children}
    </text>
  );
}

function Box({
  x,
  y,
  width = 260,
  height = 115,
  children,
  dashed = false,
}: {
  x: number;
  y: number;
  width?: number;
  height?: number;
  children?: ReactNode;
  dashed?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="8"
        fill={c.panel}
        stroke={dashed ? c.lime : c.line}
        strokeDasharray={dashed ? "5 5" : undefined}
      />
      {children}
    </g>
  );
}

function Arrow({
  x,
  y,
  down = false,
}: {
  x: number;
  y: number;
  down?: boolean;
}) {
  return (
    <path
      d={down ? `M${x} ${y}v30m-6-6 6 6 6-6` : `M${x} ${y}h32m-6-6 6 6-6 6`}
      stroke={c.lime}
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function Art({
  x,
  y,
  width = 100,
  height = 100,
  faded = false,
}: {
  x: number;
  y: number;
  width?: number;
  height?: number;
  faded?: boolean;
}) {
  return (
    <g opacity={faded ? 0.45 : 1}>
      <rect x={x} y={y} width={width} height={height} rx="2" fill="#626f4a" />
      <circle
        cx={x + width * 0.7}
        cy={y + height * 0.28}
        r={Math.min(width, height) * 0.15}
        fill="#c0ce83"
      />
      <path
        d={`M${x} ${y + height * 0.82}L${x + width * 0.35} ${y + height * 0.35}L${x + width * 0.66} ${y + height * 0.76}L${x + width} ${y + height * 0.5}V${y + height}H${x}Z`}
        fill="#8b9c61"
      />
      <path
        d={`M${x} ${y + height * 0.94}L${x + width * 0.45} ${y + height * 0.72}L${x + width} ${y + height * 0.86}V${y + height}H${x}Z`}
        fill="#394833"
      />
    </g>
  );
}

function PageButtons({
  x,
  y,
  dense = false,
}: {
  x: number;
  y: number;
  dense?: boolean;
}) {
  const labels = dense
    ? [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
      ]
    : ["‹", "1", "…", "7", "8", "9", "…", "24", "›"];
  const step = dense ? 31 : 42;
  return (
    <g>
      {labels.map((label, i) => (
        <g key={`${label}-${i}`}>
          <rect
            x={x + i * step}
            y={y}
            width={dense ? 26 : 34}
            height="30"
            rx="4"
            fill={label === "8" ? c.lime : c.dark}
            stroke={c.line}
          />
          <text
            x={x + i * step + (dense ? 13 : 17)}
            y={y + 20}
            fill={label === "8" ? c.dark : c.cream}
            textAnchor="middle"
            fontSize="12"
          >
            {label}
          </text>
        </g>
      ))}
    </g>
  );
}

function Diagram({ ticket, blurId }: { ticket?: string; blurId: string }) {
  switch (ticket) {
    case "prix-incoherents":
      return (
        <>
          <Heading>Contrôler avant de corriger.</Heading>
          <Art x={118} y={158} width={170} height={157} />
          <Box x={332} y={159} width={345} height={154}>
            <Label x={353} y={184}>
              PRIX · DEVISE · SÉPARATEURS
            </Label>
            <text x="353" y="230" fill={c.cream} fontSize="33" fontWeight="600">
              3 000 000 $
            </text>
            <Label x={353} y={258}>
              Exemple de format, pas un prix réel
            </Label>
            <Label x={353} y={286} accent>
              Comparer au montant source de l’artiste
            </Label>
          </Box>
        </>
      );
    case "pagination-peintures":
      return (
        <>
          <Heading>Moins de raccourcis, plus de clarté.</Heading>
          <Label x={118} y={168}>
            PAGINATION DENSE
          </Label>
          <PageButtons x={118} y={183} dense />
          <Arrow x={379} y={228} down />
          <Label x={118} y={285}>
            PROPOSITION COMPACTE
          </Label>
          <PageButtons x={260} y={268} />
        </>
      );
    case "livraison-incoherente":
      return (
        <>
          <Heading>Une même offre, deux périmètres.</Heading>
          <Box x={118} y={164}>
            <Label x={138} y={193}>
              FORMULATION A
            </Label>
            <text x="138" y="235" fill={c.cream} fontSize="32">
              13 pays
            </text>
            <Label x={138} y={259}>
              Canada · États-Unis · France…
            </Label>
          </Box>
          <Box x={422} y={164}>
            <Label x={442} y={193}>
              FORMULATION B
            </Label>
            <text x="442" y="235" fill={c.cream} fontSize="30">
              Monde entier
            </text>
            <Label x={442} y={259}>
              Destinations à faire confirmer
            </Label>
          </Box>
          <Label x={224} y={320} accent>
            → Harmoniser avec la liste de référence validée
          </Label>
        </>
      );
    case "tarif-programme-numerique":
      return (
        <>
          <Heading>Rendre l’engagement compréhensible.</Heading>
          <Box x={118} y={164}>
            <Label x={138} y={193}>
              PRÉSENTATION A
            </Label>
            <text x="138" y="239" fill={c.cream} fontSize="34">
              Gratuit
            </text>
            <Label x={138} y={260}>
              Conditions à préciser
            </Label>
          </Box>
          <Box x={422} y={164}>
            <Label x={442} y={193}>
              PRÉSENTATION B
            </Label>
            <text x="442" y="239" fill={c.cream} fontSize="34">
              28 $ / mois
            </text>
            <Label x={442} y={260}>
              Devise et offre à confirmer
            </Label>
          </Box>
          <Label x={248} y={320} accent>
            Une source tarifaire commune et à jour
          </Label>
        </>
      );
    case "faq-programmes-artistes":
      return (
        <>
          <Heading>Préciser à quel programme s’applique la règle.</Heading>
          <Box x={118} y={164}>
            <Label x={138} y={191}>
              PROGRAMME PHYSIQUE
            </Label>
            <Art x={141} y={206} width={58} height={58} />
            <Label x={218} y={227}>
              Œuvres acceptées
            </Label>
            <Label x={218} y={250}>
              Règles propres
            </Label>
          </Box>
          <Box x={422} y={164}>
            <Label x={442} y={191}>
              PROGRAMME NUMÉRIQUE
            </Label>
            <rect
              x="445"
              y="207"
              width="64"
              height="47"
              rx="4"
              fill={c.dark}
              stroke={c.lime}
            />
            <path d="M477 255v10m-15 0h30" stroke={c.lime} />
            <Label x={526} y={227}>
              Œuvres acceptées
            </Label>
            <Label x={526} y={250}>
              Règles propres
            </Label>
          </Box>
          <Label x={222} y={320} accent>
            Deux périmètres à distinguer explicitement
          </Label>
        </>
      );
    case "compteurs-artistes":
      return (
        <>
          <Heading>Comparer seulement ce qui est comparable.</Heading>
          {["850", "1 100", "13 464"].map((n, i) => (
            <Box key={n} x={118 + i * 194} y={166} width={177} height={127}>
              <Label x={137 + i * 194} y={195}>
                ARTISTES
              </Label>
              <text x={137 + i * 194} y="238" fill={c.cream} fontSize="32">
                {n}
              </text>
              <Label x={137 + i * 194} y={275}>
                Périmètre ? Date ?
              </Label>
            </Box>
          ))}
          <Label x={241} y={326} accent>
            Définir chaque indicateur avant de l’unifier
          </Label>
        </>
      );
    case "placeholder-courriel":
      return (
        <>
          <Heading>Un exemple de format, pas une identité.</Heading>
          <Label x={118} y={172}>
            ADRESSE COURRIEL
          </Label>
          <Box x={118} y={187} width={562} height={48}>
            <text x="136" y="217" fill={c.muted} fontSize="19">
              artur@artur.com
            </text>
          </Box>
          <Arrow x={392} y={245} down />
          <Box x={118} y={287} width={562} height={48}>
            <text x="136" y="317" fill={c.lime} fontSize="19">
              nom@exemple.com
            </text>
          </Box>
        </>
      );
    case "titre-oeuvre-surcharge":
      return (
        <>
          <Heading>Donner sa place à chaque information.</Heading>
          <Box x={118} y={158} width={562} height={62}>
            <text x="134" y="183" fill={c.cream} fontSize="17">
              Another Year I Cannot Do Alone
            </text>
            <text x="134" y="204" fill={c.amber} fontSize="13">
              + dimensions + technique + prix + devises
            </text>
          </Box>
          <Arrow x={394} y={228} down />
          {["Titre de l’œuvre", "Dimensions", "Technique", "Prix / devise"].map(
            (label, i) => (
              <Box
                key={label}
                x={118 + i * 144}
                y={278}
                width={130}
                height={48}
              >
                <text
                  x={183 + i * 144}
                  y="307"
                  textAnchor="middle"
                  fill={c.lime}
                  fontSize="13"
                >
                  {label}
                </text>
              </Box>
            ),
          )}
        </>
      );
    case "villes-normalisation":
      return (
        <>
          <Heading>Une ville, des libellés maîtrisés.</Heading>
          <Box x={118} y={166} width={230} height={134}>
            <text x="137" y="201" fill={c.cream} fontSize="22">
              Montreal / Montréal
            </text>
            <text x="137" y="235" fill={c.muted} fontSize="20">
              levis / Lévis
            </text>
            <Label x={137} y={276}>
              Variantes de saisie ou de langue
            </Label>
          </Box>
          <Arrow x={368} y={230} />
          <Box x={424} y={166} width={256} height={134}>
            <Label x={443} y={195}>
              IDENTIFIANT COMMUN
            </Label>
            <text x="443" y="232" fill={c.lime} fontSize="23">
              Ville · langue · libellé
            </text>
            <Label x={443} y={276}>
              Sans supprimer les traductions
            </Label>
          </Box>
        </>
      );
    case "validation-location-galerie":
      return (
        <>
          <Heading>Accompagner la correction des saisies.</Heading>
          {[
            {
              label: "Courriel",
              value: "adresse@",
              error: "Format à vérifier",
            },
            {
              label: "Dates de location",
              value: "Fin avant le début",
              error: "Vérifier l’ordre des dates",
            },
            {
              label: "Nombre d’invités",
              value: "Capacité ?",
              error: "Règle métier à confirmer",
            },
          ].map((field, i) => (
            <g key={field.label}>
              <Label x={119} y={171 + i * 64}>
                {field.label}
              </Label>
              <Box x={118} y={181 + i * 64} width={271} height={33}>
                <text x="131" y={203 + i * 64} fill={c.cream} fontSize="13">
                  {field.value}
                </text>
              </Box>
              <text x="418" y={203 + i * 64} fill={c.amber} fontSize="13">
                ! {field.error}
              </text>
            </g>
          ))}
        </>
      );
    case "espacement-faq-bureau":
      return (
        <>
          <Heading>Laisser respirer les questions.</Heading>
          <Label x={118} y={168}>
            ESPACEMENT RÉDUIT
          </Label>
          <rect x="118" y="182" width="562" height="33" rx="4" fill="#283949" />
          <text x="120" y="203" fill={c.cream} fontSize="16">
            Comment décorer un bureau avec une œuvre ?
          </text>
          <text x="660" y="203" fill={c.cream} fontSize="20">
            +
          </text>
          <Arrow x={393} y={230} down />
          <Label x={118} y={282}>
            PROPOSITION AVEC MARGES INTERNES
          </Label>
          <rect x="118" y="294" width="562" height="49" rx="5" fill="#283949" />
          <text x="138" y="325" fill={c.cream} fontSize="16">
            Comment décorer un bureau avec une œuvre ?
          </text>
          <text x="646" y="325" fill={c.lime} fontSize="20">
            +
          </text>
        </>
      );
    case "contenu-fiscal-bureau":
      return (
        <>
          <Heading>Une formulation à contextualiser.</Heading>
          <Box x={118} y={166} width={562} height={90}>
            <text x="141" y="205" fill={c.cream} fontSize="25">
              « Actif financier amortissable »
            </text>
            <Label x={141} y={235}>
              Passage éditorial signalé dans le relevé utilisateur
            </Label>
          </Box>
          <Label x={123} y={291} accent>
            01 Juridiction
          </Label>
          <Label x={304} y={291} accent>
            02 Conditions
          </Label>
          <Label x={487} y={291} accent>
            03 Relecture fiscale
          </Label>
          <Label x={160} y={329}>
            Validation par un spécialiste avant toute promesse générale
          </Label>
        </>
      );
    case "grille-peintures-anglaise":
      return (
        <>
          <Heading>Des cadres cohérents, des œuvres entières.</Heading>
          {[0, 1, 2].map((i) => (
            <Box key={i} x={118 + i * 194} y={165} width={178} height={164}>
              <Art
                x={i === 0 ? 167 : i === 1 ? 323 : 526}
                y={i === 1 ? 205 : 181}
                width={i === 0 ? 80 : i === 1 ? 144 : 112}
                height={i === 0 ? 119 : i === 1 ? 70 : 112}
              />
              <path d={`M${133 + i * 194} 315h145`} stroke={c.line} />
            </Box>
          ))}
          <Label x={221} y={349} accent>
            Contenants réguliers · images centrées · aucun recadrage
          </Label>
        </>
      );
    case "oeuvres-adoptees":
      return (
        <>
          <Heading>Identifier ce qui est encore disponible.</Heading>
          {["Disponible", "Adoptée", "Disponible"].map((state, i) => (
            <Box key={i} x={118 + i * 194} y={165} width={178} height={170}>
              <Art
                x={134 + i * 194}
                y={180}
                width={146}
                height={96}
                faded={i === 1}
              />
              <rect
                x={132 + i * 194}
                y="290"
                width="148"
                height="27"
                rx="4"
                fill={i === 1 ? c.dark : c.lime}
              />
              <text
                x={206 + i * 194}
                y="308"
                textAnchor="middle"
                fill={i === 1 ? c.muted : c.dark}
                fontSize="13"
              >
                {state}
              </text>
            </Box>
          ))}
        </>
      );
    case "liste-artistes":
      return (
        <>
          <Heading>Une progression lisible dans les artistes.</Heading>
          {[0, 1, 2].map((row) => (
            <g key={row}>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((col) => (
                <g key={col}>
                  <circle
                    cx={139 + col * 74}
                    cy={172 + row * 42}
                    r="12"
                    fill={c.panel}
                    stroke={c.line}
                  />
                  <path
                    d={`M${123 + col * 74} ${192 + row * 42}h32`}
                    stroke={c.line}
                  />
                </g>
              ))}
            </g>
          ))}
          <path d="M118 290H680" stroke={c.line} strokeDasharray="4 5" />
          <Label x={118} y={321}>
            PROPOSITION
          </Label>
          <PageButtons x={280} y={302} />
        </>
      );
    case "profil-incomplet":
      return (
        <>
          <Heading>Prévoir les informations manquantes.</Heading>
          <circle cx="183" cy="204" r="43" fill={c.panel} stroke={c.line} />
          <circle cx="183" cy="192" r="13" fill="#647055" />
          <path d="M160 227c0-25 46-25 46 0" fill="#647055" />
          <Label x={136} y={275}>
            Profil artiste
          </Label>
          <Box x={281} y={165} width={399} height={43} dashed>
            <Label x={300} y={192}>
              Biographie non renseignée
            </Label>
          </Box>
          <Box x={281} y={222} width={399} height={43} dashed>
            <Label x={300} y={249}>
              Localisation à compléter
            </Label>
          </Box>
          <Box x={281} y={279} width={399} height={43} dashed>
            <Label x={300} y={306}>
              Année absente → masquer la rubrique
            </Label>
          </Box>
        </>
      );
    case "carte-artiste-inactive":
      return (
        <>
          <Heading>Rendre le geste et son résultat explicites.</Heading>
          <Box x={144} y={160} width={200} height={172}>
            <circle cx="244" cy="205" r="26" fill="#647055" />
            <text
              x="244"
              y="258"
              textAnchor="middle"
              fill={c.cream}
              fontSize="18"
            >
              Carte artiste
            </text>
            <text
              x="244"
              y="294"
              textAnchor="middle"
              fill={c.lime}
              fontSize="13"
            >
              Cliquer pour retourner ↻
            </text>
          </Box>
          <Arrow x={383} y={240} />
          <Box x={457} y={160} width={200} height={172} dashed>
            <text
              x="557"
              y="211"
              textAnchor="middle"
              fill={c.cream}
              fontSize="20"
            >
              Verso attendu
            </text>
            <path
              d="M483 238h149m-149 16h127m-127 16h138"
              stroke={c.line}
              strokeWidth="5"
              strokeLinecap="round"
            />
            <text
              x="557"
              y="311"
              textAnchor="middle"
              fill={c.muted}
              fontSize="12"
            >
              Interaction à contrôler
            </text>
          </Box>
        </>
      );
    case "pickart-footer":
      return (
        <>
          <Heading>Conserver les repères jusqu’en bas de page.</Heading>
          <Label x={118} y={165}>
            PICKART · ARTISTES FAVORIS
          </Label>
          {[0, 1, 2].map((i) => (
            <Box key={i} x={118 + i * 194} y={182} width={178} height={79}>
              <circle cx={147 + i * 194} cy="210" r="14" fill="#647055" />
              <path
                d={`M${172 + i * 194} 206h98m-98 13h73`}
                stroke={c.line}
                strokeWidth="4"
              />
            </Box>
          ))}
          <Box x={118} y={283} width={562} height={54} dashed>
            <text
              x="400"
              y="315"
              textAnchor="middle"
              fill={c.lime}
              fontSize="15"
            >
              Zone du pied de page à retrouver dans le rendu
            </text>
          </Box>
        </>
      );
    case "echelle-tableau":
      return (
        <>
          <Heading>Vérifier dimensions, unités et mise en situation.</Heading>
          <Box x={118} y={160} width={337} height={169}>
            <path d="M132 289H441" stroke={c.line} />
            <rect
              x="166"
              y="263"
              width="238"
              height="37"
              rx="7"
              fill="#46513c"
            />
            <rect
              x="181"
              y="246"
              width="207"
              height="35"
              rx="8"
              fill="#59664a"
            />
            <Art x={242} y={182} width={56} height={51} />
            <path d="M242 173h56m-56-4v8m56-8v8" stroke={c.lime} />
            <Label x={221} y={317}>
              Décor schématique
            </Label>
          </Box>
          <Label x={482} y={187}>
            LARGEUR SIGNALÉE
          </Label>
          <text x="482" y="225" fill={c.cream} fontSize="30">
            ≈ 10 cm
          </text>
          <Label x={482} y={256}>
            Dimension à confirmer
          </Label>
          <Label x={482} y={282} accent>
            cm / pouces · ratio · échelle
          </Label>
          <Label x={482} y={309}>
            Ne pas agrandir arbitrairement
          </Label>
        </>
      );
    case "photos-notre-histoire":
      return (
        <>
          <Heading>Adapter la source à la taille d’affichage.</Heading>
          <Box x={118} y={163} width={260} height={166}>
            <g filter={`url(#${blurId})`}>
              <Art x={132} y={177} width={232} height={113} />
            </g>
            <Label x={136} y={313}>
              Source insuffisante · schéma flouté
            </Label>
          </Box>
          <Box x={422} y={163} width={260} height={166}>
            <Art x={436} y={177} width={232} height={113} />
            <Label x={440} y={313} accent>
              Source adaptée · proportions gardées
            </Label>
          </Box>
        </>
      );
    default:
      return (
        <>
          <Heading>Documenter pour mieux comprendre.</Heading>
          <Box x={118} y={166} width={562} height={150}>
            <Label x={143} y={203}>
              CONTEXTE → CONSTAT → IMPACT
            </Label>
            <path
              d="M143 228h478m-478 20h420m-420 20h449"
              stroke={c.line}
              strokeWidth="6"
              strokeLinecap="round"
            />
            <Label x={143} y={298} accent>
              Schéma pédagogique du sujet signalé
            </Label>
          </Box>
        </>
      );
  }
}

export function IssueIllustration({
  kind,
  ticket,
}: {
  kind: string;
  ticket?: string;
}) {
  const title =
    titles[ticket ?? ""] ??
    "Schéma pédagogique d’un constat du relevé utilisateur";
  const blurId = `issue-schematic-blur-${ticket ?? kind}`;
  return (
    <svg
      viewBox="0 0 800 440"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      style={{ display: "block", width: "100%", height: "auto" }}
    >
      <title>{title}</title>
      <defs>
        <filter id={blurId}>
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <rect width="800" height="440" rx="16" fill={c.bg} />
      <path d="M25 25H775V415H25Z" fill="none" stroke="#343c31" />
      <g fontFamily="Arial, sans-serif">
        <rect
          x="84"
          y="51"
          width="632"
          height="315"
          rx="12"
          fill={c.dark}
          stroke={c.line}
        />
        <path d="M84 89H716" stroke={c.line} />
        {[107, 122, 137].map((x) => (
          <circle key={x} cx={x} cy="70" r="3.5" fill="#6c775e" />
        ))}
        <text
          x="404"
          y="74"
          textAnchor="middle"
          fill={c.muted}
          fontSize="10"
          letterSpacing="1.5"
        >
          CONCEPT VISUEL DU CONSTAT
        </text>
        <Diagram ticket={ticket} blurId={blurId} />
        <text
          x="400"
          y="400"
          textAnchor="middle"
          fill={c.muted}
          fontSize="10"
          letterSpacing="1.15"
        >
          SCHÉMA EXPLICATIF · PAS UNE CAPTURE DU SITE
        </text>
      </g>
    </svg>
  );
}
