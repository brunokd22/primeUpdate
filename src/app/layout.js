import Header from "./components/Header.jsx";

import { ThemeProvider } from "next-themes";
import ThemeCom from "./components/ThemeCom";
import { nunito_sans, poppins } from "./fonts.js";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeModeScript } from "flowbite-react";
import Footer from "./components/Footer";

import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <ThemeModeScript />
        </head>
        <body className={`${nunito_sans} ${poppins}`}>
          <ThemeProvider>
            <ThemeCom>
              <Header />
              <main className="nunito_sans">{children}</main>
              <Footer />
            </ThemeCom>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
