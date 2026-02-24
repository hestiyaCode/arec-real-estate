import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./common/header/header";
import { Analytics } from "@vercel/analytics/next";
import Footer from "./home/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arec",
  description: "Aakash real estate company",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17971251005"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'AW-17971251005');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}