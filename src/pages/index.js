import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePicLight from "../../public/images/profile/signature.png";
import Link from "next/link";
import HoverSpring from "@/components/demo/demo-features-hover-spring";
import React, { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { MeteorsDemo1 } from "@/components/skills-meteor-cards/meteors-1";
import { MeteorsDemo2 } from "@/components/skills-meteor-cards/meteors-2";
import { MeteorsDemo3 } from "@/components/skills-meteor-cards/meteors-3";
import { MeteorsDemo4 } from "@/components/skills-meteor-cards/meteors-4";
import { SparklesTextDemo } from "@/components/demo/demo-sparkles-text";
import WordRotateDemo from "@/components/demo/demo-word-rotate";
import TechStack from "@/components/TechStack";
import { IconCloudDemo } from "@/components/demo/demo-icon-cloud";
import { FlipWordsDemo } from "@/components/demo/demo-flip-words";
import { CanvasRevealEffectDemo } from "@/components/demo/demo-canvas-reveal-effect";
import { TextRevealCardPreview } from "@/components/demo/demo-text-reveal-card";
import { CardHoverEffectDemo } from "@/components/demo/demo-hover-effect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 20, duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Shriyan Yamali</title>
        <meta
          name="Home Page for Shriyan Yamali's Personal Website"
          content="Shriyan, Yamali, Website, Github, Linkedin, Instagram, X, Twitter"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="!pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col mb-8">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePicLight}
                alt="Shriyan Yamali"
                className="mb-16 w-full h-auto md:inline-block md:w-full dark:invert"
                height="400"
                width="400"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 lg:w-full lg:text-center">
              <div className="inline-flex items-center text-left lg:text-center lg:block">
                <span className="text-4xl xtl:text-3xl lg:!text-4xl font-bold text-black dark:text-white mr-3 lg:mr-0">
                  Hi, I&rsquo;m a
                </span>
                <WordRotateDemo />
              </div>

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs w-full lg:w-3/4 mx-auto">
                I&rsquo;m Shriyan Yamali, a full-stack developer with a
                specialization in Python and AI and an interest in law,
                horology, gardening, cooking, and politics.
              </p>

              {/* Desktop Projects Button*/}

              <Link href="/projects">
                <button
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md lg:hidden
                border border-slate-400 dark:border-slate-500
                bg-[linear-gradient(110deg,#F0F0F0,45%,#D7D7D7,55%,#F0F0F0)]
                dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
                hover:bg-[linear-gradient(110deg,#EAEAEA,45%,#D7D7D7,55%,#EAEAEA)]
                hover:dark:bg-[linear-gradient(110deg,#121619,45%,#1e2631,55%,#121619)]
                bg-[length:200%_100%] px-6 font-medium text-slate-600 dark:text-slate-400
                transition-colors
                "
                >
                  <span className="flex items-center space-x-2">
                    <span>Check Out My Projects</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
              </Link>

              {/* Mobile Projects Button*/}

              <div className="w-1/2 flex-col items-center justify-center lg:w-full lg:text-center hidden lg:flex lg:justify-center lg:items-center lg:my-8">
                <Link href="/projects">
                  <button className="flex items-center space-x-1 text-slate-950 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-400">
                    <span className="border-b border-slate-950 hover:border-slate-600 dark:border-slate-300 dark:hover:border-slate-400">
                      Check Out My Projects
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* About Section */}

          <div className="flex items-center justify-center">
            <div className="mb-4 sm:mb-2 mt-32 md:mt-32">
              <SparklesTextDemo />
            </div>
          </div>

          <div className="items-center justify-center text-center mb-32">
            <CanvasRevealEffectDemo />

            {/*   <div className="mt-48 sm:mt-32">
              <TextRevealCardPreview />

              <div className="flex items-center justify-center w-full">
                <Link href="/contact">
                  <div className="flex flex-col items-center justify-center transition duration-500 font-semibold bg-slate-300 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-700/[0.2] dark:border-slate-300/[0.2] rounded-2xl relative overflow-hidden p-4 w-full max-w-[27.5rem] shadow-custom-light dark:shadow-custom-dark">
                    <h2 className="text-center text-lg sm:text-base">
                      Let&rsquo;s Work Together
                    </h2>
                  </div>
                </Link>
              </div>
            </div>

            <CardHoverEffectDemo />  */}
          </div>

          <h2 className="font-bold text-6xl sm:text-3xl md:text-4xl lg:text-5xl mt-36 md:mt-32 w-full text-center">
            Skills
          </h2>

          <div className="flex justify-center">
            <HoverSpring />
          </div>

          <h2 className="font-bold text-6xl sm:text-3xl md:text-4xl lg:text-5xl mt-36 md:mt-32 w-full text-center">
            Tech Stack
          </h2>
          <TechStack />

          <h2 className="font-bold text-6xl sm:text-3xl md:text-4xl lg:text-5xl mt-36 md:mt-32 w-full text-center">
            Awards
          </h2>
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-1 justify-items-center items-center">
            <MeteorsDemo1 />
            <MeteorsDemo2 />
          </div>

          <div className="my-48 lg:mt-0 grid grid-cols-2 lg:grid-cols-1 justify-items-center items-center">
            <MeteorsDemo3 />
            <MeteorsDemo4 />
          </div>
        </Layout>
      </main>
    </>
  );
}
