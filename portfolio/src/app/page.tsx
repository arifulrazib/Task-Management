import ProfileCard from "@/components/ProfileCard";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Top: sidebar card + hero */}
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <ProfileCard />
        <div>
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* Sections */}
      <div className="mt-24 space-y-24">
        <Projects />
        <About />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
