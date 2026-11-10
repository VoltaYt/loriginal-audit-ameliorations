"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowUpRight, Search, X } from "lucide-react";
import { anomalies, categories } from "@/lib/audit-data";
import { IssueIllustration } from "@/components/issue-illustration";
import { IssueModal } from "@/components/issue-modal";

export function AnomaliesExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Toutes");
  const openerRef = useRef<HTMLElement | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestedId = searchParams.get("anomalie");
  const selectedId = requestedId === "liste-artistes" ? "pagination-peintures" : requestedId;
  const selected = anomalies.find((item) => item.id === selectedId);
  useEffect(() => {
    if (!selected && openerRef.current) {
      openerRef.current.focus();
      openerRef.current = null;
    }
  }, [selected]);
  const normalized = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("fr");
  const filtered = anomalies
    .filter(
      (item) =>
        (category === "Toutes" || item.category === category) &&
        normalized(
          `${item.number} ${Number(item.number)} ${item.title} ${item.summary} ${item.category} ${item.description} ${item.page}`,
        ).includes(normalized(query.trim())),
    )
    .sort((a, b) => Number(a.number) - Number(b.number));
  const reset = () => {
    setQuery("");
    setCategory("Toutes");
  };
  const open = (id: string) => {
    if (!selected && document.activeElement instanceof HTMLElement) {
      openerRef.current = document.activeElement;
    }
    router.replace(`/anomalies?anomalie=${encodeURIComponent(id)}`, {
      scroll: false,
    });
  };
  const close = () => router.replace("/anomalies", { scroll: false });

  return (
    <>
      <div className="explorer-toolbar">
        <label className="search-field">
          <Search size={18} />
          <span className="sr-only">Rechercher une anomalie</span>
          <input
            type="search"
            placeholder="Rechercher une anomalie…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && (
            <button
              aria-label="Effacer la recherche"
              onClick={() => setQuery("")}
            >
              <X size={15} />
            </button>
          )}
        </label>
      </div>
      <div className="filter-bar">
        <div
          className="filter-tabs"
          role="group"
          aria-label="Filtrer les anomalies par catégorie"
        >
          {["Toutes", ...categories].map((item) => (
            <button
              key={item}
              aria-pressed={category === item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
              {item === "Toutes" && <span>{anomalies.length}</span>}
            </button>
          ))}
        </div>
      </div>
      <div className="results-heading">
        <p aria-live="polite">
          {filtered.length}{" "}
          {filtered.length > 1 ? "constats affichés" : "constat affiché"}
        </p>
        <span>
          CLIQUEZ SUR UNE FICHE POUR L’EXPLORER <ArrowUpRight size={13} />
        </span>
      </div>
      {selectedId && !selected && (
        <div className="demo-notice">
          <p>Cette fiche n’existe pas.</p>
          <button className="text-button" onClick={close}>
            Revenir à la liste <X size={14} />
          </button>
        </div>
      )}
      {filtered.length ? (
        <div className="anomalies-grid">
          {filtered.map((item) => (
            <button
              key={item.id}
              className="anomaly-card"
              onClick={() => open(item.id)}
              aria-haspopup="dialog"
              aria-label={`Voir le détail ${Number(item.number)} : ${item.title}`}
            >
              <div className="anomaly-visual">
                <IssueIllustration kind={item.illustration} ticket={item.id} />
                <span className="visual-number">
                  {Number(item.number).toString().padStart(2, "0")}
                </span>
                <span className="visual-expand">
                  <ArrowUpRight size={19} />
                </span>
              </div>
              <div className="anomaly-card-body">
                <div className="card-topline">
                  <span className="micro-label">{item.category}</span>
                </div>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <div className="card-bottom">
                  <span>
                    Explorer le constat <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={32} strokeWidth={1} />
          <h2>Aucun constat ne correspond.</h2>
          <p>Essayez un autre terme ou élargissez vos filtres.</p>
          <button className="button button-primary" onClick={reset}>
            Réinitialiser les filtres <ArrowUpRight size={16} />
          </button>
        </div>
      )}
      {selected && (
        <IssueModal
          key={selected.id}
          item={selected}
          onClose={close}
          onNavigate={open}
        />
      )}
    </>
  );
}
