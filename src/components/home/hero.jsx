"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from './Tesseract_Logo.png'


// Text spirit animation component
const TextSpirit = () => {
  return (
    <motion.div
      className="absolute h-6 w-6 rounded-full bg-white blur-md"
      initial={{ left: "0%", top: "50%" }}
      animate={{
        left: ["0%", "30%", "70%", "100%", "70%", "30%", "0%"],
        top: ["50%", "30%", "70%", "50%", "30%", "70%", "50%"],
        scale: [1, 1.5, 0.8, 1.2, 0.9, 1.5, 1],
        opacity: [0.4, 0.8, 0.6, 0.9, 0.6, 0.8, 0.4],
      }}
      transition={{
        duration: 15,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
};

// SVG Tesseract Component
const TesseractSVG = () => {
  return (
    <motion.svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        rotateX: [0, 360],
        rotateY: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center",
      }}
    >
      {/* Outer cube */}
      <motion.g
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <line
          x1="100"
          y1="100"
          x2="200"
          y2="100"
          stroke="#00f0ff"
          strokeWidth="1.5"
        />
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="200"
          stroke="#00f0ff"
          strokeWidth="1.5"
        />
        <line
          x1="200"
          y1="100"
          x2="200"
          y2="200"
          stroke="#00f0ff"
          strokeWidth="1.5"
        />
        <line
          x1="100"
          y1="200"
          x2="200"
          y2="200"
          stroke="#00f0ff"
          strokeWidth="1.5"
        />

        <line
          x1="75"
          y1="75"
          x2="175"
          y2="75"
          stroke="#ff00c8"
          strokeWidth="1.5"
        />
        <line
          x1="75"
          y1="75"
          x2="75"
          y2="175"
          stroke="#ff00c8"
          strokeWidth="1.5"
        />
        <line
          x1="175"
          y1="75"
          x2="175"
          y2="175"
          stroke="#ff00c8"
          strokeWidth="1.5"
        />
        <line
          x1="75"
          y1="175"
          x2="175"
          y2="175"
          stroke="#ff00c8"
          strokeWidth="1.5"
        />

        <line
          x1="75"
          y1="75"
          x2="100"
          y2="100"
          stroke="#00ffae"
          strokeWidth="1.5"
        />
        <line
          x1="175"
          y1="75"
          x2="200"
          y2="100"
          stroke="#00ffae"
          strokeWidth="1.5"
        />
        <line
          x1="75"
          y1="175"
          x2="100"
          y2="200"
          stroke="#00ffae"
          strokeWidth="1.5"
        />
        <line
          x1="175"
          y1="175"
          x2="200"
          y2="200"
          stroke="#00ffae"
          strokeWidth="1.5"
        />
      </motion.g>

      {/* Inner cube */}
      <motion.g
        animate={{
          rotateX: [360, 0],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <line
          x1="125"
          y1="125"
          x2="175"
          y2="125"
          stroke="#ff7f50" // Changed to light orange (coral)
          strokeWidth="2"
        />
        <line
          x1="125"
          y1="125"
          x2="125"
          y2="175"
          stroke="#ff7f50" // Changed to light orange (coral)
          strokeWidth="2"
        />
        <line
          x1="175"
          y1="125"
          x2="175"
          y2="175"
          stroke="#ff7f50" // Changed to light orange (coral)
          strokeWidth="2"
        />
        <line
          x1="125"
          y1="175"
          x2="175"
          y2="175"
          stroke="#ff7f50" // Changed to light orange (coral)
          strokeWidth="2"
        />

        <line
          x1="100"
          y1="100"
          x2="125"
          y2="125"
          stroke="#00ffc8"
          strokeWidth="2"
        />
        <line
          x1="200"
          y1="100"
          x2="175"
          y2="125"
          stroke="#00ffc8"
          strokeWidth="2"
        />
        <line
          x1="100"
          y1="200"
          x2="125"
          y2="175"
          stroke="#00ffc8"
          strokeWidth="2"
        />
        <line
          x1="200"
          y1="200"
          x2="175"
          y2="175"
          stroke="#00ffc8"
          strokeWidth="2"
        />
      </motion.g>

      {/* Animated points at vertices */}
      {[
        [100, 100],
        [200, 100],
        [100, 200],
        [200, 200],
        [75, 75],
        [175, 75],
        [75, 175],
        [175, 175],
        [125, 125],
        [175, 125],
        [125, 175],
        [175, 175],
      ].map((point, i) => (
        <motion.circle
          key={i}
          cx={point[0]}
          cy={point[1]}
          r={i < 8 ? 3 : 4}
          fill={i < 4 ? "#00f0ff" : i < 8 ? "#ff00c8" : "#ff7f50"} // Changed to light orange (coral)
          animate={{
            r: [i < 8 ? 3 : 5, i < 8 ? 5 : 7, i < 8 ? 3 : 5],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.svg>
  );
};

// Floating Particles SVG
const ParticlesSVG = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        color: i % 3 === 0 ? "#ff6b6b" : i % 3 === 1 ? "#4d9fff" : "#ff9d6b",
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.6 }}
    >
      {particles.map((particle, i) => (
        <motion.circle
          key={i}
          cx={`${particle.x}%`}
          cy={`${particle.y}%`}
          r={particle.size}
          fill={particle.color}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </svg>
  );
};

// Portal Ring SVG
const PortalRingSVG = () => {
  return (
    <svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <motion.circle
        cx="300"
        cy="300"
        r="280"
        stroke="url(#portalGradient)"
        strokeWidth="4"
        strokeDasharray="20 10"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: 1000 }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.circle
        cx="300"
        cy="300"
        r="250"
        stroke="url(#portalGradient2)"
        strokeWidth="2"
        initial={{ opacity: 0.5 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          r: [250, 260, 250],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.circle
        cx="300"
        cy="300"
        r="220"
        stroke="url(#portalGradient3)"
        strokeWidth="6"
        strokeDasharray="40 20"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -1000 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <defs>
        <linearGradient
          id="portalGradient"
          x1="0"
          y1="0"
          x2="600"
          y2="600"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="50%" stopColor="#4d9fff" />
          <stop offset="100%" stopColor="#ff6b6b" />
        </linearGradient>

        <linearGradient
          id="portalGradient2"
          x1="600"
          y1="0"
          x2="0"
          y2="600"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#4d9fff" />
          <stop offset="50%" stopColor="#ff9d6b" />
          <stop offset="100%" stopColor="#4d9fff" />
        </linearGradient>

        <linearGradient
          id="portalGradient3"
          x1="300"
          y1="0"
          x2="300"
          y2="600"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#9d4dff" />
          <stop offset="50%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#9d4dff" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Logo Animation Component
const AnimatedLogo = () => {
  return (
    <motion.div
      className="w-32 h-32 md:w-40 md:h-40 relative mx-auto mb-8"
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 1.2, ease: "easeOut" },
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4d9fff]/30 to-[#4d9fff]/30 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />
      <motion.img
        src={logo}
        alt="Tesseract Club Logo"
        style={{ borderRadius: '100px' }}
        className="w-full h-full object-contain relative z-10"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#4d9fff]/50"
        animate={{
          boxShadow: [
            "0 0 10px 2px rgba(77, 159, 255, 0.3)",
            "0 0 20px 5px rgba(77, 159, 255, 0.5)",
            "0 0 10px 2px rgba(77, 159, 255, 0.3)",
          ],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
      />
    </motion.div>
  );
};

// New ShadowText Component (replacing GlitchText)
const ShadowText = ({ children, delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="inline-block relative text-shadow-enhanced"
    >
      {children}
    </motion.span>
  );
};

// Floating Icons for the four spaces
const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[
        { icon: "🎬", label: "Cine Space", color: "#ff6b6b" },
        { icon: "🧘", label: "Soul Space", color: "#4d9fff" },
        { icon: "🎮", label: "Play Space", color: "#ff9d6b" },
        { icon: "🎉", label: "Jolly Space", color: "#9d4dff" },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl flex flex-col items-center"
          style={{
            left: i < 2 ? `${7 + i * 20}%` : `${70 + (i - 2) * 20}%`,
            top: `${60 + (i % 2) * 10}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <span className="text-3xl mb-1">{item.icon}</span>
          <span className="text-xs font-bold" style={{ color: item.color }}>
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

// Cosmic Grid
const CosmicGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZDlmZmYyMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20" />
    </div>
  );
};

// Animated Background Orbs
const BackgroundOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-[#ff6b6b]/5 to-[#4d9fff]/5 backdrop-blur-md"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
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
  );
};

// Main Hero Component
export default function Hero() {
  const { scrollYProgress } = useScroll();

  // Parallax effect values
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
      style={{ y, opacity, scale }}
    >
      {/* Background Elements */}
      <CosmicGrid />
      <BackgroundOrbs />
      <ParticlesSVG />

      {/* Animated Portal */}
      <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
        <PortalRingSVG />
        <div className="relative w-[300px] h-[300px] flex items-center justify-center mb-10">
          <TesseractSVG />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center relative">
        <AnimatedLogo />

        {/* Text content with improved visibility */}
        <div className="relative z-10 overflow-hidden p-2 rounded-xl mt-[7.5rem] w-[90%] max-w-6xl mx-auto">
          {/* Background elements - reduced padding */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-xl border border-[#4d9fff]/50"></div>

          {/* Reduced size sci-fi background */}
          <div className="absolute inset-0 bg-[radial-gradient(#4d9fff_1px,transparent_1px)] bg-[length:15px_15px] opacity-20"></div>

          {/* Digital circuit patterns - simplified */}
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0,50 Q25,25 50,50 T100,50 T150,50 T200,50"
              fill="none"
              stroke="#4d9fff"
              strokeWidth="0.5"
              strokeDasharray="3,8"
              initial={{ opacity: 0.1, pathLength: 0 }}
              animate={{ opacity: 0.2, pathLength: 1 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
            <motion.path
              d="M0,100 Q50,75 100,100 T200,100"
              fill="none"
              stroke="#ff6b6b"
              strokeWidth="0.5"
              strokeDasharray="3,10"
              initial={{ opacity: 0.1, pathLength: 0 }}
              animate={{ opacity: 0.2, pathLength: 1 }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: 0.5,
              }}
            />
          </svg>

          {/* Reduced size floating orbs */}
          <motion.div
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-gradient-to-br from-[#ff6b6b]/40 to-transparent blur-md"
            animate={{
              y: [0, -8, 0],
              opacity: [0.5, 0.8, 0.5],
              boxShadow: [
                "0 0 10px 3px rgba(255,107,107,0.2)",
                "0 0 15px 5px rgba(255,107,107,0.4)",
                "0 0 10px 3px rgba(255,107,107,0.2)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-gradient-to-tr from-[#4d9fff]/40 to-transparent blur-md"
            animate={{
              y: [0, 8, 0],
              opacity: [0.4, 0.7, 0.4],
              boxShadow: [
                "0 0 10px 3px rgba(77,159,255,0.2)",
                "0 0 20px 5px rgba(77,159,255,0.3)",
                "0 0 10px 3px rgba(77,159,255,0.2)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Reduced size tesseract glow */}
          <motion.div
            className="absolute w-32 h-32 rounded-lg border border-[#4d9fff]/30 left-1/2 top-1/2"
            style={{ translateX: "-50%", translateY: "-50%" }}
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.3, 0.2],
              boxShadow: [
                "0 0 5px 3px rgba(77,159,255,0.1)",
                "0 0 10px 5px rgba(77,159,255,0.2)",
                "0 0 5px 3px rgba(77,159,255,0.1)",
              ],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Glowing lines */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4d9fff]/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
          />

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff6b6b]/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          {/* Content area - with better spacing */}
          <div className="relative z-20 p-3">
  {/* Title section with improved spacing */}
  <div className="text-4xl md:text-6xl font-extrabold mb-4 font-poppins relative overflow-hidden">
    <ShadowText>
      <motion.span
        className="relative inline-block text-transparent bg-clip-text 
bg-gradient-to-r from-[#ff3333] via-[#ff00cc] via-40% via-[#00ccff] to-[#00e6e6]
font-extrabold uppercase tracking-wide text-4xl md:text-6xl
[text-shadow:_0_2px_6px_rgba(255,255,255,0.7),_0_5px_8px_rgba(0,0,0,0.25),_0_-1px_2px_rgba(0,0,0,0.3)]
[webkit-text-stroke:2px_rgba(0,0,0,0.6)]
transform-[perspective(1000px)] translate-z-6
before:content-['TESSERACT_2025'] before:absolute before:inset-0
before:bg-gradient-to-t before:from-transparent before:to-white
before:opacity-20 before:bg-clip-text before:text-transparent
before:[webkit-text-stroke:1px_rgba(255,255,255,0.4)]"
        initial={{
          opacity: 0,
          y: 10,
          rotateX: 20,
          z: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
          z: 0,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        }}
      >
        <span className="absolute -z-10 blur-sm text-white opacity-10 translate-y-1 translate-x-0.5">
          TESSERACT 2025
        </span>
        TESSERACT 2025
      </motion.span>
    </ShadowText>
  </div>

  {/* Description with improved spacing */}
  <motion.p
    className="text-base md:text-lg max-w-md mx-auto mb-6 text-white/90 font-medium"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.8 }}
  >
    <ShadowText delay={0.6}>
      <span className="relative">
        <span className="relative z-10">
          The ultimate celebration of gaming, movies, memes, and all
          things entertainment!
        </span>
        <span className="absolute inset-0 blur-[1px] text-[#4d9fff]/30"></span>
      </span>
    </ShadowText>
  </motion.p>

  {/* Buttons with improved spacing */}
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.5 }}
    className="flex flex-col sm:flex-row gap-4 justify-center mt-2"
  >
    <Link
      to="/tesserex"
      className="group relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-[#4d9fff] focus:ring-offset-1 focus:ring-offset-background"
    >
      <span className="absolute inset-[-1000%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff6b6b_0%,#4d9fff_50%,#ff6b6b_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/80 px-5 py-1 text-base font-medium text-white backdrop-blur-3xl transition-colors duration-300 hover:bg-black/60">
        <motion.span
          animate={{
            textShadow: [
              "0 0 3px rgba(77,159,255,0.5)",
              "0 0 8px rgba(77,159,255,0.8)",
              "0 0 3px rgba(77,159,255,0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Explore Events
        </motion.span>
      </span>
    </Link>

    <a
      href="https://tinyurl.com/jointesseract"
      className="inline-flex h-10 items-center justify-center rounded-full border border-[#ff6b6b] bg-gradient-to-r from-[#0A0C14] to-[#141C2B] px-5 py-1 text-base font-medium text-[#ff6b6b] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ff6b6b]/30 hover:to-[#4d9fff]/30 relative overflow-hidden group"
    >
      <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#ff6b6b]/20 to-[#4d9fff]/20 transition-all duration-500 ease-out group-hover:w-full"></span>
      <span className="relative">Join The Fun!</span>
      <motion.span
        className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          boxShadow: [
            "0 0 0px #ff6b6b",
            "0 0 8px #ff6b6b",
            "0 0 0px #ff6b6b",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </a>
  </motion.div>

  {/* Reduced size corner elements */}
  <div className="absolute top-0 left-0 w-12 h-12">
    <motion.div
      className="absolute top-0 left-0 w-full h-[1px] bg-[#4d9fff]"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1 }}
    />
    <motion.div
      className="absolute top-0 left-0 h-full w-[1px] bg-[#4d9fff]"
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.div
      className="absolute top-0 left-0 w-2 h-2 rounded-full bg-[#4d9fff]"
      animate={{
        boxShadow: [
          "0 0 3px #4d9fff",
          "0 0 6px #4d9fff",
          "0 0 3px #4d9fff",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </div>

  <div className="absolute top-0 right-0 w-12 h-12">
    <motion.div
      className="absolute top-0 right-0 w-full h-[1px] bg-[#4d9fff]"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1 }}
    />
    <motion.div
      className="absolute top-0 right-0 h-full w-[1px] bg-[#4d9fff]"
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.div
      className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[#4d9fff]"
      animate={{
        boxShadow: [
          "0 0 3px #4d9fff",
          "0 0 6px #4d9fff",
          "0 0 3px #4d9fff",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </div>

  <div className="absolute bottom-0 left-0 w-12 h-12">
    <motion.div
      className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff6b6b]"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1 }}
    />
    <motion.div
      className="absolute bottom-0 left-0 h-full w-[1px] bg-[#ff6b6b]"
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.div
      className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-[#ff6b6b]"
      animate={{
        boxShadow: [
          "0 0 3px #ff6b6b",
          "0 0 6px #ff6b6b",
          "0 0 3px #ff6b6b",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </div>

  <div className="absolute bottom-0 right-0 w-12 h-12">
    <motion.div
      className="absolute bottom-0 right-0 w-full h-[1px] bg-[#ff6b6b]"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1 }}
    />
    <motion.div
      className="absolute bottom-0 right-0 h-full w-[1px] bg-[#ff6b6b]"
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.div
      className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#ff6b6b]"
      animate={{
        boxShadow: [
          "0 0 3px #ff6b6b",
          "0 0 6px #ff6b6b",
          "0 0 3px #ff6b6b",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </div>
</div>
          <FloatingIcons />
        </div>
      </div>
    </motion.section>
  );
}
