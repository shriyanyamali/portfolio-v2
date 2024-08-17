import React, { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import { XIcon, InstagramIcon, GithubIcon, LinkedInIcon } from "../components/Icons";

const Contact = () => {
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);
  const darkModeFirstVideoRef = useRef(null);
  const darkModeSecondVideoRef = useRef(null);

  useEffect(() => {
    const firstVideoElement = firstVideoRef.current;
    const secondVideoElement = secondVideoRef.current;
    const darkModeFirstVideoElement = darkModeFirstVideoRef.current;
    const darkModeSecondVideoElement = darkModeSecondVideoRef.current;

    const isMobile = window.innerWidth < 768;
    const isInApp = navigator.userAgent.includes("Instagram") || navigator.userAgent.includes("LinkedIn");

    const hideAllVideos = () => {
      firstVideoElement.style.display = "none";
      secondVideoElement.style.display = "none";
      darkModeFirstVideoElement.style.display = "none";
      darkModeSecondVideoElement.style.display = "none";
      firstVideoElement.pause();
      secondVideoElement.pause();
      darkModeFirstVideoElement.pause();
      darkModeSecondVideoElement.pause();
      firstVideoElement.currentTime = 0;
      secondVideoElement.currentTime = 0;
      darkModeFirstVideoElement.currentTime = 0;
      darkModeSecondVideoElement.currentTime = 0;
    };

    const handleFirstVideoEnd = () => {
      hideAllVideos();
      secondVideoElement.style.display = "block";
      secondVideoElement.play();
    };

    const handleDarkModeFirstVideoEnd = () => {
      hideAllVideos();
      darkModeSecondVideoElement.style.display = "block";
      darkModeSecondVideoElement.play();
    };

    const handleThemeChange = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");

      hideAllVideos();

      if (!isMobile && !isInApp) {
        if (isDarkMode) {
          darkModeFirstVideoElement.style.display = "block";
          darkModeFirstVideoElement.play();
        } else {
          firstVideoElement.style.display = "block";
          firstVideoElement.play();
        }
      }
    };

    // Initial theme check
    handleThemeChange();

    // Watch for theme changes
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Attach event listeners
    firstVideoElement.addEventListener("ended", handleFirstVideoEnd);
    darkModeFirstVideoElement.addEventListener("ended", handleDarkModeFirstVideoEnd);

    return () => {
      firstVideoElement.removeEventListener("ended", handleFirstVideoEnd);
      darkModeFirstVideoElement.removeEventListener("ended", handleDarkModeFirstVideoEnd);
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Contact - Shriyan Yamali</title>
        <meta
          name="Contact for Shriyan Yamali"
          content="Contact, Instagram, X, Twitter, Linkedin, Github, Newark Charter School, NCS, Shriyan Yamali, Shriyan, Yamali"
        />
      </Head>
      <main>
        <Layout className="pt-16">
          <div className="flex bg-orange-100 dark:bg-blue-900 py-20 px-12 w-full">
            <div className="max-w-4xl mx-auto flex-1">
              <AnimatedText
                text="How can I help?"
                className="!text-green-600 text-left text-xl font-bold"
              />
              <AnimatedText
                text="Contact Me"
                className="!text-dark text-4xl font-bold mb-6 text-left sm:!text-6xl xs:!text-4xl sm:mb-8 dark:!text-light"
              />
              <h2 className="text-lg text-left dark:text-light sm:!text-base xs:!text-sm sm:mb-8">
                I&rsquo;m here to help and answer any questions you might have.{" "}
                <br />
                Alternatively, feel free to reach out if you want to work
                together <br />
                or reach me for another reason. I&rsquo;m excited to hear from
                you! <br />
              </h2>

              <div className="mt-4 text-left text-lg space-y-4 sm:!text-base xs:!text-sm sm:mb-8 dark:text-light">
                <div className="flex items-center space-x-2">
                  <span className="text-xl transition-all duration-300 hover:scale-105 cursor-default">
                    📍
                  </span>
                  <a
                    href="https://newarkde.gov/"
                    target="_blank"
                    className="transition-all duration-300 hover:scale-105"
                  >
                    Newark, Delaware
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl transition-all duration-300 hover:scale-105 cursor-default">
                    🏫
                  </span>
                  <a
                    href="https://newarkcharterschool.org/"
                    target="_blank"
                    className="transition-all duration-300 hover:scale-105"
                  >
                    Newark Charter School
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl transition-all duration-300 hover:scale-105 cursor-default">
                    ✉️
                  </span>
                  <a
                    href="mailto:srujanshriyan@gmail.com"
                    target="_blank"
                    className="transition-all duration-300 hover:scale-105"
                  >
                    srujanshriyan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex justify-start space-x-6 mt-8">
                <a
                  href="https://www.instagram.com/_shriyanyamali/"
                  target="_blank"
                  className="transition-all duration-300 transform hover:scale-125 w-8 h-8 sm:!w-7"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://x.com/Shriyan_Y"
                  target="_blank"
                  className="transition-all duration-300 transform hover:scale-125 w-8 h-8 sm:!w-7"
                >
                  <XIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/shriyan-yamali/"
                  target="_blank"
                  className="transition-all duration-300 transform hover:scale-125 w-8 h-8 sm:!w-7"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://github.com/ShriyanYamali"
                  target="_blank"
                  className="transition-all duration-300 transform hover:scale-125 w-8 h-8 sm:!w-7"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center items-center relative">
              {/* Light mode videos */}
              <video
                ref={firstVideoRef}
                id="paper-animation-video"
                className="w-full lg:!hidden max-w-sm hidden dark:hidden"
                src="/videos/pfp-paperanimation.mp4"
                autoPlay
                muted
              />
              <video
                ref={secondVideoRef}
                id="infinite-paper-animation-video"
                className="w-full lg:!hidden max-w-sm hidden dark:hidden"
                src="/videos/pfp-paperanimation-infinite.mp4"
                muted
                loop
              />

              {/* Dark mode videos */}
              <video
                ref={darkModeFirstVideoRef}
                id="paper-animation-blue-video"
                className="hidden lg:!hidden dark:block w-full max-w-sm"
                src="/videos/pfp-paperanimation-blue.mp4"
                autoPlay
                muted
              />
              <video
                ref={darkModeSecondVideoRef}
                id="infinite-paper-animation-blue-video"
                className="hidden lg:!hidden dark:block w-full max-w-sm"
                src="/videos/pfp-paperanimation-blue-infinite.mp4"
                muted
                loop
              />
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Contact;
