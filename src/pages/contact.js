import React, { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import {
  XIcon,
  InstagramIcon,
  GithubIcon,
  LinkedInIcon,
} from "../components/Icons";
import { GlareCardDemo } from "@/components/demo/demo-glare-card";

const Contact = () => {
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
          <div className="flex bg-orange-100 dark:bg-blue-900 py-20 px-12 sm:px-8 w-full">
            <div className="max-w-4xl mx-auto flex-1">
              <AnimatedText
                text="Contact Me"
                className="!text-dark text-4xl font-bold mb-6 text-left sm:!text-6xl xs:!text-4xl sm:mb-8 dark:!text-light"
              />
              <h2 className="text-lg text-left dark:text-light sm:!text-base xs:!text-sm mb-8">
                Send me a message! I check my email and &nbsp;
                <br className="sm:hidden" />
                messages regularly so expect a response within &nbsp;
                <br className="sm:hidden" />
                1-5 business days. I&rsquo;m excited to chat!
              </h2>

              <div className="mt-4 text-left text-lg space-y-4 sm:!text-base xs:!text-sm sm:mb-8 dark:text-light">
                <div className="flex items-center space-x-2">
                  <span className="text-xl cursor-default">📍</span>
                  <a
                    href="https://newarkde.gov/"
                    target="_blank"
                    className="transition-all duration-300 hover:scale-105"
                  >
                    Newark, Delaware
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl cursor-default">🏫</span>
                  <a
                    href="https://newarkcharterschool.org/"
                    target="_blank"
                    className="transition-all duration-300 hover:scale-105"
                  >
                    Newark Charter School
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl cursor-default">✉️</span>
                  <a
                    href="mailto:yamalishriyan@gmail.com"
                    target="_blank"
                    className="transition-all duration-300 hover:scale-105"
                  >
                    yamalishriyan@gmail.com
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

            <div className="flex-1 flex justify-center items-center relative mg:hidden">
              <GlareCardDemo />
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Contact;
