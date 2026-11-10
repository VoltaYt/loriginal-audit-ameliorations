"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ImageIcon,
  Lightbulb,
  MapPin,
  Target,
  X,
} from "lucide-react";
import Image from "next/image";
import { anomalies, type Anomaly } from "@/lib/audit-data";
import { IssueIllustration } from "@/components/issue-illustration";
import { Severity } from "@/components/ui";

export function IssueModal({
  item,
  onClose,
  onNavigate,
}: {
  item: Anomaly;
  onClose: () => void;
  onNavigate: (id: string) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const index = anomalies.findIndex((anomaly) => anomaly.id === item.id);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    if (dialog && !dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="issue-dialog"
      aria-labelledby="issue-title"
      aria-describedby="issue-description"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const box = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < box.left ||
            event.clientX > box.right ||
            event.clientY < box.top ||
            event.clientY > box.bottom
          )
            onClose();
        }
      }}
    >
      <div className="modal-top">
        <span className="micro-label">LE CONSTAT / #{Number(item.number)}</span>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label="Fermer les détails"
          autoFocus
        >
          <X size={21} />
        </button>
      </div>
      <div className="modal-scroll">
        <div className="modal-heading">
          <div className="modal-badges">
            <span className="category-badge">{item.category}</span>
            <Severity level={item.severity} />
            <span className="unconfirmed">{item.status}</span>
          </div>
          <h2 id="issue-title">{item.title}</h2>
          <p id="issue-description">{item.summary}</p>
        </div>
        <div className="source-context">
          <span>
            <MapPin size={13} />
            {item.page}
          </span>
        </div>
        {item.screenshots.length ? (
          <div className="evidence-gallery">
            {item.screenshots.map((shot) => (
              <figure key={shot.src}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 700px) 90vw, 730px"
                  className="evidence-image"
                />
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <>
            <div className="modal-image">
              <IssueIllustration kind={item.illustration} ticket={item.id} />
            </div>
            <div className="image-caption">
              <ImageIcon size={14} />
              <span>
                Illustration pédagogique · Capture d’origine non fournie pour ce
                constat.
              </span>
            </div>
          </>
        )}
        <div className="modal-description">
          <span className="micro-label">COMPRENDRE LE PROBLÈME</span>
          <p>{item.description}</p>
        </div>
        <div className="expected-box">
          <h3>
            <Check size={16} /> Le résultat attendu
          </h3>
          <p>{item.expected}</p>
        </div>
        <div className="impact-box">
          <Target size={20} />
          <div>
            <h3>L’impact potentiel</h3>
            <p>{item.impact}</p>
          </div>
        </div>
        <div className="modal-steps">
          <h3>Comment vérifier ce point</h3>
          <ol>
            {item.steps.map((step, i) => (
              <li key={step}>
                <span>{(i + 1).toString().padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div className="recommendation-box">
          <Lightbulb size={22} />
          <div>
            <span className="micro-label">UNE PISTE POUR AVANCER</span>
            <p>{item.recommendation}</p>
            <Link href="/ameliorations">
              Découvrir les améliorations <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div className="modal-evidence-note">
          <Check size={15} /> Source : relevé de l’auteur du 9 novembre 2026.
          Reproduction indépendante non effectuée.
        </div>
      </div>
      <div className="modal-footer">
        <button
          className="text-button"
          disabled={index === 0}
          onClick={() => onNavigate(anomalies[index - 1].id)}
        >
          <ArrowLeft size={16} /> Précédent
        </button>
        <span>
          {(index + 1).toString().padStart(2, "0")} /{" "}
          {anomalies.length.toString().padStart(2, "0")}
        </span>
        <button
          className="text-button"
          disabled={index === anomalies.length - 1}
          onClick={() => onNavigate(anomalies[index + 1].id)}
        >
          Suivant <ArrowRight size={16} />
        </button>
      </div>
    </dialog>
  );
}
