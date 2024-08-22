import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  location,
  work,
  moreInfo,
}) => {
  const ref = useRef(null);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

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
        className="w-full"
      >
        <h3
          className="capitalize font-bold text-2xl
        sm:text-xl xs:text-lg
        "
        >
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span
          className="capitalize font-medium text-dark/75 dark:text-light/75
        xs:text-sm
        "
        >
          {time}
          <span className="text-xl">&nbsp;|&nbsp;</span>
          {location}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
        {moreInfo && (
          <>
            <div className="mt-4 w-full grid gap-8 items-start justify-start">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-500 to-green-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                  onClick={toggleShowMore}
                  className="relative w-full px-7 py-4 bg-dark rounded-lg leading-none flex items-center divide-x divide-gray-600 text-gray-100 transition-all duration-500 group-hover:text-dark group-hover:bg-light"
                >
                  <span className="flex items-left space-x-5">
                    <span>
                      {showMore ? "Hide Placements" : "Show Placements"}
                    </span>
                  </span>
                </button>
              </div>
            </div>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 w-full"
              >
                {moreInfo.map((line, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom:
                        line === "" ? "16px" : index === 0 ? "12px" : "8px",
                      lineHeight: line === "" ? "1.5" : "1.2",
                    }}
                  >
                    {line}
                  </div>
                ))}
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const bpaMoreInfo = [
    "2024 National Leadership Conference:",
    "• First Place at the National Level in Management, Marketing & Human Resources Concepts",
    "• First Place at the National Level in Meeting & Event Planning Concepts",
    "• Top 10 in Parliamentary Procedure Concepts",
    "",
    "2024 State Leadership Conference:",
    "• 1st place award for Legal Office Procedures",
    "• 1st place award for Management, Marketing & Human Resources",
  ];

  return (
    <div className="my-32">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center dark:text-light
      md:text-6xl xs:text-4xl md:mb-16
      "
      >
        Experience
      </h2>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative
      lg:w-[90%] md:w-full
      "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 -top-28 lg:-top-40 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />

        <ul
          className="w-full flex flex-col items-start justify-between ml-4 dark:text-light
        xs:ml-2
        "
        >
          <Details
            position="Programming Intern"
            company="University of Pennsylvania Carey Law School"
            companyLink="https://www.law.upenn.edu/"
            time="July 2024 — August 2024"
            location="Philadelphia, Pennsylvania"
            work="Developed a program that creates diagrams based on the relative weight and importance of legal principles and
            the effect of the principles on an act type."
          />

          <Details
            position="Assistant Editor"
            company="Dartmouth College"
            companyLink="https://home.dartmouth.edu/"
            time="July 2024 — Present"
            location="Hanover, New Hampshire"
            work="Editor for research papers about AI, machine learning, and computer science | Specializing in mechanical editing."
          />

          <Details
            position="Legal Intern"
            company="Stanford Law School"
            companyLink="https://law.stanford.edu/"
            time="June 2024 — Present"
            location="Stanford, California"
            work="Developing innovative AI models using JavaScript and Python in order to analyze over 10,000 antitrust cases."
          />

          <Details
            position="Programming Intern"
            company="Vrije Universiteit Amsterdam"
            companyLink="https://vu.nl/en"
            time="June 2024 — Present"
            location="Amsterdam, Netherlands"
            work="Designing websites for hosting AI and NLP models with semantic search capabilities for efficient antitrust case
            data management and data retrieval."
          />

          <Details
            position="Research Intern"
            company="Wilmington University School of Law"
            companyLink="https://www.wilmu.edu/"
            time="June 2024 — Present"
            location="Wilmington, Delaware"
            work="Researching the legal, ethical, economic, and political effects of enhanced interrogation at Guantanamo Bay."
          />

          <Details
            position="Treasurer"
            company="Delaware Museum of Nature & Science"
            companyLink="https://delmns.org/"
            time="May 2024 — Present"
            location="Wilmington, Delaware"
            work="Coordinating logistics and information for setting up educational science cafe events for children | Managing
            budgets and grants."
          />

          <Details
            position="Competing Member"
            company="Business Professionals of America"
            companyLink="https://bpa.org/"
            time="Sept 2023 — Present"
            location="Newark, Delaware"
            work="Participating in the state and national competitions for Business Professionals of America."
            moreInfo={bpaMoreInfo}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
