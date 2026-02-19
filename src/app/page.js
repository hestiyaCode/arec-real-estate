import HeroSection from "./home/hero/hero";
import ProjectSlider from "./home/project-slider/project-slider";
import WhyChooseUs from "./home/why-choose-us/why-choose-us";
import HowItWorks from "./home/how-it-works/how-it-works";
import FAQ from "./home/FAQ/faq";
import HolidaySlider from "./home/holiday/holiday";
import CommercialSlider from "./home/commercial/commercial";

export const metadata = {
  title: "Fractional Ownership Real Estate India | Luxury Holiday Home Investment | TheArec",
  
  description:
    "TheArec is a fractional real estate platform in India that enables fractional ownership real estate India, luxury holiday home ownership, passive income property rental, and holiday home investment India with high rental yield.",

  keywords: [
    "Fractional ownership real estate India",
    "holiday home investment India",
    "luxury holiday home ownership",
    "passive income property rental",
    "fractional real estate platform",
    "best investment property India",
    "real estate proptech trends",
    "fractional investment vs REITs",
    "holiday home rental yield",
    "how to invest in vacation homes"
  ],

  openGraph: {
    title: "Fractional Real Estate Platform India | TheArec",
    description:
      "Invest in luxury holiday homes through fractional ownership in India and earn passive rental income.",
    url: "https://thearec.com",
    siteName: "TheArec",
    locale: "en_IN",
    type: "website",
  }
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSlider />
      <HolidaySlider />
      <CommercialSlider />
      <WhyChooseUs />
      <HowItWorks />
      <FAQ />
    </>
  );
}
