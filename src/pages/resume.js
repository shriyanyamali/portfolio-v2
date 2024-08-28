import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { DownloadIcon, LinkArrow } from "@/components/Icons";
import EducationTimeline from "@/components/EducationTimeline";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import VolunteeringTimeline from "@/components/VolunteeringTimeline";

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
            className="lg:!text-7xl sm:!text-6xl xs:!text-4xl w-11/12 pb-12" 
          />
          <div className="flex justify-center items-center self-center mt-4 space-x-4">
            <Link
              href="/Shriyan Yamali Resume.pdf"
              target="_blank"
              className="flex items-center bg-dark text-light p-5 px-4
              rounded-lg text-xl font-semibold transition-all duration-500
              hover:bg-black hover:text-gray-200 hover:scale-105 hover:translate-y-[-2px] 
              border-2 border-solid border-transparent hover:border-dark
              dark:hover:border-light dark:bg-light dark:text-dark hover:dark:bg-white dark:hover:bg-white dark:hover:text-gray
              lg:p-4 lg:px-3 lg:text-sm lg:mt-4
              "
            >
              View CV
              <LinkArrow className={"ml-2 sm:ml-1"} style={{ width: "2rem" }} />
            </Link>

            <Link
              href="/Shriyan Yamali Resume.pdf"
              target={"_blank"}
              className="flex items-center bg-dark text-light p-5 px-4
              rounded-lg text-xl font-semibold transition-all duration-500
              hover:bg-black hover:text-gray-200 hover:scale-105 hover:translate-y-[-2px] 
              border-2 border-solid border-transparent hover:border-dark
              dark:hover:border-light dark:bg-light dark:text-dark hover:dark:bg-white dark:hover:bg-white dark:hover:text-gray
              lg:p-4 lg:px-3 lg:text-sm lg:mt-4
              "
              download={true}
            >
              Download
              <DownloadIcon className={"ml-2 sm:ml-1"}  style={{ width: "2rem" }} />
            </Link>
          </div>


          <h2 className="mb-16 mt-32 dark:text-light font-bold text-8xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:mt-32 w-full text-center">
            Education
          </h2>
          <EducationTimeline />

          <h2 className="mb-16 mt-32 dark:text-light font-bold text-8xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:mt-32 w-full text-center">
            Experience
          </h2>
          <ExperienceTimeline />

          <h2 className="mb-16 mt-32 dark:text-light font-bold text-8xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:mt-32 w-full text-center">
             Volunteering
          </h2>
          <VolunteeringTimeline />

          {/* <Education />
          <Experience />
          <Volunteering /> */}
        </Layout>
      </main>
    </>
  );
};

export default resume;
