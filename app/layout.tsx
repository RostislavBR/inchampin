import { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type { FontSource } from "./types/LocalFonts";
import "@styles/globals.scss";

export const metadata: Metadata = {
  title: "INCHAMPIN",
};

const proximaNova = localFont({
  src: [
    {
      path: "fonts/ProximaNova-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "fonts/ProximaNova-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/ProximaNova-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/ProximaNova-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ] as FontSource[],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={proximaNova.className}>{children}</body>
    </html>
  );
}
