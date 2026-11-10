import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="page not-found">
      <span className="micro-label">404 / HORS DU CADRE</span>
      <h1>
        Une page qui
        <br />
        reste à <em>imaginer.</em>
      </h1>
      <p>Cette adresse ne correspond à aucune page du projet.</p>
      <Link href="/" className="button button-primary">
        <ArrowLeft size={17} /> Revenir à l’accueil
      </Link>
    </div>
  );
}
