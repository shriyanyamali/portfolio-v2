import { useState, useEffect } from "react";
import Layout from "./Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "", target }) => {
  const router = useRouter();
  return (
    <motion.a
      href={href}
      target={target}
      className={`${className} relative group inline-block`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-black dark:bg-white
                absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? "w-full" : "w-0"}
                `}
      >
        &nbsp;
      </span>
    </motion.a>
  );
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 75) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="relative w-full border-t-2 border-solid border-light dark:border-dark font-medium text-lg bg-slate-300 dark:bg-gray-800 text-black dark:text-white">
      <div className="max-w-screen-xl mx-auto py-12 grid grid-cols-4 gap-8 text-center lg:grid-cols-1 lg:flex lg:flex-col">
        <div className="col-span-2 flex flex-col lg:items-center items-start text-left txl:ml-12 lg:!ml-0">
          <h1 className="text-glow text-8xl txl:text-7xl font-bold mb-6 lg:!text-3xl">
            SHRIYAN
            <br className="lg:hidden" />
            YAMALI
            <br className="lg:hidden" />
            .TECH
          </h1>
        </div>

        {/* Site Links Section */}
        <div className="lg:flex lg:flex-col lg:items-center">
          <h3 className="text-2xl font-bold mb-6 lg:!text-xl">Site Links</h3>
          <ul className="space-y-3 text-lg">
            <li>
              <CustomLink
                href="/"
                title="Home"
                className="hover:text-gray-600 hover:dark:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="/projects"
                title="Projects"
                className="hover:text-gray-600 hover:dark:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="/resume"
                title="Resume"
                className="hover:text-gray-600 hover:dark:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="/contact"
                title="Contact"
                className="hover:text-gray-600 hover:dark:text-gray-400"
              />
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="lg:flex lg:flex-col lg:items-center">
          <h3 className="text-2xl font-bold mb-6 lg:!text-xl">Contact</h3>
          <ul className="space-y-3 text-lg">
            <li>
              <CustomLink
                href="https://www.instagram.com/shriyanyamali/"
                title="Instagram"
                target="_blank"
                className="hover:text-gray-600 hover:dark:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="https://x.com/shriyanyamali"
                title="Twitter"
                target="_blank"
                className="hover:text-gray-600 hover:dark:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="https://www.linkedin.com/in/shriyanyamali/"
                title="LinkedIn"
                target="_blank"
                className="hover:text-gray-600 hover:dark:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="https://github.com/ShriyanYamali"
                title="GitHub"
                target="_blank"
                className="hover:text-gray-600 hover:dark:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="mailto:yamalishriyan@gmail.com"
                title="Email"
                target="_blank"
                className="hover:text-gray-600 hover:dark:text-gray-400"
              />
            </li>
          </ul>
        </div>

        {/* Copyright and Legal Links */}
        <span className="text-lg whitespace-nowrap txl:ml-12 lg:!ml-0 lg:whitespace-normal">
          Copyright &copy; {new Date().getFullYear()} Shriyan Yamali.{" "}
          <br className="hidden lg:block" />
          All rights reserved. &nbsp;
        </span>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`z-50 fixed bottom-4 right-6 p-4 lg:p-3 rounded-full bg-slate-400 dark:bg-gray-700 text-dark dark:text-light shadow-lg
          hover:bg-slate-500 hover:dark:bg-slate-600 transform transition-transform duration-300 ${
            isVisible ? "translate-y-0 opacity-90" : "translate-y-20 opacity-0"
          }`}
        aria-label="Scroll to top"
        style={{ transitionProperty: "transform, opacity" }}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
