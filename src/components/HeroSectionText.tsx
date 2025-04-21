"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function HeroSectionText() {
  return (
    <div className="flex h-[25rem] w-full items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            Hey, I&apos;m a web developer crafting fast, modern, and responsive
            websites with a strong eye for design and detail.
          </p>
        }
        className="h-[40rem] rounded-md  w-full text-black dark:text-black"
      >
        Discover the art of{" "}
        <span className="text-blue-500">Frontend Development</span> with
        scalable design systems, intuitive UX, and
        <span className="text-blue-500">real-world performance</span>.
      </MaskContainer>
    </div>
  );
}
