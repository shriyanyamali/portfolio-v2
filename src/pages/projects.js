// Inside your projects.js file

import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { ThreeDCardOne } from "@/components/project-cards/card-1";
import { ThreeDCardTwo } from "@/components/project-cards/card-2";
import { ThreeDCardThree } from "@/components/project-cards/card-3";
import { ThreeDCardFour } from "@/components/project-cards/card-4";
import { ThreeDCardFive } from "@/components/project-cards/card-5";
import { ThreeDCardSix } from "@/components/project-cards/card-6";

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects - Shriyan Yamali</title>
        <meta
          name="Projects Page for Shriyan Yamali"
          content="Technology, Computer Science, Law, Coding, Web Development, Student, High School, Stanford, UPenn, Github"
        />
      </Head>
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Projects"
            className="mb-4
            lg:!text-7xl sm:!text-6xl xs:!text-4xl w-11/12 pb-12"
          />

          {/* Container for the 3D cards with responsive grid layout */}
          <div className="grid grid-cols-2 gap-4 md:!grid-cols-1 xtl:grid-cols-2">
            <ThreeDCardOne />
            <ThreeDCardTwo />
            <ThreeDCardFour />

            <ThreeDCardThree />
            {/*
            <ThreeDCardFive />
            <ThreeDCardSix /> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
