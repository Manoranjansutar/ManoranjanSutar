"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Turning Vision Into Reality With Code And Design.`;

export function TextGenerateEffectDemo() {
  return <h1><TextGenerateEffect words={words} className="text-9xl"/></h1>;
}
