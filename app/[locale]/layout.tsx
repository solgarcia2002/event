import type { Metadata } from "next";
import { Inter } from "next/font/google";
import UIProviders from "./UIProviders";
import Navbar from "./components/navbar/navbar";
import "../globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  
  return (
    <html lang={locale}>
      <head>
      </head>
      <body className={inter.className}>
        <UIProviders>
          <Navbar />
          {children}
        </UIProviders>
      </body>
    </html>
  );
}
