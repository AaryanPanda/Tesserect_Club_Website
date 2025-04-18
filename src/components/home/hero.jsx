import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const calculateTransform = (axis, intensity = 0.02) => {
    const center = axis === "x" ? window.innerWidth / 2 : window.innerHeight / 2
    const position = axis === "x" ? mousePosition.x : mousePosition.y
    return (position - center) * intensity
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#ff6b6b]/10 to-[#4d9fff]/10 blur-xl"
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
              repeat: Infinity,
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
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 font-poppins">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] via-[#4d9fff] to-[#ff6b6b] animate-gradient">
              TESSERACT FEST
            </span>
            <span className="text-3xl md:text-4xl font-bold block mt-4 text-[#4d9fff]">2025</span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-300"
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
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/tesserex"
              className="inline-block bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] hover:from-[#ff8f8f] hover:to-[#66b3ff] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b6b]/25"
            >
              Explore Events
            </Link>
            <a
              href="#join"
              className="inline-block bg-transparent border-2 border-[#ff6b6b] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-[#ff6b6b]/20 hover:scale-105"
            >
              Join The Fun!
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000919]/80 to-transparent z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  )
}