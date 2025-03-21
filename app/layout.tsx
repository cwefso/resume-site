import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Wefso Codes",
  description: "Charles Wefso Software Engineering Website",
  manifest: "/manifest.json",
  themeColor: "#3b82f6",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
