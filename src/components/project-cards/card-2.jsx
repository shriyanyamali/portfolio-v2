"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCardTwo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[27.5rem] txl:w-[22rem] mg:w-[19rem] md:!w-[27rem] xs:!w-auto h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          LexFlow
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm min-h-[4rem] max-w-sm mt-2 dark:text-neutral-300"
        >
          A program that creates diagrams based on the relative weight and importance of legal principles and the effect of the principles on an act type.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/projects/lexflow.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/ShriyanYamali/LexFlow"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs lg:text-[0.6rem] font-normal dark:text-white"
          >
            Visit Project →
          </CardItem>
          <Link
          href="https://www.law.upenn.edu/"
          target="_blank"
          >
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs lg:text-[0.6rem] font-bold">
              w/ Penn Carey Law
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
