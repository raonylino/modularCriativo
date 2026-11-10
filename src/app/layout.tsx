import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Modular Criativo | Conteúdo educacional com propósito",
  description: site.description,
  applicationName: site.name,
};

export const viewport: Viewport = {
  themeColor: "#139bd4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
