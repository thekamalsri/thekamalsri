import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import HowToApply from "@/components/HowToApply";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutUs />
      <HowToApply />
      <ContactForm />
      <Footer />
    </div>
  );
}
