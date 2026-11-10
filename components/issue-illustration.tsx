import type { ReactNode } from "react";

const c = {
  bg: "#191919",
  panel: "#222222",
  dark: "#121212",
  line: "#414141",
  muted: "#b6b1ae",
  text: "#f0ece8",
  accent: "#e1725d",
  red: "#b93b2c",
};

const titles: Record<string, string> = {
  "prix-incoherents": "Main au Doigt Levé : prix affiché de 7 200 025 dollars",
  "pagination-peintures": "Peintures ajoutées au défilement et longue liste d’artistes : proposer une pagination pour les deux catalogues",
  "livraison-incoherente": "Livraison : 13 pays dans le catalogue, partout dans le monde sur l’accueil",
  "tarif-programme-numerique": "Le programme numérique indique sans abonnement et 28 dollars par mois",
  "faq-programmes-artistes": "Deux réponses contradictoires sur les tirages et les œuvres numériques",
  "compteurs-artistes": "Plus de 850 artistes peintres et 13 724 artistes représentés",
  "titre-oeuvre-surcharge": "Le titre de l’œuvre contient dimensions, techniques, prix et devise",
  "villes-normalisation": "Localisations : levis, Lévis et Maple. ont.",
  "validation-location-galerie": "Formulaire : moins un invité, dates inversées et courriel allo",
  "espacement-faq-bureau": "FAQ Décore bureau : texte collé aux bords et proposition avec marges",
  "grille-peintures-anglaise": "Avant et après : grille irrégulière et contenants alignés, sans recadrer les œuvres",
  "oeuvres-adoptees": "L’étiquette Adopté est éloignée des informations de l’œuvre dans le catalogue",
  "profil-incomplet": "Le profil de Zen-ruffinen Véronique laisse un grand espace sans biographie",
  "carte-artiste-inactive": "La carte Créez-la avec Fish vik ne se retourne pas après le clic",
  "pickart-footer": "Artistes favoris PickArt : absence du pied de page habituel",
  "echelle-tableau": "Une œuvre de 10 par 76 centimètres paraît bien plus large dans sa prévisualisation",
  "photos-notre-histoire": "Photos d’équipe : définition insuffisante et proposition de sources adaptées",
};

function Text({
  x, y, children, size = 16, color = c.text, weight = 400, anchor,
}: {
  x: number; y: number; children: ReactNode; size?: number; color?: string;
  weight?: number; anchor?: "start" | "middle" | "end";
}) {
  return <text x={x} y={y} fill={color} fontSize={size} fontWeight={weight} textAnchor={anchor}>{children}</text>;
}

function Lines({ x, y, lines, size = 16, color = c.text, gap = 24 }: {
  x: number; y: number; lines: string[]; size?: number; color?: string; gap?: number;
}) {
  return <>{lines.map((line, i) => <Text key={i} x={x} y={y + i * gap} size={size} color={color}>{line}</Text>)}</>;
}

function Label({ x, y, children, accent = false }: {
  x: number; y: number; children: ReactNode; accent?: boolean;
}) {
  return <Text x={x} y={y} size={12} color={accent ? c.accent : c.muted} weight={600}>{children}</Text>;
}

function Panel({ x, y, width, height, children, accent = false, dashed = false }: {
  x: number; y: number; width: number; height: number; children?: ReactNode;
  accent?: boolean; dashed?: boolean;
}) {
  return <g><rect x={x} y={y} width={width} height={height} rx={10} fill={c.panel} stroke={accent ? c.accent : c.line} strokeDasharray={dashed ? "6 5" : undefined} />{children}</g>;
}

function Arrow({ x, y, down = false }: { x: number; y: number; down?: boolean }) {
  return <path d={down ? `M${x} ${y}v25m-6-6 6 6 6-6` : `M${x} ${y}h28m-6-6 6 6-6 6`} stroke={c.accent} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />;
}

function Art({ x, y, width, height }: { x: number; y: number; width: number; height: number }) {
  return <g>
    <rect x={x} y={y} width={width} height={height} fill="#3d2927" stroke="#79645f" />
    <path d={`M${x + width * .1} ${y + height * .85}L${x + width * .65} ${y + height * .12}L${x + width * .92} ${y + height * .7}L${x + width * .45} ${y + height * .95}Z`} fill="#a74a3a" />
    <path d={`M${x + width * .18} ${y + height * .1}L${x + width * .8} ${y + height * .84}M${x + width * .1} ${y + height * .6}L${x + width * .83} ${y + height * .32}`} stroke="#d4c0b5" strokeWidth={Math.max(2, width * .035)} />
  </g>;
}

function Pagination({ x, y }: { x: number; y: number }) {
  const labels = ["‹", "1", "…", "7", "8", "9", "…", "24", "›"];
  const step = 42;
  return <g>{labels.map((label, i) => <g key={i}>
    <rect x={x + i * step} y={y} width={step - 5} height={33} rx={5} fill={label === "8" ? c.red : c.dark} stroke={c.line} />
    <Text x={x + i * step + (step - 5) / 2} y={y + 22} size={14} anchor="middle">{label}</Text>
  </g>)}</g>;
}

function Footer({ x, y, width }: { x: number; y: number; width: number }) {
  return <g>
    <path d={`M${x} ${y}h${width}`} stroke={c.line} />
    {["Informations", "Liens utiles", "Nos adresses"].map((label, i) => <g key={label}>
      <Text x={x + 10 + i * (width / 3)} y={y + 24} size={11} weight={600}>{label}</Text>
      <path d={`M${x + 10 + i * (width / 3)} ${y + 36}h${width / 3 - 25}m-${width / 3 - 25} 13h${width / 3 - 45}`} stroke={c.line} strokeWidth={3} />
    </g>)}
    <Text x={x + width / 2} y={y + 78} size={11} color={c.muted} anchor="middle">© LOriginal · Tous droits réservés</Text>
  </g>;
}

function Avatar({ x, y, pixelated = false }: { x: number; y: number; pixelated?: boolean }) {
  return <g>
    <rect x={x} y={y} width={60} height={74} fill="#393536" />
    {pixelated ? <>
      <path d={`M${x + 18} ${y + 10}h24v12h6v22H${x + 12}V${y + 22}h6Z`} fill="#b7a29b" />
      <path d={`M${x + 6} ${y + 49}h48v25H${x + 6}Z`} fill="#6b4d49" />
      <path d={`M${x + 20} ${y + 27}h7m8 0h7`} stroke="#65534e" strokeWidth={7} />
    </> : <>
      <ellipse cx={x + 30} cy={y + 28} rx={17} ry={21} fill="#b7a29b" />
      <path d={`M${x + 6} ${y + 74}v-12c0-23 48-23 48 0v12Z`} fill="#6b4d49" />
      <path d={`M${x + 21} ${y + 27}h5m8 0h5`} stroke="#65534e" strokeWidth={2} />
    </>}
  </g>;
}

function Diagram({ ticket }: { ticket?: string }) {
  switch (ticket) {
    case "prix-incoherents":
      return <>
        <Label x={40} y={106}>CATALOGUE DES PEINTURES</Label>
        <Art x={40} y={124} width={186} height={246} />
        <Panel x={252} y={124} width={508} height={246}>
          <Text x={276} y={163} size={23} weight={600}>Main au Doigt Levé</Text>
          <Text x={276} y={193} color={c.muted}>par Samantha Regan</Text>
          <Text x={276} y={224} color={c.muted}>Œuvre originale · 4 × 30 po</Text>
          <path d="M276 245h460" stroke={c.line} />
          <Label x={276} y={276}>PRIX AFFICHÉ</Label>
          <Text x={276} y={323} size={38} color={c.accent} weight={600}>7 200 025 $</Text>
          <path d="M276 335h235" stroke={c.accent} strokeWidth={2} />
        </Panel>
      </>;
    case "pagination-peintures":
      return <>
        <Panel x={40} y={108} width={344} height={173}>
          <Label x={60} y={136}>PEINTURES : CHARGEMENT AU DÉFILEMENT</Label>
          {[0, 1, 2, 3].map(i => <rect key={i} x={60 + i * 77} y={153} width={64} height={53} rx={4} fill="#393333" />)}
          <path d="M60 219h304" stroke={c.line} strokeDasharray="5 5" />
          <Text x={60} y={247} size={15} color={c.accent}>De nouvelles œuvres près du footer.</Text>
          <Text x={60} y={269} size={14} color={c.muted}>Aucune pagination.</Text>
        </Panel>
        <Panel x={408} y={108} width={352} height={173}>
          <Label x={428} y={136}>ARTISTES : UNE LONGUE LISTE</Label>
          {[0, 1, 2].map(row => <g key={row}>{[0, 1, 2, 3, 4, 5].map(col => <rect key={col} x={428 + col * 52} y={153 + row * 27} width={42} height={20} rx={3} fill="#333333" />)}</g>)}
          <Text x={428} y={269} size={14} color={c.muted}>Aucune pagination.</Text>
        </Panel>
        <Label x={40} y={315} accent>PROPOSITION POUR LES DEUX CATALOGUES</Label>
        <Panel x={40} y={332} width={720} height={64} accent><Pagination x={211} y={348} /></Panel>
        <Text x={400} y={423} size={15} anchor="middle" color={c.muted}>Parcourir par pages et garder le pied de page accessible.</Text>
      </>;
    case "livraison-incoherente":
      return <>
        <Panel x={40} y={112} width={344} height={232}>
          <Label x={62} y={144}>FAQ DU CATALOGUE</Label>
          <Lines x={62} y={179} lines={["La livraison est-elle incluse ?", "Oui, vers 13 pays…"]} size={17} />
          <Text x={62} y={257} size={38} weight={600}>13 pays</Text>
          <Lines x={62} y={290} lines={["Canada · États-Unis · France", "Délai : 7 à 15 jours"]} size={14} color={c.muted} />
        </Panel>
        <Panel x={408} y={112} width={352} height={232} accent>
          <Label x={430} y={144}>FAQ DE L’ACCUEIL</Label>
          <Lines x={430} y={179} lines={["Nous livrons partout", "dans le monde."]} size={21} />
          <Text x={430} y={257} size={34} color={c.accent}>Monde entier</Text>
          <Text x={430} y={290} size={14} color={c.muted}>Délai : 7 à 15 jours ouvrables</Text>
        </Panel>
        <Text x={400} y={385} anchor="middle" color={c.muted}>Une même information à harmoniser.</Text>
      </>;
    case "tarif-programme-numerique":
      return <>
        <Label x={40} y={109}>SUR LA MÊME PAGE DU PROGRAMME NUMÉRIQUE</Label>
        <Panel x={40} y={132} width={720} height={223}>
          <Text x={68} y={173} size={24} weight={600}>Vos images en édition chez L’Original</Text>
          <Text x={68} y={211} size={20}>Sans abonnement : ce parcours ne vit que</Text>
          <Text x={68} y={240} size={20}>de la redevance par tirage.</Text>
          <rect x={68} y={264} width={663} height={42} rx={21} fill={c.red} />
          <Text x={400} y={291} size={17} anchor="middle" weight={600}>Postuler à notre curation →</Text>
          <Text x={400} y={335} anchor="middle" size={20} color={c.accent}>28 $ / mois · Sans engagement</Text>
        </Panel>
      </>;
    case "faq-programmes-artistes":
      return <>
        <Label x={40} y={109}>DEUX RÉPONSES SUR LE PROGRAMME NUMÉRIQUE</Label>
        <Panel x={40} y={130} width={720} height={103}>
          <Text x={62} y={161} size={18} weight={600}>Puis-je vendre mes prints ou œuvres digitales ?</Text>
          <Text x={62} y={190} size={17}>Uniquement les œuvres originales physiques.</Text>
          <Text x={62} y={216} size={17} color={c.accent}>Les impressions et œuvres digitales ne sont pas autorisées.</Text>
        </Panel>
        <Panel x={40} y={255} width={720} height={103} accent>
          <Text x={62} y={286} size={18} weight={600}>Puis-je vendre mes tirages ou œuvres numériques ?</Text>
          <Text x={62} y={315} size={17}>Ce parcours accueille les tirages et les œuvres numériques,</Text>
          <Text x={62} y={341} size={17} color={c.accent}>et eux seuls.</Text>
        </Panel>
      </>;
    case "compteurs-artistes":
      return <>
        <Panel x={40} y={122} width={344} height={220}>
          <Label x={62} y={155}>PAGE ARTISTES</Label>
          <Text x={62} y={190} size={21} weight={600}>Nos artistes peintres</Text>
          <Text x={62} y={249} size={49} weight={600}>850</Text>
          <Text x={62} y={290} color={c.muted}>« Plus de 850 artistes vivants »</Text>
        </Panel>
        <Panel x={408} y={122} width={352} height={220} accent>
          <Label x={430} y={155}>PROGRAMME NUMÉRIQUE</Label>
          <Text x={430} y={190} size={21} weight={600}>Artistes représentés</Text>
          <Text x={430} y={249} size={49} color={c.accent} weight={600}>13 724</Text>
          <Text x={430} y={290} color={c.muted}>« 13724 artistes représentés »</Text>
        </Panel>
        <Text x={400} y={382} anchor="middle" color={c.muted}>Préciser ce que chaque compteur représente.</Text>
      </>;
    case "titre-oeuvre-surcharge":
      return <>
        <Label x={40} y={108}>TITRE AFFICHÉ DANS LA CAPTURE</Label>
        <Panel x={40} y={124} width={720} height={115}>
          <Lines x={62} y={155} size={21} lines={["“Another Year I Cannot Do Alone” 30x40 | Acrylic,", "Watercolor, Oil 12,800,000.00 USD (USD)"]} gap={30} />
          <Text x={62} y={219} color={c.muted}>40 × 30 po</Text>
          <Text x={736} y={219} size={20} anchor="end" color={c.accent}>15 360 080 $</Text>
        </Panel>
        <Arrow x={400} y={253} down />
        <Panel x={40} y={298} width={720} height={83} accent>
          <Text x={62} y={330} size={22} weight={600}>Another Year I Cannot Do Alone</Text>
          <Text x={62} y={360} color={c.muted}>Dimensions · Techniques · Prix : des champs séparés</Text>
        </Panel>
      </>;
    case "villes-normalisation":
      return <>
        {[
          { name: "Abie", city: "levis, Canada", note: "Majuscule et accent manquants" },
          { name: "A.Marie Langlois", city: "Lévis, Canada", note: "Forme cohérente" },
          { name: "Adi Zur", city: "Maple. ont., Canada", note: "Ponctuation et province à uniformiser" },
        ].map((item, i) => <Panel key={item.name} x={40} y={112 + i * 88} width={720} height={73}>
          <Text x={60} y={141 + i * 88} size={19} weight={600}>{item.name}</Text>
          <Text x={60} y={168 + i * 88} size={17} color={c.accent}>{item.city}</Text>
          <Text x={364} y={155 + i * 88} size={16} color={c.muted}>{item.note}</Text>
        </Panel>)}
      </>;
    case "validation-location-galerie":
      return <>
        <Label x={40} y={108}>DEMANDE DE RÉSERVATION</Label>
        <Panel x={40} y={124} width={720} height={256}>
          {[
            ["Nombre d’invités", "−1", "Un nombre négatif est accepté"],
            ["Dates", "09/11 → 06/11/2026", "La fin précède le début"],
            ["Courriel", "allo", "Le format n’est pas signalé"],
          ].map(([label, value, note], i) => <g key={label}>
            <Label x={62} y={153 + i * 74}>{label.toUpperCase()}</Label>
            <rect x={62} y={163 + i * 74} width={283} height={33} rx={5} fill={c.dark} stroke={c.line} />
            <Text x={74} y={186 + i * 74} size={18}>{value}</Text>
            <Text x={369} y={186 + i * 74} size={17} color={c.accent}>{note}</Text>
          </g>)}
        </Panel>
      </>;
    case "espacement-faq-bureau":
      return <>
        <Label x={40} y={108}>TEXTE COLLÉ AUX BORDS</Label>
        <rect x={40} y={128} width={720} height={76} rx={38} fill="#252a31" />
        <Lines x={41} y={155} size={18} lines={["Est-ce que l’œuvre risque de distraire mes clients ou mes collaborateurs", "pendant les réunions ?"]} gap={26} />
        <Text x={744} y={174} size={24}>›</Text>
        <path d="M42 133v64m718-64v64" stroke={c.accent} strokeWidth={2} />
        <Arrow x={400} y={222} down />
        <Label x={40} y={283} accent>PROPOSITION AVEC MARGES INTERNES</Label>
        <rect x={40} y={302} width={720} height={83} rx={38} fill="#252a31" stroke={c.accent} />
        <Lines x={66} y={335} size={18} lines={["Est-ce que l’œuvre risque de distraire mes clients", "ou mes collaborateurs pendant les réunions ?"]} gap={26} />
        <Text x={714} y={351} size={24} color={c.accent}>›</Text>
      </>;
    case "grille-peintures-anglaise":
      return <>
        <Label x={40} y={107}>AVANT : HAUTEURS IRRÉGULIÈRES</Label>
        <Label x={425} y={107} accent>APRÈS : CONTENANTS ALIGNÉS</Label>
        {[0, 1, 2].map(i => <g key={i}>
          <rect x={40 + i * 105} y={127} width={92} height={[144, 228, 179][i]} fill="#303030" stroke={c.line} />
          <rect x={54 + i * 105} y={144} width={64} height={[95, 178, 127][i]} fill="#74615b" />
          <path d={`M${48 + i * 105} ${[287, 371, 322][i]}h75`} stroke={c.line} strokeWidth={4} />
          <rect x={425 + i * 105} y={127} width={92} height={228} fill="#303030" stroke={c.accent} />
          <rect x={439 + i * 105} y={144 + [42, 0, 25][i]} width={64} height={[95, 178, 127][i]} fill="#74615b" />
          <path d={`M${433 + i * 105} 371h75`} stroke={c.line} strokeWidth={4} />
        </g>)}
        <Arrow x={372} y={238} />
        <Text x={400} y={414} size={15} anchor="middle" color={c.muted}>Même format d’œuvre avant / après : aucun recadrage.</Text>
      </>;
    case "oeuvres-adoptees":
      return <>
        <Panel x={40} y={111} width={281} height={280}>
          <Art x={61} y={132} width={239} height={174} />
          <rect x={61} y={132} width={85} height={25} fill={c.dark} />
          <Text x={71} y={150} size={12} weight={600}>ADOPTÉ</Text>
          <Text x={61} y={337} size={18} weight={600}>Lucie</Text>
          <Text x={61} y={365} size={15} color={c.muted}>par Véro Saumure · 20 × 20 po</Text>
        </Panel>
        <Label x={355} y={147}>DANS LE CATALOGUE D’ACHAT</Label>
        <Lines x={355} y={185} lines={["Œuvres vendues et disponibles", "apparaissent ensemble.", "Le badge en haut de l’image", "s’éloigne des informations", "quand la carte est très haute."]} size={18} gap={29} />
        <rect x={355} y={341} width={405} height={45} rx={7} fill={c.dark} stroke={c.accent} />
        <Text x={374} y={369} size={17} color={c.accent}>Proposition : filtre « Disponibles »</Text>
      </>;
    case "profil-incomplet":
      return <>
        <Panel x={40} y={111} width={720} height={278}>
          <Art x={60} y={133} width={139} height={173} />
          <Text x={222} y={160} size={25} weight={600}>Zen-ruffinen Véronique</Text>
          <rect x={222} y={184} width={299} height={176} rx={6} fill="none" stroke={c.accent} strokeDasharray="6 5" />
          <Lines x={242} y={253} lines={["Biographie et ville", "non renseignées", "→ grand espace vide"]} size={18} gap={27} color={c.muted} />
          <Panel x={545} y={133} width={194} height={136}>
            <Label x={561} y={160}>SUR MESURE</Label>
            <Text x={561} y={191} size={18}>À partir de 1 825 $</Text>
            <rect x={561} y={213} width={160} height={31} rx={15} fill={c.red} />
            <Text x={641} y={234} size={13} anchor="middle">Suivre l’artiste</Text>
          </Panel>
          <Text x={60} y={345} size={15} color={c.muted}>1 œuvre disponible</Text>
        </Panel>
      </>;
    case "carte-artiste-inactive":
      return <>
        <Panel x={63} y={110} width={218} height={247}>
          <path d="M75 130l192 172m-192-30 154-151m-154 65 192 159" stroke="#383333" strokeWidth={12} />
          <Text x={172} y={207} size={25} anchor="middle" weight={600}>Créez-la avec</Text>
          <Text x={172} y={241} size={25} anchor="middle" weight={600}>Fish vik.</Text>
          <Label x={118} y={329}>L’ORIGINAL</Label>
        </Panel>
        <Text x={172} y={390} size={17} color={c.accent} anchor="middle">↻ Retournez la carte</Text>
        <Arrow x={312} y={236} />
        <Panel x={374} y={134} width={364} height={198} accent dashed>
          <Text x={398} y={175} size={22} weight={600}>Le clic ne change rien.</Text>
          <Lines x={398} y={215} lines={["Le verso annoncé", "reste inaccessible."]} size={22} gap={34} color={c.muted} />
          <Text x={398} y={304} size={15} color={c.accent}>Rétablir l’interaction.</Text>
        </Panel>
      </>;
    case "pickart-footer":
      return <>
        <Label x={40} y={107}>ARTISTES FAVORIS · PICKART</Label>
        <Label x={425} y={107} accent>PIED DE PAGE HABITUEL</Label>
        <Panel x={40} y={123} width={328} height={261}>
          <rect x={57} y={140} width={294} height={109} fill="#333333" />
          <Text x={75} y={181} size={22} weight={600}>Votre sélection</Text>
          <Text x={75} y={213} size={15} color={c.muted}>Après les swipes</Text>
          <path d="M57 267h294" stroke={c.line} />
          <Text x={75} y={291} size={13}>Sauvegarder · Partager</Text>
          <rect x={57} y={310} width={294} height={56} rx={5} fill="none" stroke={c.accent} strokeDasharray="6 5" />
          <Text x={204} y={344} anchor="middle" size={17} color={c.accent}>Pied de page absent</Text>
        </Panel>
        <Panel x={425} y={123} width={335} height={261}>
          <rect x={442} y={140} width={301} height={109} fill="#333333" />
          <Text x={461} y={202} size={22} weight={600}>Contenu du site</Text>
          <Footer x={442} y={271} width={301} />
        </Panel>
        <Arrow x={383} y={251} />
      </>;
    case "echelle-tableau":
      return <>
        <Label x={40} y={108}>PRÉVISUALISATION</Label>
        <Label x={425} y={108}>« VOIR CHEZ MOI » · TAILLE RÉELLE</Label>
        <Panel x={40} y={124} width={328} height={252}>
          <rect x={57} y={140} width={294} height={176} fill="#373433" />
          <Art x={162} y={154} width={105} height={144} />
          <path d="M58 316h292" stroke={c.line} strokeWidth={3} />
          <Text x={65} y={348} size={15} color={c.muted}>L’œuvre paraît très large dans le décor.</Text>
        </Panel>
        <Panel x={425} y={124} width={335} height={252}>
          <rect x={442} y={140} width={301} height={176} fill="#373433" />
          <Art x={575} y={170} width={7} height={53} />
          <path d="M566 165h25m-25-5v10m25-10v10" stroke={c.accent} />
          <Text x={578} y={157} size={13} anchor="middle" color={c.accent}>10 cm</Text>
          <Text x={596} y={201} size={13} color={c.muted}>76 cm</Text>
          <rect x={476} y={264} width={219} height={40} rx={10} fill="#68615c" />
          <rect x={487} y={252} width={197} height={31} rx={9} fill="#807973" />
          <Text x={592} y={348} size={15} anchor="middle" color={c.muted}>À côté d’un canapé de 2,10 m.</Text>
        </Panel>
        <Text x={400} y={413} anchor="middle" size={15} color={c.accent}>Comparer les deux rendus aux dimensions annoncées : 10 × 76 cm.</Text>
      </>;
    case "photos-notre-histoire":
      return <>
        <Label x={40} y={108}>AVANT : PHOTOS PEU DÉFINIES</Label>
        <Label x={425} y={108} accent>PROPOSITION : SOURCES ADAPTÉES</Label>
        {[0, 1, 2].map(i => <g key={i}>
          <Panel x={40} y={124 + i * 88} width={328} height={80}>
            <Avatar x={44} y={127 + i * 88} pixelated />
            <path d={`M120 ${145 + i * 88}h170m-170 17h219m-219 17h201`} stroke={c.line} strokeWidth={4} />
          </Panel>
          <Panel x={425} y={124 + i * 88} width={335} height={80}>
            <Avatar x={429} y={127 + i * 88} />
            <path d={`M505 ${145 + i * 88}h170m-170 17h219m-219 17h201`} stroke={c.line} strokeWidth={4} />
          </Panel>
        </g>)}
        <Arrow x={383} y={247} />
      </>;
    default:
      return <Panel x={40} y={124} width={720} height={240}><Text x={65} y={180} size={24}>Comprendre le problème et proposer une correction.</Text></Panel>;
  }
}

const headings: Record<string, string> = {
  "prix-incoherents": "Un montant qui surprend.",
  "pagination-peintures": "Paginer les peintures et les artistes.",
  "livraison-incoherente": "Deux réponses sur la livraison.",
  "tarif-programme-numerique": "Sans abonnement… ou 28 $ par mois ?",
  "faq-programmes-artistes": "Des critères d’admission contradictoires.",
  "compteurs-artistes": "Des chiffres sans périmètre commun.",
  "titre-oeuvre-surcharge": "Un titre qui contient trop d’informations.",
  "villes-normalisation": "Harmoniser les localisations.",
  "validation-location-galerie": "Des saisies invalides sans message.",
  "espacement-faq-bureau": "Donner de l’espace aux questions.",
  "grille-peintures-anglaise": "Aligner les cadres, préserver les formats.",
  "oeuvres-adoptees": "Mieux distinguer les œuvres adoptées.",
  "profil-incomplet": "Un grand blanc dans le profil.",
  "carte-artiste-inactive": "Une action sans résultat.",
  "pickart-footer": "Retrouver les liens du pied de page.",
  "echelle-tableau": "Une échelle différente selon le rendu.",
  "photos-notre-histoire": "Des portraits qui manquent de netteté.",
};

export function IssueIllustration({ kind, ticket }: { kind: string; ticket?: string }) {
  const title = titles[ticket ?? ""] ?? "Illustration du constat";
  return <svg
    viewBox="0 0 800 440"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
    data-kind={kind}
    style={{ display: "block", width: "100%", height: "auto" }}
  >
    <title>{title}</title>
    <rect width={800} height={440} rx={12} fill={c.bg} />
    <g fontFamily="Arial, sans-serif">
      <Text x={40} y={55} size={26} weight={600}>{headings[ticket ?? ""] ?? "Observer pour améliorer."}</Text>
      <path d="M40 76h720" stroke={c.line} />
      <Diagram ticket={ticket} />
    </g>
  </svg>;
}
