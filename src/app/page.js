
import HeroSection from "./home/hero/hero";
import ProjectSlider from "./home/project-slider/project-slider";
import WhyChooseUs from "./home/why-choose-us/why-choose-us";
import HowItWorks from "./home/how-it-works/how-it-works";
import FAQ from "./home/FAQ/faq";
import Footer from "./home/Footer/Footer";
import ContactPage from "./contact-page/contactpage";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSlider />
      <WhyChooseUs />
      <HowItWorks />
      <FAQ/>
      <Footer/>
      <ContactPage/>


    </>
  );
}
