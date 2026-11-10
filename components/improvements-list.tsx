"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Accessibility,
  Check,
  ChevronDown,
  Compass,
  Image as ImageIcon,
  MessageSquare,
  Palette,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  anomalies,
  categories,
  improvements,
  type Category,
} from "@/lib/audit-data";

const icons: Record<string, LucideIcon> = {
  compass: Compass,
  accessibility: Accessibility,
  message: MessageSquare,
  palette: Palette,
  image: ImageIcon,
  zap: Zap,
};

export function ImprovementsList() {
  const [category, setCategory] = useState<Category | "Tous">("Tous");
  const filtered = improvements.filter(
    (improvement) => category === "Tous" || improvement.category === category,
  );

  return (
    <>
      <div className="improvement-filters">
        <div
          className="filter-tabs"
          role="group"
          aria-label="Filtrer les améliorations par catégorie"
        >
          {(["Tous", ...categories] as const).map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? "active" : ""}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <span className="micro-label" role="status" aria-live="polite">
          {filtered.length} {filtered.length > 1 ? "pistes" : "piste"}
        </span>
      </div>

      <div className="improvements-grid">
        {filtered.map((improvement) => {
          const Icon = icons[improvement.icon] ?? Sparkles;
          return (
            <article className="improvement-card" key={improvement.id}>
              <div className="improvement-topline">
                <div className="improvement-icon">
                  <Icon size={23} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <span className="micro-label">{improvement.category}</span>
              </div>

              <h3>{improvement.title}</h3>
              <p>{improvement.description}</p>

              <div className="ticket-links" aria-label="Constats associés">
                {improvement.ticketIds.map((id) => {
                  const ticket = anomalies.find((item) => item.id === id);
                  return ticket ? (
                    <Link
                      key={id}
                      href={`/anomalies?anomalie=${id}`}
                      aria-label={`Constat ${Number(ticket.number)} : ${ticket.title}`}
                    >
                      {Number(ticket.number)}
                    </Link>
                  ) : null;
                })}
              </div>

              <details className="improvement-details">
                <summary>
                  Voir les pistes concrètes
                  <ChevronDown size={17} aria-hidden="true" />
                </summary>
                <ul>
                  {improvement.details.map((detail) => (
                    <li key={detail}>
                      <Check size={15} aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </article>
          );
        })}
      </div>
    </>
  );
}
