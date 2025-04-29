import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HelpdeskComingSoon from "../components/helpdesk/helpdeskComingSoon";
import Footer from "../components/footer";

export default function Helpdesk() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]); // parallax movement

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a0000] via-[#000919] to-[#1a0019] text-white pt-16 overflow-x-hidden">
      <section className="mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <motion.h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#E60000] to-[#0066CC] font-poppins">
              Helpdesk
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-lg max-w-2xl mx-auto text-gray-300"
            >
              Need assistance? Our helpdesk is here to help!
            </motion.p>
          </div>

          {/* Parallax + Entrance animation for HelpdeskComingSoon */}
          <motion.div style={{ y }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <HelpdeskComingSoon />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
