import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profilePic from "../../public/images/profile/signature.png";
import profilePicDark from "../../public/images/profile/signature-white.png";
import Link from "next/link";
import { FlipWordsDemo } from "@/components/demo/demo-flip-words";
import { CardHoverEffectDemo } from "@/components/demo/demo-hover-effect";
import { TextRevealCardPreview } from "@/components/demo/demo-text-reveal-card";
import { CanvasRevealEffectDemo } from "@/components/demo/demo-canvas-reveal-effect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Shriyan Yamali</title>
        <meta
          name="Home Page for Shriyan Yamali's Personal Website"
          content="Shriyan, Yamali, Website, Github, Linkedin, Instagram, X, Twitter"
        />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="!pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col mb-8">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Shriyan Yamali"
                className="mb-16 w-full h-auto dark:hidden md:inline-block md:w-full"
                height="400"
                width="400"
                priority
                sizes="(max-width: 768 px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
              <Image
                src={profilePicDark}
                alt="Shriyan Yamali"
                className="mb-16 w-full h-auto hidden dark:block dark:md:inline-block md:w-full"
                priority
                sizes="(max-width: 768 px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 lg:w-full lg:text-center">
              <div className="text-left lg:text-center">
                <FlipWordsDemo />
              </div>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs w-full lg:w-3/4 mx-auto">
                I&rsquo;m Shriyan Yamali, a full-stack developer with a
                specialization in Python and AI and an interest in law, video
                game development, cooking, and politics.
              </p>
              <div className="w-1/2 flex flex-col items-start self-center lg:items-center lg:w-full lg:text-center lg:hidden">
                <div className="pt-4">
                  <Link href="/projects">
                    <div className="grid gap-8 items-start justify-center">
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <button
                          className="relative px-7 py-4 bg-dark rounded-lg leading-none flex items-center divide-x divide-gray-600
                          text-gray-100 transition-all duration-500 group-hover:text-dark group-hover:bg-light 
                           dark:text-dark  dark:bg-light dark:group-hover:text-light dark:group-hover:bg-dark
                           md:p-2 md:px-4 md:text-base 
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
                              className="w-5 h-5 animate-scale"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

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
                      className="w-5 h-5 animate-scale"
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

          <div className="items-center justify-center text-center my-32">
            <AnimatedText
              text="Who am I?"
              className="!text-4xl pt-20 xl:!text-3xl mb-4
                "
            />
            <CanvasRevealEffectDemo />

            <div className="mt-48 sm:mt-32">
              <TextRevealCardPreview />

              <div className="flex items-center justify-center w-full">
                <Link href="/contact">
                  <div className="flex flex-col items-center justify-center transition duration-500 font-semibold bg-slate-300 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-700/[0.2] dark:border-slate-300/[0.2] rounded-2xl relative overflow-hidden p-4 w-full max-w-[20rem] shadow-custom-light dark:shadow-custom-dark">
                    <h2 className="text-center text-lg sm:text-base">
                      Let&rsquo;s Work Together
                    </h2>
                  </div>
                </Link>
              </div>
            </div>

            <CardHoverEffectDemo />
          </div>
        </Layout>
      </main>
    </>
  );
}
