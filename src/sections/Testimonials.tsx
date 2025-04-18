/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SeactionHeader } from "@/components/SectionHeader";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/magicui/lens";

const testimonials = [
  {
    name: "Mayur Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Mayur was instrumental in transforming our website into a powerful marketing tool...",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Mayur was a pleasure. His expertise in frontend development brought our designs to life...",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Mayur ability to create seamless user experiences is unmatched...",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Mayur is a true frontend wizard. He took our complex product and transformed it...",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Mayur work on our website has been nothing short of exceptional...",
    avatar: memojiAvatar5,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Mayur ability to create seamless user experiences is unmatched...",
    avatar: memojiAvatar3,
  },
];

export const TestimonialsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center py-16 lg:py-24">
      <div className="mb-10">
        <SeactionHeader
          subtitle="Happy Clients"
          title="What clients say about me"
          description="I have had the pleasure of working with some amazing clients. Here are a few testimonials from them."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {testimonials.map((testimonial, idx) => (
          <div
            key={`${testimonial.name}-${idx}`}
            className="relative group p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Hover Background Animation */}
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-gray-800 dark:bg-slate-800/[0.8] rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.2 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2, delay: 0.1 },
                  }}
                />
              )}
            </AnimatePresence>

            {/* Testimonial Card */}
            <Card className="relative max-w-md shadow-none bg-gray-950 border-0 z-20">
              <CardHeader>
                <Lens>
                  <img
                    src={testimonial.avatar.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    className="rounded-full w-20 h-20 object-cover"
                  />
                </Lens>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl text-white">
                  {testimonial.name}
                </CardTitle>
                <p className="text-sm text-slate-400">{testimonial.position}</p>
                <CardDescription className="mt-4">
                  {testimonial.text}
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-4">
                <Button>Let&apos;s go</Button>
                <Button variant="secondary">Another time</Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
