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
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    y: "-120%",
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const textContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.4,
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
  };

  return (
    <button
      className={`${className} relative group text-dark dark:text-light my-2 text-3xl w-full text-left`}
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
            href="https://www.linkedin.com/in/shriyan-yamali/"
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
            className={`ml-5 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
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
                  href="https://www.linkedin.com/in/shriyan-yamali/"
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
                  className={`ml-5 sm:mx-1 flex items-center justify-center rounded-full p-1 w-12 ${
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
