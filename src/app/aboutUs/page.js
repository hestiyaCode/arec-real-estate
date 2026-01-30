import AboutUs from "../aboutUs/AboutUs";
import Footer from "../home/Footer/Footer";

// SEO Metadata - This is what Google reads for search results
export const metadata = {
  title: "About AREC | Fractional Real Estate & Property Tokenization in India",
  description: "Discover AREC: India's leading platform for fractional ownership in Grade-A commercial properties and luxury holiday homes. Start investing in high-yield assets today.",
  keywords: [
    "Fractional Real Estate India",
    "Real Estate Tokenization",
    "Invest in Commercial Property",
    "AREC Real Estate",
    "Passive Income Properties",
    "Luxury Holiday Home Investment",
    "Property Investment Platform India"
  ],
  alternates: {
    canonical: "https://thearec.com/about-us", // Replace with your actual URL
  },
  openGraph: {
    title: "About AREC | Redefining Real Estate Ownership",
    description: "Join the movement to make luxury real estate accessible to everyone in India through fractional ownership.",
    url: "https://thearec.com/about-us",
    siteName: "AREC",
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <>
      {/* Tip: Adding a hidden <h1> or ensuring your AboutUs component 
        uses an <h1> with keywords will further boost visibility. 
      */}
      <AboutUs />
      <Footer />
    </>
  );
}