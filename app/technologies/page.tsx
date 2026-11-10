import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  Blocks,
  Braces,
  Github,
  Layers3,
  MonitorCheck,
  Palette,
  Type,
} from "lucide-react";
import { PageHeading, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "Next.js, React, TypeScript et CSS : les choix techniques derrière ce projet personnel consacré à l’expérience utilisateur de LOriginal.",
};

const technologies = [
  {
    name: "Next.js",
    version: "VERSION 16",
    className: "next-logo",
    logo: <span aria-hidden="true">N</span>,
    label: "LE CADRE DU PROJET",
    description:
      "Un point de départ solide pour organiser les quatre pages, leur navigation et leurs métadonnées. L’App Router permet de garder une structure lisible et de générer les pages côté serveur.",
    tags: ["App Router", "Pages serveur", "Métadonnées"],
    link: "https://nextjs.org/docs",
    detail: "Une structure pensée pour évoluer.",
  },
  {
    name: "React",
    version: "VERSION 19",
    className: "react-logo",
    logo: <Atom size={46} strokeWidth={1.4} aria-hidden="true" />,
    label: "DES INTERACTIONS UTILES",
    description:
      "Des composants réutilisables donnent au site sa cohérence. Les filtres, la recherche et les modales prennent vie côté client, tandis que les pages de présentation restent simples à consulter.",
    tags: ["Composants", "État local", "Interactions"],
    link: "https://fr.react.dev/learn",
    detail: "La bonne interaction, au bon endroit.",
  },
  {
    name: "TypeScript",
    version: "TYPAGE STRICT",
    className: "ts-logo",
    logo: <span aria-hidden="true">TS</span>,
    label: "UNE BASE PLUS FIABLE",
    description:
      "Les anomalies, leurs niveaux de gravité et les propositions d’amélioration sont décrits par des types. Cette structure aide à ajouter du contenu et à repérer les incohérences pendant le développement.",
    tags: ["Types de données", "Lisibilité", "Maintenance"],
    link: "https://www.typescriptlang.org/docs/",
    detail: "Moins d’incertitude quand le projet grandit.",
  },
  {
    name: "CSS moderne",
    version: "STYLE SUR MESURE",
    className: "css-logo",
    logo: <Palette size={38} strokeWidth={1.5} aria-hidden="true" />,
    label: "UNE IDENTITÉ À PART ENTIÈRE",
    description:
      "Une palette basalte, des accents citron et une typographie expressive. Les variables CSS, Grid et les règles responsive adaptent les mises en page aux petits comme aux grands écrans.",
    tags: ["Variables CSS", "Grid", "Responsive"],
    link: "https://developer.mozilla.org/fr/docs/Web/CSS",
    detail: "Une direction visuelle cohérente, partout.",
  },
];

export default function TechnologiesPage() {
  return (
    <div className="page technologies-page">
      <PageHeading
        eyebrow="LES TECHNOLOGIES DU PROJET"
        title="Sous le capot,"
        accent="des choix clairs."
        description="Une interface soignée commence par des fondations simples. Voici les outils qui donnent forme à ce projet, et le rôle concret de chacun."
      />

      <section aria-label="Les quatre fondations techniques">
        <SectionTitle
          index="01"
          title="Quatre fondations. Une même intention."
        />
        <div className="tech-grid">
          {technologies.map((technology) => (
            <article className="tech-card" key={technology.name}>
              <div className="tech-card-top">
                <span className={`tech-logo ${technology.className}`}>
                  {technology.logo}
                </span>
                <span className="tech-version">{technology.version}</span>
              </div>
              <span className="micro-label">{technology.label}</span>
              <h2>{technology.name}</h2>
              <p>{technology.description}</p>
              <div className="tech-tags">
                {technology.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="tech-card-footer">
                <span>{technology.detail}</span>
                <a
                  href={technology.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Documentation de ${technology.name} (nouvel onglet)`}
                >
                  Documentation <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture-section">
        <SectionTitle index="02" title="Comment tout s’articule." />
        <div className="architecture-panel">
          <div className="architecture-copy">
            <span className="micro-label">UNE STRUCTURE À TAILLE HUMAINE</span>
            <h3>
              Chaque pièce
              <br />a <em>sa place.</em>
            </h3>
            <p>
              Les pages organisent le parcours, les composants composent
              l’interface et les données alimentent les fiches. Le contenu peut
              ainsi évoluer sans refaire toute la présentation.
            </p>
          </div>
          <div className="architecture-flow">
            <div className="architecture-step">
              <span className="architecture-step-number">01</span>
              <span className="architecture-step-icon">
                <Layers3 size={21} />
              </span>
              <div>
                <h4>App Router</h4>
                <p>Une route pour chaque page du projet.</p>
              </div>
            </div>
            <ArrowRight
              className="architecture-arrow"
              size={19}
              aria-hidden="true"
            />
            <div className="architecture-step">
              <span className="architecture-step-number">02</span>
              <span className="architecture-step-icon">
                <Blocks size={21} />
              </span>
              <div>
                <h4>Composants React</h4>
                <p>Une interface commune, des interactions ciblées.</p>
              </div>
            </div>
            <ArrowRight
              className="architecture-arrow"
              size={19}
              aria-hidden="true"
            />
            <div className="architecture-step">
              <span className="architecture-step-number">03</span>
              <span className="architecture-step-icon">
                <Braces size={21} />
              </span>
              <div>
                <h4>Données typées</h4>
                <p>Des fiches structurées, faciles à enrichir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="tooling-strip">
        <div>
          <Type size={21} strokeWidth={1.5} />
          <span>
            <strong>Polices auto-hébergées</strong>
            <small>DM Sans & Instrument Serif</small>
          </span>
        </div>
        <div>
          <Blocks size={21} strokeWidth={1.5} />
          <span>
            <strong>Icônes Lucide</strong>
            <small>Un langage visuel cohérent</small>
          </span>
        </div>
        <div>
          <MonitorCheck size={21} strokeWidth={1.5} />
          <span>
            <strong>Playwright</strong>
            <small>Validation des parcours en navigateur</small>
          </span>
        </div>
      </div>

      <section className="repository-banner">
        <span className="repository-icon">
          <Github size={31} strokeWidth={1.5} />
        </span>
        <div>
          <span className="micro-label">
            LES IDÉES SE PARTAGENT AUSSI EN CODE
          </span>
          <h2>Explorez les coulisses.</h2>
          <p>Retrouvez la structure et le code du projet sur GitHub.</p>
        </div>
        <a
          className="button button-primary"
          href="https://github.com/VoltaYt/loriginal-audit-ameliorations"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le dépôt <ArrowUpRight size={17} />
          <span className="sr-only"> (nouvel onglet)</span>
        </a>
      </section>
    </div>
  );
}
