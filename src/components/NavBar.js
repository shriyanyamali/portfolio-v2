import Link from "next/link";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  XIcon,
  InstagramIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion, AnimatePresence } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

// Animation variants
const outerContainerVariants = {
  hidden: { y: "-100%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    y: "-120%",
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const MotionLink = motion(Link);

const textContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle, target }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    if (target === "_blank") {
      window.open(href, "_blank");
    } else {
      router.push(href);
    }

    setTimeout(() => {
      toggle();
    }, 100);
  };

  return (
    <button
      className={`${className} relative group text-dark dark:text-light my-1 text-3xl w-full text-left`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light dark:bg-dark
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
      dark:text-light relative z-50 lg:px-16 md:px-12 sm:px-8 flex-row-reverse"
    >
      {/* Hamburger button */}
      <button
        className="flex-col justify-center items-center hidden lg:flex z-50"
        onClick={handleClick}
      >
        <span
          className={`block h-0.5 w-6 rounded-sm mt-6 transition-transform duration-300 ease-out ${
            isOpen
              ? "bg-light dark:bg-dark rotate-45 translate-y-1"
              : "bg-dark dark:bg-light -translate-y-0.5"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm my-0.5 transition-opacity duration-300 ${
            isOpen
              ? "bg-light dark:bg-dark opacity-0"
              : "bg-dark dark:bg-light opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm transition-transform duration-300 ease-out ${
            isOpen
              ? "bg-light dark:bg-dark -rotate-45 -translate-y-1"
              : "bg-dark dark:bg-light translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Desktop nav */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/resume" title="Resume" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.instagram.com/_shriyanyamali/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href="https://x.com/Shriyan_Y"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <XIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shriyanyamali/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/ShriyanYamali"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <GithubIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-5 flex items-center justify-center rounded-full p-1 mx-3 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>

          <MotionLink
            href="https://dev.shriyanyamali.tech/"
            className="group relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-neutral-950 dark:bg-neutral-100 font-medium text-neutral-200 dark:text-neutral-900 transition-all duration-300 hover:w-48"
          >
            <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-6 group-hover:opacity-100">
              View Plain Site
            </div>
            <div className="absolute right-1.5">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </MotionLink>
        </nav>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={outerContainerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="w-full h-screen flex-col justify-between z-30 items-center fixed top-0 left-0 
            bg-dark dark:bg-light p-16 !pt-10"
          >
            <motion.nav
              variants={textContainerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex items-start flex-col justify-center space-y-2"
            >
              <motion.div variants={itemVariants}>
                <CustomMobileLink
                  href="/"
                  title="Home"
                  className="!text-light dark:!text-dark"
                  toggle={handleClick}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <CustomMobileLink
                  href="/projects"
                  title="Projects"
                  className="!text-light dark:!text-dark"
                  toggle={handleClick}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <CustomMobileLink
                  href="/resume"
                  title="Resume"
                  className="!text-light dark:!text-dark"
                  toggle={handleClick}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <CustomMobileLink
                  href="/contact"
                  title="Contact"
                  className="!text-light dark:!text-dark"
                  toggle={handleClick}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <CustomMobileLink
                  href="https://www.instagram.com/_shriyanyamali/"
                  target="_blank"
                  title="Instagram"
                  className="!text-fuchsia-400 dark:!text-cyan-600"
                  toggle={handleClick}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <CustomMobileLink
                  href="https://x.com/Shriyan_Y"
                  target="_blank"
                  title="Twitter"
                  className="!text-fuchsia-400 dark:!text-cyan-600"
                  toggle={handleClick}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <CustomMobileLink
                  href="https://www.linkedin.com/in/shriyanyamali/"
                  target="_blank"
                  title="Linkedin"
                  className="!text-fuchsia-400 dark:!text-cyan-600"
                  toggle={handleClick}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <CustomMobileLink
                  href="https://github.com/ShriyanYamali"
                  target="_blank"
                  title="GitHub"
                  className="!text-fuchsia-400 dark:!text-cyan-600"
                  toggle={handleClick}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <CustomMobileLink
                  href="mailto:yamalishriyan@gmail.com"
                  target="_blank"
                  title="Email"
                  className="!text-fuchsia-400 dark:!text-cyan-600"
                  toggle={handleClick}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <motion.button
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  className={`ml-5 sm:mx-1 flex items-center justify-center rounded-full p-1 w-12 mr-8 mb-4 ${
                    mode === "light"
                      ? "bg-dark text-light xs:mt-2"
                      : "bg-light text-dark xs:mt-2"
                  }`}
                >
                  {mode === "dark" ? (
                    <SunIcon className={"fill-dark"} />
                  ) : (
                    <MoonIcon className={"fill-dark"} />
                  )}
                </motion.button>
                
              </motion.div>

            <motion.div variants={itemVariants}>
              <MotionLink
                  href="https://dev.shriyanyamali.tech/"
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full dark:bg-neutral-950 bg-neutral-100 font-medium dark:text-neutral-200 text-neutral-900 w-48"
                >
                  <div className="mr-6">
                    View Plain Site
                  </div>
                  <div className="absolute right-3.5">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </MotionLink>
              </motion.div>

            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute left-[50%] top-5 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
