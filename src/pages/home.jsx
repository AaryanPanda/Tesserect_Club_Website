import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../components/home/hero";
import AboutSection from "../components/home/aboutSection";
import JoinSection from "../components/home/joinSection";
import Footer from "../components/footer";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]); // Parallax effect for scroll

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a0000] via-[#000919] to-[#1a0019] text-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <motion.div style={{ y }}>
        <Hero />
      </motion.div>

      {/* About Section with Parallax */}
      <motion.div style={{ y }}>
        <AboutSection />
      </motion.div>

      {/* Join Section with Parallax */}
      <motion.div style={{ y }}>
        <JoinSection />
      </motion.div>

      <Footer />
    </main>
  );
}
