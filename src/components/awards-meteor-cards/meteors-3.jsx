import React from "react";
import { Meteors } from "../ui/meteors";

export function MeteorsDemo3() {
  return (
    <div className="">
      <div className=" w-full relative max-w-lg xtl:max-w-[23rem] lg:max-w-xs lg:mt-16">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-slate-500 to-stone-500 dark:bg-gradient-to-r dark:from-blue-500 dark:to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="min-h-64 relative shadow-xl bg-slate-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-800 dark:text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-dark dark:text-white mb-4 relative z-50">
            1st Place Nationally in Meeting & Event Planning Concepts (2024)
          </h1>

          <p className="font-normal text-base text-slate-700 dark:text-slate-500 mb-4 relative z-50 min-h-28">
            Awarded By: Business Professionals of America <br />
            Description: Ranked 1st out of 6,000 participants for excellence in business meeting management and good practices in any business unit. 
          </p>

          {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button> */}

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
