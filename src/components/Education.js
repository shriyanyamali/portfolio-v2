import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, institution, place, placeLink, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
      md:w-[80%]
      "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl
        sm:text-xl xs:text-lg
        ">
          {type}&nbsp;
          <a
            href={placeLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{institution}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75
        xs:text-sm
        ">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light
      md:text-6xl xs:text-4xl md:mb-16
      ">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative 
      lg:w-[90%] md:w-full
      ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 dark:text-light
        xs:ml-2
        ">
          <Details
            type="Student"
            time="July 2024 - May 2027"
            institution="Newark Charter High School"
            place="Newark, Delaware"
            placeLink="https://newarkcharterschool.org/sr-high-school-home"
            info="Violinist of 6 Years & Athlete; Member of Mock Trial, Student Council, and Math League; Business Professionals of
            America member and two time first place national winner."
          />

          <Details
            type="Student"
            time="Sept 2015 — June 2023"
            institution="Newark Charter Elementary & Intermediate School"
            place="Newark, Delaware"
            placeLink="https://newarkcharterschool.org/"
            info="Student Council treasurer and member of Speech and Debate and Math League."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
