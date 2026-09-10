import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Process } from "@/components/Process";
import { Philosophy } from "@/components/Philosophy";
import { Testimonial } from "@/components/Testimonial";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
        <Skills />
        <Process />
        <Philosophy />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
