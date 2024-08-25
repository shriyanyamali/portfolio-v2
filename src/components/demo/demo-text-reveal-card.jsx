"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center rounded-2xl w-full pb-8">
      <TextRevealCard text="You Know What You Want" revealText="I Know How To Do It">
      </TextRevealCard>
    </div>
  );
}
