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
        {/* ✅ Correct way to load ReCaptcha */}
        <Script 
          src="https://www.google.com/recaptcha/api.js" 
          strategy="beforeInteractive" 
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Google Tag Manager / Global Site Tag (Consolidated) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J3S2Q3RX58"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag; // Makes it accessible globally
            gtag('js', new Date());

            // Config for Analytics
            gtag('config', 'G-J3S2Q3RX58');
            // Config for Google Ads
            gtag('config', 'AW-17841688200');
          `}
        </Script>

        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}