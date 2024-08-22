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
      whileTap={{ scale: 0.9 }}
      className={`${className} relative group inline-block`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-white
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
    if (window.scrollY > 15) {
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
    <footer className="relative w-full border-t-2 border-solid border-dark font-medium text-lg bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto py-12 grid grid-cols-4 gap-8 text-center lg:grid-cols-1 lg:flex lg:flex-col">
        <div className="col-span-2 flex flex-col items-center text-left xtl:ml-12 lg:!mr-9">
          <div className="items-start">
            <h3 className="text-2xl font-bold mb-6 items-start lg:!text-xl">
              About Shriyan Yamali
            </h3>
            <p className="text-lg mb-6 lg:text-base">
              Shriyan Yamali is a passionate high school student certified in
              computer science, web development, and Python. He is skilled in
              web design, Java, JavaScript, and Python, with experience in
              natural language processing (NLP) and machine learning from
              Stanford University. He is actively engaged with the ACLU to
              protect civil rights, and is involved with clubs like Mock Trial,
              Math League, and Student Council. He also has a six-year
              background in violin and athletics.
            </p>
          </div>
        </div>

        {/* Site Links Section */}
        <div className="lg:flex lg:flex-col lg:items-center">
          <h3 className="text-2xl font-bold mb-6 lg:!text-xl">Site Links</h3>
          <ul className="space-y-3 text-lg">
            <li>
              <CustomLink
                href="/"
                title="Home"
                className="hover:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="/about"
                title="About"
                className="hover:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="/projects"
                title="Projects"
                className="hover:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="/resume"
                title="Resume"
                className="hover:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="/contact"
                title="Contact"
                className="hover:text-gray-400"
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
                href="https://www.instagram.com/_shriyanyamali/"
                title="Instagram"
                target="_blank"
                className="hover:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="https://x.com/Shriyan_Y"
                title="X"
                target="_blank"
                className="hover:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="https://www.linkedin.com/in/shriyan-yamali/"
                title="LinkedIn"
                target="_blank"
                className="hover:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="https://github.com/ShriyanYamali"
                title="GitHub"
                target="_blank"
                className="hover:text-gray-400"
              />
            </li>
            <li>
              <CustomLink
                href="mailto:srujanshriyan@gmail.com"
                title="Email"
                target="_blank"
                className="hover:text-gray-400"
              />
            </li>
          </ul>
        </div>

        {/* Copyright and Legal Links */}
        <span className="text-lg whitespace-nowrap xtl:ml-12 lg:whitespace-normal">
          Copyright &copy; {new Date().getFullYear()} Shriyan Yamali.{" "}
          <br className="hidden lg:block" />
          All rights reserved.
        </span>
        <div className="col-span-4 flex flex-col items-center justify-center">
          <div className="flex items-center">
            <CustomLink
              href="/privacy"
              title="Privacy Policy"
              className="hover:text-gray-400"
            />
            <span className="mx-2">|</span>
            <CustomLink
              href="/terms"
              title="Terms of Service"
              className="hover:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-6 p-4 lg:p-3 rounded-full bg-gray-700 text-white shadow-lg hover:bg-gray-600 transform transition-transform duration-300 ${
          isVisible ? "translate-y-0 opacity-80" : "translate-y-20 opacity-0"
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
