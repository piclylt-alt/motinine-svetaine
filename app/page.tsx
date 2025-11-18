import Hero from "@/src/components/Hero";
import Features from "@/src/components/Features";
import HowItWorks from "@/src/components/HowItWorks";
import DemoVideo from "@/src/components/DemoVideo";
import Pricing from "@/src/components/Pricing";
import Testimonials from "@/src/components/Testimonials";
import Portfolio from "@/src/components/Portfolio";
import ContactForm from "@/src/components/ContactForm";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Hero />
      <Features />
      <HowItWorks />
      <DemoVideo />
      <Pricing />
      <Testimonials />
      <Portfolio />
      <ContactForm />
      <Footer />
    </main>
  );
}
