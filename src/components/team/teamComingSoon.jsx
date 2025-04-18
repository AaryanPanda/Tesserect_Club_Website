import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, SpaceIcon as Alien, Star, Sparkles } from "lucide-react";

export default function TeamComingSoon() {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Aliens building a rocket...");

  const messages = [
    "Aliens building a rocket...",
    "Teaching robots to tell jokes...",
    "Recruiting team members from parallel universes...",
    "Convincing cats to join our team...",
    "Downloading team data from the cloud...",
    "Assembling the Avengers...",
    "Finding the best meme creators...",
    "Negotiating with time travelers...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + Math.random() * 15;
      });

      setMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 5,
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative w-full max-w-2xl h-96 bg-gradient-to-br from-pink-900/30 to-indigo-900/30 rounded-2xl overflow-hidden border border-white/10 p-8">
        {/* Stars background */}
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                width: star.size,
                height: star.size,
                left: `${star.x}%`,
                top: `${star.y}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: star.delay,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="mb-8"
          >
            <div className="relative">
              <Rocket className="h-24 w-24 text-pink-400" />
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, 10, 20],
                  scale: [1, 0.8, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeOut",
                }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
              >
                <Sparkles className="h-8 w-8 text-indigo-400" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-white font-poppins">Coming Soon!</h2>
            <p className="text-xl text-pink-200 mb-6">Our team page is under construction</p>

            <div className="flex items-center gap-2 mb-2">
              <Alien className="h-5 w-5 text-lime-400" />
              <p className="text-pink-200">{message}</p>
            </div>

            <div className="w-full bg-white/10 rounded-full h-4 mb-6">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full"
                style={{ width: `${progress}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                >
                  <Star className="h-6 w-6 text-yellow-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
