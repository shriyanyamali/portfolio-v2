import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const LogoMobile = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold
        border border-solid border-transparent dark:border-light hidden lg:flex
        "
        style={{ fontFamily: "'Courier New', Courier, 'Lucida Console', monospace" }}
        whileHover={{
          scale: 1.25,
          backgroundColor: [
            "#333333",
            "#4682B4",
            "#A9A9A9",
            "#87CEEB",
            "#B0C4DE",
            "#708090",
            "#2E8B57",
            "#20B2AA",
            "#2F4F4F",
          ],
          transition: {
            backgroundColor: {
              duration: 2,
              repeat: Infinity,
            },
          },
        }}
      >
        SY
      </MotionLink>
    </div>
  );
};

export default LogoMobile;
