import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // 1. Script import kiya
import "./globals.css";
import Header from "./common/header/header";
import { Analytics } from "@vercel/analytics/next"
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
  icons:{
    icon: '/favicon.svg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* --- Google Tag (gtag.js) START --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17971251005"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17971251005');
          `}
        </Script>
        {/* --- Google Tag (gtag.js) END --- */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        
        {children}
        <Analytics/>
        <Footer/>
      </body>
    </html>
  );
}