import React from "react";
import { motion } from "framer-motion";

const awards = [
  {
    title: "Delaware Mock Trial Committee",
    description: "Best Attorney Award out of more than 300 other attorneys.",
  },
  {
    title: "Business Professionals of America (BPA)",
    description:
      "First Place at the National Level in Management, Marketing & Human Resources Concepts out of more than 6,300 participants.",
  },
  {
    title: "Business Professionals of America (BPA)",
    description:
      "First Place at the National Level in Meeting & Event Planning Concepts out of more than 6,000 participants.",
  },
  {
    title: "Business Professionals of America (BPA)",
    description:
      "First Place at the State Level in Legal Office Procedures out of more than 500 participants.",
  },
];

const AwardCard = ({ title, description }) => (
  <motion.div
    className="p-4 my-4 rounded-lg shadow-card text-center bg-teal-100 dark:bg-gray-800"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    style={{
      borderLeft: "none",
      borderTop: "none",
      borderRight: "4px solid #bbf7d0",
      borderBottom: "4px solid #bbf7d0",
    }}
  >
    <h3 className="text-[1.25rem] sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-dark/75 dark:text-light">
      {title}
    </h3>
    <p className="text-[1.25rem] sm:text-xs md:text-sm lg:text-base xl:text-lg text-dark/75 dark:text-light">
      {description}
    </p>
  </motion.div>
);

const Awards = () => {
  return (
    <>
      <h2 className="font-bold text-8xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-48 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 w-full text-center">
        Awards
      </h2>
      <div className="w-1/2 mx-auto lg:w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {awards.map((award, index) => (
          <div
            key={index}
            className="col-span-5 lg:col-span-2"
          >
            <AwardCard
              title={award.title}
              description={award.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Awards;
