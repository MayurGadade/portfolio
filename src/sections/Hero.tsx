"use client";

import Image from "next/image";
import undraw_designer_efwz from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down-solid.svg";
import { BackgroundBeams } from "@/components/ui/background-beams";
export const Hero = () => {
  return (
    <div className="h-screen ">
      <div className="py-32 md:py-48 lg:py-30 relative z-0 overflow-x-clip">
        <div className=" flex flex-col items-center justify-center ">
          {/* Avatar and bage */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <Image
              src={undraw_designer_efwz}
              alt="hero image"
              className="size-[100px] lg:size-[150px]"
            />
            <div className="inline-flex bg-gray-950 border-gray-800  rounded-lg px-4 py-1.5 items-center  gap-4">
              <div className="size-2.5 lg:size-3 rounded-full bg-green-500"></div>
              <div className="text-sm lg:text-base font-medium">
                Ready for a new project
              </div>
            </div>
          </div>
          <div>
            {/* content */}
            <div className="max-w-lg mx-auto">
              <h1 className="font-serif text-4xl lg:text-6xl md:text-5xl text-center mt-8 lg:mt-10 tracking-wide">
                Hello, I&apos;m a Web Developer
              </h1>
              <p className="mt-4 lg:mt-8 text-center text-white/60 md:text-lg lg:text-xl text-sm px-10">
                I create beautiful and functional web applications.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center flex-col md:flex-row justify-center mt-8 gap-4">
              <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                <span className="font-semibold">Explore My Work</span>
                <ArrowDown className="size-4" />
              </button>
              <button
                onClick={() => {
                  console.log("clicked");
                }}
                className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl  bg-white text-gray-900"
              >
                <span>👋🏻</span>
                <span className="font-semibold">Let&apos;s Connect</span>
              </button>
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
