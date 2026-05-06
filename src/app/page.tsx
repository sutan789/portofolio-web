import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";

import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-32 pb-20">
      <Hero />
      <div className="space-y-20 md:space-y-40">
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Experience />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
