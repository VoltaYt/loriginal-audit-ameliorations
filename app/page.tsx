import Link from "next/link";
import {
  ArrowDown,
  Asterisk,
  ArrowRight,
  ArrowUpRight,
  Bug,
  Check,
  Code2,
  Lightbulb,
  ScanEye,
  Sparkles,
} from "lucide-react";
import { BasaltArt } from "@/components/basalt-art";
import { AuditNotice, Eyebrow, SectionTitle, Severity } from "@/components/ui";
import { anomalies } from "@/lib/audit-data";

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-copy">
          <Eyebrow>ÉTUDE DE CAS · LORIGINAL.ORG</Eyebrow>
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
            Prendre le temps d’observer. Comprendre ce qui freine.
            <br className="desktop-break" /> Et proposer ce qui pourrait tout
            changer.
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
            <span className="small-line" /> UNE INITIATIVE INDÉPENDANTE &
            CONSTRUCTIVE
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
              Parce qu’une bonne idée
              <br />
              mérite une <em>belle expérience.</em>
            </h3>
            <p>
              Ce projet est né d’une envie : regarder le site LOriginal avec un
              œil neuf et imaginer comment rendre son utilisation plus simple,
              plus accessible et plus agréable.
            </p>
            <p>
              Il ne s’agit pas de juger, mais de comprendre. Chaque point de
              friction devient une occasion d’apprendre et une piste concrète
              pour faire mieux.
            </p>
            <div className="independent-note">
              <Check size={15} /> Un projet personnel, sans affiliation avec
              LOriginal.
            </div>
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
                  Donner forme aux idées avec une interface moderne et des
                  technologies adaptées.
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
        <AuditNotice />
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
                <Severity level={item.severity} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <div className="card-bottom">
                <span>{item.status}</span>
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
