import type { Metadata, Viewport } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "LOriginal — Un regard neuf sur l’expérience web",
    template: "%s · LOriginal",
  },
  description:
    "Un projet indépendant pour observer, comprendre et proposer une meilleure expérience du site LOriginal. Audit, pistes d’amélioration et démarche de conception.",
};

export const viewport: Viewport = {
  themeColor: "#181c19",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
