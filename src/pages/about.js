import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/pfp.jpg";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";

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

const about = () => {
  return (
    <>
      <Head>
        <title>About - Shriyan Yamali</title>
        <meta
          name="About Page for Shriyan Yamali"
          content="Technology, Computer Science, Law, Coding, Web Development, Student, High School"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="About"
            className="mb-4 lg:!text-7xl sm:!text-6xl xs:!text-4xl
          sm:mb-2
          "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xtl:col-span-4 lg:order-2 lg:!col-span-8
            "
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="my-4 font-medium">
                I am Shriyan Yamali, a dedicated high school student at Newark
                Charter High School.
              </p>

              <p className="font-medium">
                I have a passion for computers and currently work on personal
                programming projects. I am also certified in social media
                marketing and computer science. I also have a passion for law,
                which is currently expressed through my work with the American
                Civil Liberties Union.
              </p>

              <p className="my-4 font-medium">
                I&rsquo;m also part of my school&rsquo;s Mock Trial team, which
                has been nationally acclaimed, as well as my school&rsquo;s
                volleyball, math league, Business Professionals of America, and
                trivia team.
              </p>
              <br />
              <p className="font-medium">
                I&rsquo;m excited to see where the fields of computer science
                and law go, and how they will eventually integrate. I&rsquo;m
                looking forward to furthering my education and starting my
                career, through which I hope to ensure legal and technological
                literacy as a future standard.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8 dark:bg-dark dark:border-light xtl:col-span-4 lg:order-1 lg:!col-span-8
                        "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Shriyan Yamali"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768 px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xtl:col-span-8 xtl:flex-row xtl:items-center lg:order-3">
              <div className="flex flex-col items-end justify-center xtl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:!text-4xl">
                  <AnimatedNumbers value={15000} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xtl:text-center md:text-lg sm:text-base
                xs:text-sm
                "
                >
                  Lines of Code Written
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xtl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:!text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xtl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  Ivy Leagues Worked For
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xtl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:!text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xtl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  Projects Completed
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Awards />
        </Layout>
      </main>
    </>
  );
};

export default about;
