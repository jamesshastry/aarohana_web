import { Navbar, Footer } from "@/components/layout";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Features />
        <About />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}