"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "../../../utils/cn";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex  rounded-lg">
      <Boxes />
      <h1 className="text-white">
       About
      </h1>
     
    </div>
  );
}
