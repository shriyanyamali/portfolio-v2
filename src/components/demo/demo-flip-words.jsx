import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["leader.", "writer.", "student.", "innovator.", "programmer.", "Delawarean.", "designer.", "learner.", "dreamer."];

  return (
    <>
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 xtl:hidden">
        Hi, I&rsquo;m a
        <FlipWords words={words} /> {/*  <br />
        websites with Aceternity UI */}
      </div>
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 hidden xtl:block">
        Hi, I&rsquo;m a <br />
        <FlipWords words={words} /> {/*  <br />
        websites with Aceternity UI */}
      </div>
    </>
  );
}
