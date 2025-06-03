import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adrien FIGARD",
  description:
    "Full-stack engineer helping startups and agencies build modern web apps.",
  openGraph: {
    title: "Adrien FIGARD",
    description:
      "Full-stack engineer helping startups and agencies build modern web apps.",
    url: "https://afigard.github.io",
    siteName: "Adrien Figard Portfolio",
    images: [
      {
        url: "https://afigard.github.io/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Adrien FIGARD",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
