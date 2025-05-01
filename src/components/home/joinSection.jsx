"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Send, Sparkles } from "lucide-react";

export default function JoinSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects - same as AboutSection
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  // Rotation effects from AboutSection
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 0]);

  return (
    <motion.section
      id="join"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Background Elements - matching AboutSection style */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#ff6b6b]/5 to-[#4d9fff]/5 backdrop-blur-md"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              border: `1px solid rgba(${Math.random() * 255}, ${
                Math.random() * 255
              }, 255, 0.1)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              rotate: [0, Math.random() * 360, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{ y }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] font-poppins"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join The TESSERACT Community
          </motion.h2>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Connect with fellow entertainment enthusiasts, participate in
            events, and be part of our growing community!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#1a0000]/50 to-[#000919]/50 backdrop-blur-lg rounded-xl p-8 border border-[#ff6b6b]/20 relative overflow-hidden group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              perspective: 1000,
              rotateX,
              rotateY,
            }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(255, 107, 107, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            {/* Background gradient effect */}
            <div
              className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at center, #ff6b6b, transparent 70%)`,
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <MessageSquare className="h-8 w-8 text-[#ff6b6b] mr-3" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white font-poppins">
                  Discord
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Join our Discord server for real-time chats, voice channels,
                game nights, and more!
              </p>
              <motion.a
                href="https://discord.gg/X9gztkNQ"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#ff6b6b] hover:bg-[#ff8f8f] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Join Discord</span>
                <Send className="ml-2 h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#000919]/50 to-[#1a0000]/50 backdrop-blur-lg rounded-xl p-8 border border-[#4d9fff]/20 relative overflow-hidden group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              perspective: 1000,
              rotateX,
              rotateY,
            }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(77, 159, 255, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            {/* Background gradient effect */}
            <div
              className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at center, #4d9fff, transparent 70%)`,
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <MessageSquare className="h-8 w-8 text-[#4d9fff] mr-3" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white font-poppins">
                  Recruitment
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Fill out our recruitment form to become a part of our dynamic
                core team!
              </p>
              <motion.a
                href="https://tinyurl.com/coretesseract"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#4d9fff] hover:bg-[#66b3ff] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Join Core Tem</span>
                <Send className="ml-2 h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-[#ff6b6b]/20 to-[#4d9fff]/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(255, 255, 255, 0.2)",
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="h-5 w-5 text-yellow-400 mr-2" />
            </motion.div>
            <p className="text-white">
              <span className="font-bold">Pro tip:</span> Join both platforms
              for the full TESSERACT experience!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
