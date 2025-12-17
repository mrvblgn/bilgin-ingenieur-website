import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com'),
  title: {
    default: "Bilgin Ingenieurbüro & Deca Architektur | Architektur- und Ingenieurdienstleistungen",
    template: "%s | Bilgin Ingenieurbüro & Deca Architektur"
  },
  description: "Architektur- und Ingenieurdienstleistungen in Heilbronn und Umgebung. Professionelle Planung, Bauanträge und Ausführungspläne.",
  keywords: ["Architektur", "Ingenieurbüro", "Heilbronn", "Bauplanung", "Architekturplanung", "Mimarlık", "İnşaat Mühendisliği"],
  authors: [{ name: "Bilgin Ingenieurbüro & Deca Architektur" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: "tr_TR",
    siteName: "Bilgin Ingenieurbüro & Deca Architektur",
    title: "Bilgin Ingenieurbüro & Deca Architektur",
    description: "Architektur- und Ingenieurdienstleistungen in Heilbronn und Umgebung",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/38566e1fb22adb542cc0a4d11b7983f6?family=The+Amoret+Collection+Sans"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
