import HeroSection from "./home/hero/hero";
import ProjectSlider from "./home/project-slider/project-slider";
import WhyChooseUs from "./home/why-choose-us/why-choose-us";
import HowItWorks from "./home/how-it-works/how-it-works";
import FAQ from "./home/FAQ/faq";
import Footer from "./home/Footer/Footer";
import ContactPage from "./contact-page/contactpage";
import HolidaySlider from "./home/holiday/holiday";
import CommercialSlider from "./home/commercial/commercial";

// SEO Metadata for Home Page
export const metadata = {
  title: "AREC | Fractional Real Estate Investing & Ownership in India",
  description: "Learn how fractional property works and discover the benefits of fractional ownership. Invest in luxury holiday homes in Delhi NCR and commercial assets with high returns.",
  keywords: [
    "what is fractional real estate",
    "benefits of fractional ownership",
    "how fractional property works",
    "is fractional ownership profitable",
    "fractional vs full property ownership",
    "real estate fractional investing",
    "fractional property returns",
    "fractional vacation homes Delhi NCR",
    "luxury holiday home fractional share",
    "vacation home ownership India"
  ],
  openGraph: {
    title: "AREC - Shared Property Ownership & Real Estate Investing",
    description: "Start your journey with fractional vacation homes and commercial properties. Profitable real estate investing made accessible.",
    url: "https://thearec.com",
    siteName: "AREC India",
    images: [
      {
        url: "/og-home.jpg", // Make sure to put an image in your public folder
        width: 1200,
        height: 630,
        alt: "AREC Fractional Real Estate Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AREC | Fractional Real Estate India",
    description: "Invest in high-return property fragments and luxury vacation homes.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSlider />
      <HolidaySlider />
      <CommercialSlider/>
      <WhyChooseUs />
      <HowItWorks />
      <FAQ/>
      <Footer/>
    </>
  );
}