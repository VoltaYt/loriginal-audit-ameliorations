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
    "Projet de stage avec LOriginal : problèmes repérés sur le site, améliorations proposées et apprentissage de Codex.",
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
