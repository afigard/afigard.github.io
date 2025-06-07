import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adrien FIGARD",
  description:
    "Full-stack developer helping startups and agencies build modern web apps.",
  openGraph: {
    title: "Adrien FIGARD",
    description:
      "Full-stack developer helping startups and agencies build modern web apps.",
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
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
