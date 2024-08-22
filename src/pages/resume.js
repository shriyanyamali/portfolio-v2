import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { DownloadIcon, LinkArrow } from "@/components/Icons";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Volunteering from "@/components/Volunteering";

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

const resume = () => {
  return (
    <>
      <Head>
        <title>Resume - Shriyan Yamali</title>
        <meta
          name="Resume Page for Shriyan Yamali"
          content="Technology, Computer Science, Law, Coding, Web Development, Student,
            High School, Resume, Skilled, Coder, CSS, HTML, JavaScript, Python, Research, Newark Charter School"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Resume"
            className="lg:!text-7xl sm:!text-6xl xs:!text-4xl w-11/12"
          />
          <div className="flex justify-center items-center self-center mt-4 space-x-4">
            <Link
              href="/Shriyan Yamali Resume.pdf"
              target="_blank"
              className="flex items-center bg-dark text-light p-6-fix px-8
              rounded-lg text-xl font-semibold transition-all duration-500
              hover:bg-black hover:text-gray-200 hover:scale-105 hover:translate-y-[-2px] 
              border-2 border-solid border-transparent hover:border-dark
              dark:hover:border-light dark:bg-light dark:text-dark hover:dark:bg-white dark:hover:bg-white dark:hover:text-gray
              lg:p-6-fix lg:px-2 lg:text-sm lg:mt-4
              "
            >
              View Resume
              <LinkArrow className={"ml-2 sm:ml-0"} style={{ width: "2rem" }} />
            </Link>

            <Link
              href="/Shriyan Yamali Resume.pdf"
              target={"_blank"}
              className="flex items-center bg-dark text-light p-5 px-7
              rounded-lg text-xl font-semibold transition-all duration-500
              hover:bg-black hover:text-gray-200 hover:scale-105 hover:translate-y-[-2px] 
              border-2 border-solid border-transparent 
              dark:hover:border-light dark:bg-light dark:text-dark hover:dark:bg-white dark:hover:bg-white dark:hover:text-black
              lg:mt-4
              "
              download={true}
            >
              <DownloadIcon style={{ width: "2rem" }} />
            </Link>
          </div>

          <Education />
          <Experience />
          <Volunteering />
        </Layout>
      </main>
    </>
  );
};

export default resume;
