import React from "react";
import { motion } from "framer-motion";

const EducationTimeline = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ol className="relative border-s border-gray-200 dark:border-gray-700 max-w-[50rem] lg:max-w-full">
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
                <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg                 
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96 48 96C21.5 96 0 117.5 0 144L0 464c0 26.5 21.5 48 48 48l208 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 208 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L473.7 96 337.8 5.4zM96 192l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM96 320l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16z"/>
                </svg>     
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white mg:text-base sm:!text-sm">
                Student &nbsp;
                <div className="text-primary dark:text-primaryDark sm:ml-3">
                @Newark Charter High School
                </div>
                <span className="bg-blue-800 text-blue-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-300 dark:text-blue-900 ms-3 lg:hidden">
                On-Site
              </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                September 2023 — May 2027 | Newark, Delaware
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                Member of Mock Trial, Asian Student Union, Student Council, Math League. Violinist and athlete of 6 years.</p>
                </li>
            </motion.div>
      </ol>
    </div>
  );
};

export default EducationTimeline;
