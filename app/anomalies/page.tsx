import type { Metadata } from "next";
import { Suspense } from "react";
import { AnomaliesExplorer } from "@/components/anomalies-explorer";
import { PageHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Les anomalies" };

export default function AnomaliesPage() {
  return (
    <div className="page anomalies-page">
      <PageHeading
        eyebrow="OBSERVER & COMPRENDRE"
        title="Les détails qui"
        accent="font la différence."
        description="Les problèmes repérés sur loriginal.org et les pistes pour les corriger."
      />
      <Suspense
        fallback={<div className="loading-state">Chargement des constats…</div>}
      >
        <AnomaliesExplorer />
      </Suspense>
    </div>
  );
}
