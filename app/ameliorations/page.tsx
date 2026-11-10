import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImprovementsList } from "@/components/improvements-list";
import { PageHeading, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Améliorations proposées",
  description:
    "Six pistes d’amélioration pour le site LOriginal, proposées dans le cadre du stage.",
};

export default function ImprovementsPage() {
  return (
    <div className="page improvements-page">
      <PageHeading
        eyebrow="DES OBSERVATIONS AUX SOLUTIONS"
        title="Et si on allait"
        accent="plus loin ?"
        description="Six pistes pour rendre le site LOriginal plus simple et agréable à utiliser."
      />

      <section aria-label="Les pistes d’amélioration">
        <SectionTitle index="01" title="Les pistes d’amélioration" />
        <ImprovementsList />
      </section>

      <div className="improvement-bottom">
        <div>
          <span className="micro-label">LES CONSTATS À L’ORIGINE DES IDÉES</span>
          <p>Retrouvez les problèmes repérés sur le site.</p>
        </div>
        <Link className="button button-secondary" href="/anomalies">
          Explorer les anomalies <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
