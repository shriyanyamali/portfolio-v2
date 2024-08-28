"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 flex lg:flex-col flex-row items-center justify-center bg-light dark:bg-dark w-full gap-4 lg:gap-y-16 mx-auto px-8">
        <Card
          title="Experience"
          icon={<BriefcaseIcon />}
          text="Im Shriyan Yamali, a high school student with certifications in computer science, web development, and Python. I&rsquo;ve coded a Python project for UPenn Carey and am editing machine learning papers at Dartmouth College. Ive also studied NLP and machine learning at Stanford Law School. I also am constantly involved in clubs like in Mock Trial, Math League, and Student Council."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Interests
"
          icon={<StarIcon />}
          text="Outside of academics, I enjoy cooking, game development, and gardening. Im also into politics and have a passion for hip-hop and rap music. When it comes to video games, I play Fortnite, Rocket League, Minecraft, and Clash Royale, where Ive earned international rankings."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-red-800"
            colors={[
              [255, 165, 0],
              [255, 140, 0],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Goals"
          icon={<TargetIcon />}
          text="I&rsquo;m looking forward to exploring how computer science and law can work together. My goal is to keep studying and become a lawyer, focusing on using technology to solve legal problems and make things more accessible. I&rsquo;m excited about finding ways to blend these fields and make a positive impact."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
            colors={[
              [144, 238, 144],
              [152, 251, 152],
            ]}
            dotSize={2}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({ title, text, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      {/* Icons positioned absolutely */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Container for title and icon */}
      <div className="relative h-1/2 w-full flex flex-col items-center justify-center">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-300 w-full flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-300 w-full flex items-center justify-center text-black dark:text-white mt-4 text-xl font-bold">
          {title}
        </h2>
      </div>

      {/* Container for text */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <h3
          className="text-sm text-white mt-4 font-bold break-words w-full group-hover/canvas-card:-translate-y-4 transition duration-300 opacity-0 group-hover/canvas-card:opacity-100"
          style={{ wordWrap: "break-word", whiteSpace: "normal" }}
        >
          {text}
        </h3>
      </div>
    </div>
  );
};

const BriefcaseIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 fill-black dark:fill-white group-hover/canvas-card:fill-black dark:group-hover/canvas-card:fill-white"
    >
      <path d="M 26 6 C 23.81506 6 22 7.8150603 22 10 L 22 12 L 5 12 L 5 29 C 5 31.21 6.79 33 9 33 L 28 33 L 28 29 L 36 29 L 36 33 L 55 33 C 57.21 33 59 31.21 59 29 L 59 12 L 42 12 L 42 10 C 42 7.8150603 40.18494 6 38 6 L 26 6 z M 26 10 L 38 10 L 38 12 L 26 12 L 26 10 z M 30 31 L 30 37 L 34 37 L 34 31 L 30 31 z M 5 35 L 5 50 C 5 52.21 6.79 54 9 54 L 55 54 C 57.21 54 59 52.21 59 50 L 59 36 L 36 35.570312 L 36 39 L 28 39 L 28 35.429688 L 5 35 z" />
    </svg>
  );
};

const StarIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 576 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 fill-black dark:fill-white group-hover/canvas-card:fill-black dark:group-hover/canvas-card:fill-white"
    >
      <path
        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

const TargetIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 fill-black dark:fill-white group-hover/canvas-card:fill-black dark:group-hover/canvas-card:fill-white"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
      <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </svg>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
