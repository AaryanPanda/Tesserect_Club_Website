import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import EventGrid from "../components/tesserect/eventGrid";
import Footer from "../components/footer";
import { CalendarDays, Trophy } from "lucide-react";

export default function Tesserex() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0014] via-[#000919] to-[#0a0014] text-white pt-16 overflow-x-hidden">
      <section className="mt-12">
        <div className="container mx-auto px-4">
          {/* Title Section - aligned with Team.jsx */}
          <div className="text-center mb-10">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] font-poppins"
            >
              ARENA-X
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-lg max-w-2xl mx-auto text-[#d4d4d8]"
            >
              Explore our exciting lineup of events and register for the ones
              that interest you!
            </motion.p>
          </div>

          {/* Info Section */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 mb-16 text-lg"
          >
            {/* Prize Pool */}
            <div className="flex items-center gap-4">
              <Trophy className="text-[#4d9fff]" size={30} />
              <span className="text-xl md:text-2xl text-[#d4d4d8] font-medium">
                Total prize pool:
              </span>
              <span className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#ffa07a]">
                ₹8000
              </span>
            </div>

            {/* Dates */}
            <div className="flex items-center gap-4">
              <CalendarDays className="text-[#4d9fff]" size={30} />
              <span className="text-xl md:text-2xl text-[#d4d4d8] font-medium">
                Dates:
              </span>
              <span className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#ffa07a]">
                10<span className="lowercase">th</span> – 14
                <span className="lowercase">th</span> May, 2025
              </span>
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
