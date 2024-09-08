import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Header } from "./_components/header";

export const metadata: Metadata = {
  title: "Staff Central",
  description: "Manage and track staff in your organization",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-icon.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <div className="flex min-h-screen w-full flex-col">
            <Header />
            <main>
              {children}
            </main>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
