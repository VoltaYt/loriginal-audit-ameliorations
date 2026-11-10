import Link from "next/link";
import {
  ArrowDown,
  Asterisk,
  ArrowRight,
  ArrowUpRight,
  Bug,
  Code2,
  Lightbulb,
  ScanEye,
  Sparkles,
} from "lucide-react";
import { BasaltArt } from "@/components/basalt-art";
import { Eyebrow, SectionTitle } from "@/components/ui";
import { anomalies } from "@/lib/audit-data";

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-copy">
          <Eyebrow>PROJET DE STAGE · LORIGINAL.ORG</Eyebrow>
          <h1>
            Un regard neuf.
            <br />
            Une meilleure
            <br />
            <em>expérience.</em>
            <span className="heading-asterisk" aria-hidden="true">
              <Asterisk size={55} strokeWidth={1.2} />
            </span>
          </h1>
          <p>
            Repérer les problèmes du site LOriginal
            <br className="desktop-break" /> et proposer des améliorations concrètes.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/anomalies">
              Explorer les anomalies <ArrowUpRight size={17} />
            </Link>
            <a className="text-button" href="#demarche">
              La démarche <ArrowDown size={15} />
            </a>
          </div>
          <div className="hero-footnote">
            <span className="small-line" /> UN PROJET DE STAGE AVEC LORIGINAL
          </div>
        </div>
        <BasaltArt />
      </section>
      <div className="overview-stats">
        <Link href="/anomalies">
          <span className="stat-icon">
            <Bug size={21} strokeWidth={1.5} />
          </span>
          <span className="stat-number">
            {anomalies.length.toString().padStart(2, "0")}
            <span>POINTS</span>
          </span>
          <span className="stat-label">
            Constats à explorer<small>Comprendre les points de friction</small>
          </span>
          <ArrowUpRight size={19} />
        </Link>
        <Link href="/ameliorations">
          <span className="stat-icon">
            <Lightbulb size={22} strokeWidth={1.5} />
          </span>
          <span className="stat-number">
            06<span>AXES</span>
          </span>
          <span className="stat-label">
            Idées pour progresser
            <small>Transformer les constats en solutions</small>
          </span>
          <ArrowUpRight size={19} />
        </Link>
        <Link href="/technologies">
          <span className="stat-icon">
            <Code2 size={23} strokeWidth={1.5} />
          </span>
          <span className="stat-number">
            04<span>FONDATIONS</span>
          </span>
          <span className="stat-label">
            Un socle moderne<small>Des choix techniques expliqués</small>
          </span>
          <ArrowUpRight size={19} />
        </Link>
      </div>
      <section className="approach-section" id="demarche">
        <SectionTitle index="01" title="Une critique qui fait avancer." />
        <div className="approach-grid">
          <div className="approach-intro">
            <span className="micro-label">LE POURQUOI DU PROJET</span>
            <h3>
              Un premier regard,
              <br />
              puis un <em>projet de stage.</em>
            </h3>
            <p>
              Dans le cadre de mon entrevue de stage chez LOriginal, je devais
              repérer des problèmes sur leur site web et proposer des améliorations.
            </p>
            <p>
              Ce site rassemble ce travail. Je l’ai créé avec Codex pour apprendre
              à maîtriser l’outil pendant mon stage.
            </p>
          </div>
          <div className="method-list">
            <div>
              <span className="method-number">01</span>
              <div>
                <h4>
                  <ScanEye size={17} /> Observer sans détour
                </h4>
                <p>
                  Explorer les parcours, repérer les obstacles et documenter
                  chaque constat.
                </p>
              </div>
              <ArrowUpRight size={16} />
            </div>
            <div>
              <span className="method-number">02</span>
              <div>
                <h4>
                  <Lightbulb size={17} /> Proposer avec intention
                </h4>
                <p>
                  Associer à chaque problème une solution utile, réaliste et
                  centrée sur l’utilisateur.
                </p>
              </div>
              <ArrowUpRight size={16} />
            </div>
            <div>
              <span className="method-number">03</span>
              <div>
                <h4>
                  <Sparkles size={17} /> Construire pour apprendre
                </h4>
                <p>
                  Apprendre à utiliser Codex en réalisant ce site pendant le stage.
                </p>
              </div>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </section>
      <section className="preview-section">
        <SectionTitle
          index="02"
          title="Les points de départ."
          href="/anomalies"
          link="Voir les anomalies"
        />
        <div className="preview-grid">
          {anomalies.slice(0, 3).map((item) => (
            <Link
              href={`/anomalies?anomalie=${item.id}`}
              className="preview-card"
              key={item.id}
            >
              <div className="card-topline">
                <span className="micro-label">
                  {item.number} / {item.category}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <div className="card-bottom">
                <span>Voir le détail</span>
                <span className="circle-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="home-cta">
        <span className="cta-star" aria-hidden="true">
          <Asterisk size={57} strokeWidth={1.1} />
        </span>
        <div>
          <span className="micro-label">ET SI ON ALLAIT PLUS LOIN ?</span>
          <h2>
            Des constats aux <em>possibilités.</em>
          </h2>
          <p>Découvrez les pistes pour une expérience plus intuitive.</p>
        </div>
        <Link className="button button-dark" href="/ameliorations">
          Explorer les améliorations <ArrowRight size={17} />
        </Link>
      </section>
    </div>
  );
}
