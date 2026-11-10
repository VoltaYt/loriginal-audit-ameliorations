import type { Metadata } from "next";
import { Suspense } from "react";
import { AnomaliesExplorer } from "@/components/anomalies-explorer";
import { AuditNotice, PageHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Les anomalies" };

export default function AnomaliesPage() {
  return (
    <div className="page anomalies-page">
      <PageHeading
        eyebrow="02 / OBSERVER & COMPRENDRE"
        title="Les détails qui"
        accent="font la différence."
        description="Un espace pour documenter les points de friction, comprendre leur impact et ouvrir la voie à une meilleure expérience."
      />
      <AuditNotice />
      <Suspense
        fallback={<div className="loading-state">Chargement des constats…</div>}
      >
        <AnomaliesExplorer />
      </Suspense>
    </div>
  );
}
