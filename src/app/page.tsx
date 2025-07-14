import About from "@/components/About";
import AIChatTrigger from "@/components/AIChatTrigger";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Journey />
      <AIChatTrigger/>
      <ContactForm />
      <Footer />


    </main>
  );
}
