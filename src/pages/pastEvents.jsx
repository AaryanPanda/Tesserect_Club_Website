import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PastEventsGallery from "../components/pastEvents/pastEventGallery";
import Footer from "../components/footer";

export default function PastEvents() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]); // smooth parallax scroll effect

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0014] via-[#000919] to-[#0a0014] text-white pt-16 overflow-x-hidden">
      <section className="mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <motion.h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] font-poppins">
              Past Events
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-lg max-w-2xl mx-auto text-[#b3b3b3]"
            >
              Take a look at our previous events and the amazing memories we've
              created together!
            </motion.p>
          </div>

          {/* Scroll controlled parallax for the entire gallery */}
          <motion.div style={{ y }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <PastEventsGallery />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
