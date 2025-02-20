import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  const [themeColor, setThemeColor] = useState("#9333EA"); // Default purple
  const [hoverColor, setHoverColor] = useState("#A78BFA"); // Lighter purple for hover

  useEffect(() => {
    // Function to determine if it's dark mode based on user preference
    const isDarkMode = () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Update theme color based on dark mode
    if (isDarkMode()) {
      setThemeColor("#34D399"); // Green for dark mode
      setHoverColor("#6EE7B7"); // Lighter green for hover
    } else {
      setThemeColor("#9333EA"); // Purple for light mode
      setHoverColor("#A78BFA"); // Lighter purple for hover
    }
  }, []);

  return (
    <section className="container grid  lg:grid-cols-2 place-items-center py-10 md:py-8 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              SemiColonError's
            </span>{" "}
            AI
          </h1>{" "}
          Intelligent Document Summarization For Efficient{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Information
            </span>{" "}
            Extraction
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Unlock the Power of AI for Efficient Document Summarization
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <motion.div
            className="w-full md:w-2/3 lg:w-2/3"
            whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${hoverColor}` }} // Glow effect
            transition={{ duration: 0.2 }}
          >
            <Button
              className="w-full transition-all duration-300 text-white font-bold py-3 px-6 rounded-md shadow-md"
              style={{
                background: themeColor,
              }}
              onClick={() =>
                (window.location.href =
                  "https://ai-summarizer-delta-eosin.vercel.app/")
              }
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};