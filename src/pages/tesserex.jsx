import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import EventGrid from "../components/tesserect/eventGrid";
import Footer from "../components/footer";
import { CalendarDays, Trophy, BookOpen } from "lucide-react"; // Added BookOpen icon

export default function Tesserex() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0014] via-[#000919] to-[#0a0014] text-white pt-16 overflow-x-hidden">
      <section className="mt-12">
        <div className="container mx-auto px-4">
          {/* Title Section - aligned with Team.jsx */}
          <div className="text-center mb-10">
            <motion.h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] font-poppins">
              ARENA-X
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-lg max-w-2xl mx-auto text-[#d4d4d8]"
            >
              The ultimate esports tournament — register solo or squad, and make your mark.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 mb-10 text-lg"
          >
            {/* Prize Pool */}
            <div className="flex items-center gap-4">
              <Trophy className="text-[#4d9fff]" size={30} />
              <span className="text-xl md:text-2xl text-[#d4d4d8] font-medium">
                Total prize pool:
              </span>
              <span className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#ffa07a]">
                ₹10,000
              </span>
            </div>

            {/* Dates */}
            <div className="flex items-center gap-4">
              <CalendarDays className="text-[#4d9fff]" size={30} />
              <span className="text-xl md:text-2xl text-[#d4d4d8] font-medium">
                Dates:
              </span>
              <span className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#ffa07a]">
                10<span className="lowercase">th</span> – 15
                <span className="lowercase">th</span> May, 2025
              </span>
            </div>
          </motion.div>

          {/* Rule Book Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center mb-6"
          >
            <div className="relative">
              {/* Continuous glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7e9eff]/70 to-[#55cdfc]/70 rounded-full blur-sm opacity-80 animate-pulse"></div>

              {/* Previously hover-only glow, now always on */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7e9eff]/50 to-[#55cdfc]/50 rounded-full blur-md opacity-100 transition-opacity duration-500"></div>

              {/* Main content */}
              <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#131b2e] border border-[#2a3652]/60 shadow-md hover:shadow-[#4d9fff]/30 transition-all">
                <BookOpen className="text-[#7e9eff]" size={18} />
                <span className="text-base text-[#d4d4d8] font-medium">
                  Rule Book -
                </span>
                <a
                  href="https://docs.google.com/document/d/1Q3b9F0-zv2GfmZhh5r5DSynrF-c2Zrz5OCWzNVjeHmo/edit?usp=drivesdk"
                  rel="noopener noreferrer"
                  className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#7e9eff] to-[#55cdfc] hover:from-[#55cdfc] hover:to-[#7e9eff] transition-all underline decoration-[#55cdfc]/30 hover:decoration-[#55cdfc] decoration-1 underline-offset-2"
                >
                  Click here
                </a>
              </div>
            </div>
          </motion.div>

          {/* Parallax + Grid Entrance */}
          <motion.div style={{ y }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <EventGrid />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
