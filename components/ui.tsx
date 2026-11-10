import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}

export function PageHeading({
  eyebrow,
  title,
  accent,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-heading">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="heading-line">
        <div>
          <h1>
            {title} <em>{accent}</em>
          </h1>
          <p>{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({
  index,
  title,
  href,
  link,
}: {
  index: string;
  title: string;
  href?: string;
  link?: string;
}) {
  return (
    <div className="section-title">
      <h2>
        <span>{index}</span>
        {title}
      </h2>
      {href && (
        <Link href={href}>
          {link}
          <ArrowUpRight size={16} />
        </Link>
      )}
    </div>
  );
}
