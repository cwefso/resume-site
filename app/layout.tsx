import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Wefso Codes",
  description: "Charles Wefso Software Engineering Website",
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
