import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Project } from "@/sections/Projects";
import { TestimonialsSection } from "@/sections/Testimonials";
import { MarqueeSection } from "@/sections/Marquee";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Project />
      <TestimonialsSection />
      <MarqueeSection />
    </div>
  );
}
