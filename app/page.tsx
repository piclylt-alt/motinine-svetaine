import Hero from "@/src/components/Hero";
import Features from "@/src/components/Features";
import HowItWorks from "@/src/components/HowItWorks";
import DemoVideo from "@/src/components/DemoVideo";
import Pricing from "@/src/components/Pricing";
import Testimonials from "@/src/components/Testimonials";
import Portfolio from "@/src/components/Portfolio";
import ContactForm from "@/src/components/ContactForm";
import Footer from "@/src/components/Footer";
import AnimatedBackground from "@/src/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
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
