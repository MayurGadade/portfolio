"use client";

import Image from "next/image";
import undraw_designer_efwz from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down-solid.svg";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HeroSectionText } from "@/components/HeroSectionText";
export const Hero = () => {
  return (
    <div className="h-screen ">
      <div className="pt-32 md:py-48 lg:py-30 relative z-0 overflow-x-clip">
        <div className=" flex flex-col items-center justify-center ">
          {/* Avatar and bage */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <Image
              src={undraw_designer_efwz}
              alt="hero image"
              className="size-[100px] lg:size-[150px] mb-5"
            />
            <div className="inline-flex bg-gray-200 dark:bg-gray-950 dark:border-gray-800  rounded-lg px-4 py-1.5 items-center  gap-4">
              <div className="size-2.5 lg:size-3 rounded-full bg-green-500"></div>
              <div className="text-sm lg:text-base font-medium">
                Ready for a new project
              </div>
            </div>
          </div>
          <div>
            {/* content */}
            <div className="w-full lg:w-screen">
              {/* <h1 className="font-serif text-4xl lg:text-6xl md:text-5xl text-center mt-8 lg:mt-10 tracking-wide">
                Hello, I&apos;m a Web Developer
              </h1>
              <p className="mt-4 lg:mt-8 text-center text-white/60 md:text-lg lg:text-xl text-sm px-10">
                I create beautiful and functional web applications.
              </p> */}
              <HeroSectionText />
            </div>

            {/* Buttons */}
            <div className="flex items-center flex-col md:flex-row justify-center mt-8 gap-4">
              <a href="#projects">
                <button className="inline-flex items-center gap-2 border dark:border-white/15 px-6 h-12 rounded-xl">
                  <span className="font-semibold">Explore My Work</span>
                  <ArrowDown className="size-4 fill-forground" />
                </button>
              </a>
              <a href="#">
                <button
                  onClick={() => {
                    console.log("clicked");
                  }}
                  className="inline-flex items-center gap-2 border border-black/15 dark:border-white/15 px-6 h-12 rounded-xl bg-black text-white  dark:bg-white dark:text-gray-900"
                >
                  <span>👋🏻</span>
                  <span className="font-semibold">Let&apos;s Connect</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-screen w-screen pointer-events-none object-fill overflow-hidden">
        <BackgroundBeams />
      </div>
    </div>
  );
};
