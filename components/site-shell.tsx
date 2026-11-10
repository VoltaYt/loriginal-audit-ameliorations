"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Asterisk,
  Bug,
  ChevronRight,
  Code2,
  ExternalLink,
  Home,
  Lightbulb,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";

const navigation = [
  { href: "/", label: "Vue d’ensemble", icon: Home, number: "01" },
  { href: "/anomalies", label: "Les anomalies", icon: Bug, number: "02" },
  {
    href: "/ameliorations",
    label: "Les améliorations",
    icon: Lightbulb,
    number: "03",
  },
  {
    href: "/technologies",
    label: "Les technologies",
    icon: Code2,
    number: "04",
  },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const current = navigation.find((item) => item.href === pathname);

  useEffect(() => {
    if (!open) return;
    const menuButton = menuRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const links = Array.from(
      sidebarRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? [],
    );
    links[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") {
        const targets: HTMLElement[] = [
          ...links,
          ...(menuRef.current ? [menuRef.current] : []),
        ];
        const currentIndex = targets.indexOf(
          document.activeElement as HTMLElement,
        );
        event.preventDefault();
        const nextIndex =
          (currentIndex + (event.shiftKey ? -1 : 1) + targets.length) %
          targets.length;
        targets[nextIndex]?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      menuButton?.focus();
    };
  }, [open]);

  return (
    <div className="site-shell">
      <button
        ref={menuRef}
        className="mobile-menu"
        aria-label={open ? "Fermer la navigation" : "Ouvrir la navigation"}
        aria-expanded={open}
        aria-controls="navigation-principale"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      {open && (
        <button
          className="nav-scrim"
          aria-label="Fermer la navigation"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        ref={sidebarRef}
        className={`sidebar ${open ? "sidebar-open" : ""}`}
        id="navigation-principale"
      >
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="LOriginal, accueil"
        >
          <span className="brand-symbol">
            L
            <span>
              <ArrowUpRight size={25} strokeWidth={2} />
            </span>
          </span>
          <span className="brand-name">
            LOriginal<span>UN REGARD NEUF.</span>
          </span>
        </Link>
        <div className="sidebar-project">
          <span className="status-dot" /> PROJET DE STAGE{" "}
          <span className="version">v.01</span>
        </div>
        <div className="nav-label">EXPLORER LE PROJET</div>
        <nav aria-label="Navigation principale">
          {navigation.map(({ href, label, icon: Icon, number }) => (
            <Link
              key={href}
              href={href}
              className={`nav-item ${pathname === href ? "active" : ""}`}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <Icon size={18} strokeWidth={1.6} />
              <span>{label}</span>
              <span className="nav-number">{number}</span>
            </Link>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-note">
            <div className="note-icon">
              <MoveUpRight size={20} />
            </div>
            <p>
              Observer l’existant.
              <br />
              <strong>Imaginer la suite.</strong>
            </p>
            <span>
              Une démarche constructive,
              <br />
              au service de l’expérience.
            </span>
          </div>
          <a
            className="original-link"
            href="https://www.loriginal.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              Le site d’origine<small>loriginal.org</small>
            </span>
            <ExternalLink size={16} />
          </a>
          <span className="sidebar-foot">RÉALISÉ AVEC CODEX</span>
        </div>
      </aside>
      <div className="workspace" inert={open}>
        <header className="topbar">
          <div className="breadcrumb">
            <span>Le projet</span>
            <ChevronRight size={13} />
            <span>{current?.label ?? "Page introuvable"}</span>
          </div>
          <a
            href="https://www.loriginal.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="topbar-link"
          >
            Découvrir LOriginal <ArrowUpRight size={15} />
          </a>
        </header>
        <main id="contenu" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer">
          <span>
            © {new Date().getFullYear()} LOriginal · Projet de stage
          </span>
          <span>
            Une étude, des idées, des possibilités.
            <span className="footer-star" aria-hidden="true">
              <Asterisk size={23} strokeWidth={1.5} />
            </span>
          </span>
        </footer>
      </div>
    </div>
  );
}
