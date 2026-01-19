import Hero from "@/src/components/Hero";
import Features from "@/src/components/Features";
import HowItWorks from "@/src/components/HowItWorks";
import Pricing from "@/src/components/Pricing";
import Testimonials from "@/src/components/Testimonials";
import ContactForm from "@/src/components/ContactForm";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
