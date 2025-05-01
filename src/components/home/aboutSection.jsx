"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  // Rotation for the spaces
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0])
  const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 0])

  const spaces = [
    {
      name: "Cine Space",
      icon: "🎬",
      description: "Immerse yourself in cinematic adventures with movie nights and film discussions.",
      color: "#ff6b6b",
      shadowColor: "rgba(255, 107, 107, 0.4)",
    },
    {
      name: "Soul Space",
      icon: "🧘",
      description: "Find your center with mindfulness activities and creative expression.",
      color: "#4d9fff",
      shadowColor: "rgba(77, 159, 255, 0.4)",
    },
    {
      name: "Play Space",
      icon: "🎮",
      description: "Level up your gaming skills with tournaments and casual play sessions.",
      color: "#ff9d6b",
      shadowColor: "rgba(255, 157, 107, 0.4)",
    },
    {
      name: "Jolly Space",
      icon: "🎉",
      description: "Connect and celebrate with social events and unforgettable parties.",
      color: "#9d4dff",
      shadowColor: "rgba(157, 77, 255, 0.4)",
    },
  ]

  return (
    <motion.section ref={sectionRef} className="py-20 relative overflow-hidden" style={{ opacity, scale }}>
      {/* Background Elements */}
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
              border: `1px solid rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.1)`,
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

      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" style={{ y }}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Discover Tesseract Club
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your go-to space for fun, friendship, and unforgettable memories! Designed exclusively for IITM BS students,
            it offers vibrant zones where you can chill, connect, and celebrate college life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {spaces.map((space, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden group"
              style={{
                perspective: 1000,
                rotateX,
                rotateY,
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${space.color}, transparent 70%)`,
                }}
              />

              {/* Border Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `0 0 20px 2px ${space.shadowColor}`,
                  zIndex: 1
                }}
                animate={{
                  boxShadow: [
                    `0 0 10px 1px ${space.shadowColor}`,
                    `0 0 20px 3px ${space.shadowColor}`,
                    `0 0 10px 1px ${space.shadowColor}`
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              />

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-xl p-[2px] z-10">
                <div 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${space.color}80, transparent)`,
                    backgroundSize: '200% 200%',
                    animation: `borderGradient${index} 6s ease-in-out infinite`
                  }}
                />
                <style jsx>{`
                  @keyframes borderGradient${index} {
                    0% { background-position: 0% 50% }
                    50% { background-position: 100% 50% }
                    100% { background-position: 0% 50% }
                  }
                `}</style>
              </div>

              <div className="relative z-20 p-6 border border-white/10 rounded-xl backdrop-blur-sm h-full flex flex-col items-center text-center justify-center min-h-[280px] group-hover:border-white/30 transition-all duration-300 bg-black/20">
                <motion.div
                  className="text-5xl mb-4"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  {space.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-3" style={{ color: space.color }}>
                  {space.name}
                </h3>

                <p className="text-gray-300">{space.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}