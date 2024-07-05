"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import react from './../../assets/react.svg';




export function AnimatedTooltipPreview({techStack}) {
  return (
    <div className="flex flex-row items-center justify-center w-full mb-10">
      <AnimatedTooltip items={techStack} />
    </div>
  );
}
