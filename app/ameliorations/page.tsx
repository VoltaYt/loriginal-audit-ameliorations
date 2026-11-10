import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { ImprovementsList } from "@/components/improvements-list";
import { AuditNotice, PageHeading, SectionTitle } from "@/components/ui";
import { principles } from "@/lib/audit-data";

export const metadata: Metadata = {
  title: "Améliorations proposées",
  description:
    "Des pistes pour une expérience plus claire, accessible et agréable. Propositions issues des 20 points du relevé LOriginal du 9 novembre 2026.",
};

export default function ImprovementsPage() {
  return (
    <div className="page improvements-page">
      <PageHeading
        eyebrow="DES OBSERVATIONS AUX SOLUTIONS"
        title="Et si on allait"
        accent="plus loin ?"
        description="Des pistes concrètes pour faire évoluer l’expérience, en gardant ce qui rend LOriginal singulier."
      />

      <AuditNotice />

      <section className="improvement-intro" aria-labelledby="approach-title">
        <div>
          <span className="micro-label">LA DÉMARCHE</span>
          <h2 id="approach-title">Améliorer avec intention.</h2>
        </div>
        <p>
          Une bonne amélioration commence par comprendre un usage. Ces pistes
          privilégient la clarté, le confort et l’accessibilité : elles sont
          reliées aux 20 points du relevé et restent à ajuster aux besoins du
          site.
        </p>
      </section>

      <section
        className="principle-grid"
        aria-label="Les trois étapes de la démarche"
      >
        {principles.map((principle, index) => (
          <article className="principle-card" key={principle.title}>
            <div className="improvement-topline">
              <span className="micro-label">0{index + 1}</span>
              <MoveUpRight size={18} aria-hidden="true" />
            </div>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </section>

      <section aria-label="Les pistes d’amélioration">
        <SectionTitle index="01" title="Les pistes d’amélioration" />
        <p className="improvement-context">
          Les niveaux d’impact et d’effort sont indicatifs : leur estimation
          devra être validée avec le périmètre réel du projet.
        </p>
        <ImprovementsList />
      </section>

      <div className="improvement-bottom">
        <div>
          <span className="micro-label">REMETTRE LES IDÉES EN CONTEXTE</span>
          <p>Chaque piste part d’une expérience à comprendre.</p>
        </div>
        <Link className="button button-secondary" href="/anomalies">
          Explorer les anomalies <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
