import type { Metadata } from "next";
import { ArrowUpRight, Atom, Github, Palette } from "lucide-react";
import { PageHeading, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "Un site créé avec Codex pour apprendre à maîtriser l’outil dans le cadre du stage chez LOriginal.",
};

const technologies = [
  {
    name: "Next.js",
    version: "VERSION 16",
    className: "next-logo",
    logo: <span aria-hidden="true">N</span>,
    description: "Le cadre qui organise les pages et la navigation du site.",
    link: "https://nextjs.org/docs",
  },
  {
    name: "React",
    version: "VERSION 19",
    className: "react-logo",
    logo: <Atom size={46} strokeWidth={1.4} aria-hidden="true" />,
    description: "Les composants et les interactions : recherche, filtres et modales.",
    link: "https://fr.react.dev/learn",
  },
  {
    name: "TypeScript",
    version: "TYPAGE STRICT",
    className: "ts-logo",
    logo: <span aria-hidden="true">TS</span>,
    description: "Des types pour structurer les données et repérer les erreurs de code.",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "CSS moderne",
    version: "STYLE SUR MESURE",
    className: "css-logo",
    logo: <Palette size={38} strokeWidth={1.5} aria-hidden="true" />,
    description: "Un fond basalte, des accents rouge feu et une mise en page adaptée à tous les écrans.",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS",
  },
];

export default function TechnologiesPage() {
  return (
    <div className="page technologies-page">
      <PageHeading
        eyebrow="LES TECHNOLOGIES DU PROJET"
        title="Créer pour"
        accent="apprendre."
        description="J’ai créé ce site à l’aide de Codex pour apprendre à maîtriser l’outil dans le cadre de mon stage chez LOriginal."
      />

      <section aria-label="Les quatre fondations techniques">
        <SectionTitle index="01" title="Les outils du site." />
        <div className="tech-grid">
          {technologies.map((technology) => (
            <article className="tech-card" key={technology.name}>
              <div className="tech-card-top">
                <span className={`tech-logo ${technology.className}`}>
                  {technology.logo}
                </span>
                <span className="tech-version">{technology.version}</span>
              </div>
              <h2>{technology.name}</h2>
              <p>{technology.description}</p>
              <div className="tech-card-footer">
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

      <section className="repository-banner">
        <span className="repository-icon">
          <Github size={31} strokeWidth={1.5} />
        </span>
        <div>
          <span className="micro-label">LE CODE DU PROJET</span>
          <h2>Les coulisses du site.</h2>
          <p>Le projet est disponible sur GitHub.</p>
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
