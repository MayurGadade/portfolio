"use client";
import Image from "next/image";
import projectImage from "@/assets/images/light-saas-landing-page.png";
import { CircleCheck, ArrowUpRight, ArrowRight } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "framer-motion";
import { SeactionHeader } from "@/components/SectionHeader";
export const Project = () => {
  const portfolioProjects = [
    {
      title: "Project 1",
      subtitle: "Subtitle for Project 1",
      description: "Description for Project 1",
      imageUrl: projectImage,
      features: [
        { title: "Feature 1" },
        { title: "Feature 2" },
        { title: "Feature 3" },
      ],
    },
    {
      title: "Project 2",
      subtitle: "Subtitle for Project 2",
      description: "Description for Project 2",
      imageUrl: projectImage,
      features: [
        { title: "Feature 1" },
        { title: "Feature 2" },
        { title: "Feature 3" },
      ],
    },
    {
      title: "Project 3",
      subtitle: "Subtitle for Project 3",
      description: "Description for Project 3",
      imageUrl: projectImage,
      features: [
        { title: "Feature 1" },
        { title: "Feature 2" },
        { title: "Feature 3" },
      ],
    },
    {
      title: "Project 4",
      subtitle: "Subtitle for Project 4",
      description: "Description for Project 4",
      imageUrl: projectImage,
      features: [
        { title: "Feature 1" },
        { title: "Feature 2" },
        { title: "Feature 3" },
      ],
    },
  ];

  return (
    <section className="pb-16 lg:py-24">
      <div className="container mx-auto px-4">
        <SeactionHeader
          subtitle="Real-world projects"
          title=" Projects"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum!"
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20 ">
          {portfolioProjects.map((project) => (
            <CardSpotlight key={project.title}>
              <div
                className="bg-transparent rounded-6xl relative z-0 overflow-hidden 
                  after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 
                  after:outline-offset-5 after:rounded-6xl px-8 pt-8 md:pt-12 md:px-10 
                  lg:pt-16  after:pointer-events-none"
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-400 to-sky-600 font-semibold text-sm tracking-widest uppercase text-transparent bg-clip-text inline-flex gap-2">
                      <span>{project.subtitle}</span>
                      <span>&bull;</span>
                      <span>{project.description}</span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.features.map((feature) => (
                        <li
                          className="flex gap-2 text-sm md:text-base text-white/50"
                          key={feature.title}
                        >
                          <span>
                            <CircleCheck className="size-3 md:size-4 text-blue-500" />
                          </span>
                          <span>{feature.title}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 md:mt-7 px-5 md:px-6 py-3 bg-white text-black font-normal rounded-lg flex items-center gap-2 hover:opacity-90 transition">
                      Live Demo
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.2,
                          ease: "easeInOut",
                        }}
                        className="w-5 h-5"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </button>
                    {/* <a href="#">
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8 md:w-auto px-8">
                        <span>Live Demo</span>
                        <ArrowUpRight />
                      </button>
                    </a> */}
                  </div>
                  <div>
                    <Image
                      className="mt-8 lg:mt-0 lg:absolute lg:h-full "
                      src={project.imageUrl}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
};
