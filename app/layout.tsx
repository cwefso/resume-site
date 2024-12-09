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
    // <ClerkProvider>
    <html lang="en">
      <body>
        {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
        {children}
      </body>
    </html>
    // </ClerkProvider>
  );
}
