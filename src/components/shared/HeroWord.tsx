import React from "react";
import { FlipWords } from "../ui/FlipWords";

export function HeroWords() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
 
      <h1 className=" mx-auto text-neutral-100 dark:text-neutral-400 mb-8 text-2xl font-medium tracking-tighter">
        hey, I&apos;m Sagnik 👋
        <FlipWords words={words} /> <br />
      </h1>
    
  );
}
