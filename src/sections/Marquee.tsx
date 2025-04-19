import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { SeactionHeader } from "@/components/SectionHeader";
import { FileJson } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const tech = [
  {
    name: "React",
    icon: <FileJson className="size-10" />,
  },
  {
    name: "Next.js",
    icon: <FileJson className="size-10" />,
  },
  {
    name: "MongoDB",
    icon: <FileJson className="size-10" />,
  },
  {
    name: "Tailwind CSS",
    icon: <FileJson className="size-10" />,
  },
];

const firstRow = tech.slice(0, tech.length / 2);
const secondRow = tech.slice(tech.length / 2);

const ReviewCard = ({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2  p-2 ">
        {icon}
        <blockquote className="mt-2 text-xl">{name}</blockquote>
      </div>
    </figure>
  );
};

export function MarqueeSection() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        {" "}
        <div className="container border-2 border-gray-800/60 rounded-3xl ">
          <div className="my-10">
            <div className="flex justify-center ">
              <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-400 to-sky-600 text-center text-transparent bg-clip-text">
                My playground
              </p>
            </div>
            <h2 className="font-serif text-2xl md:text-5xl lg:text-4xl text-center font-medium mt-3">
              Toolebox
            </h2>
            <p className="text-center md:text-lg lg:text-base text-white/60 mt-5 font-medium max-w-md mx-auto">
              explore the tools I use to build my projects
            </p>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:25s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent z-10" />
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
