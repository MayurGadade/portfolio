import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Project } from "@/sections/Projects";
import { TestimonialsSection } from "@/sections/Testimonials";
import { MarqueeSection } from "@/sections/Marquee";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Project />
      <TestimonialsSection />
      <MarqueeSection />
      <SmoothCursor />
    </div>
  );
}
