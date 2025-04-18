import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Capture mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate transform values based on mouse position
  const calculateTransform = (axis, intensity = 0.02) => {
    const center = axis === "x" ? window.innerWidth / 2 : window.innerHeight / 2;
    const position = axis === "x" ? mousePosition.x : mousePosition.y;
    return (position - center) * intensity;
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 blur-xl"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            transform: `translate(${calculateTransform("x")}px, ${calculateTransform("y")}px)`,
          }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-fuchsia-400 animate-gradient">
              TESSERACT FEST
            </span>
            <span className="text-3xl md:text-4xl font-bold block mt-4 text-cyan-300">2025</span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-fuchsia-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The ultimate celebration of gaming, movies, memes, and all things entertainment!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a
              href="#join"
              className="inline-block bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-500 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/25"
            >
              Join The Fun!
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated shapes */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/80 to-transparent z-10"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
