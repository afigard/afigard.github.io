import "./ui/global.css";
import { inter } from "./ui/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Adrien Figard",
    default: "Adrien Figard",
  },
  description: "Portfolio website of the work of Adrien Figard.",
  metadataBase: new URL("https://adrienfigard.com"),
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon-light.png",
        href: "/icon-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon-dark.png",
        href: "/icon-dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
