import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "./eventCard";
import { GamepadIcon, Film, Music, Tv, Users } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Gaming Tournament",
    description:
      "Compete in our multiplayer gaming tournament with amazing prizes!",
    image: "/placeholder.svg?height=400&width=600",
    icon: <GamepadIcon className="h-6 w-6" />,
    category: "Gaming",
    date: "June 15, 2025",
    prizeAmount: "₹10,000",
  },
  {
    id: 2,
    title: "Movie Night",
    description: "Join us for a special screening of the latest blockbuster!",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Film className="h-6 w-6" />,
    category: "Movies",
    date: "June 18, 2025",
    prizeAmount: "₹5,000",
  },
  {
    id: 3,
    title: "Music Quiz",
    description: "Test your music knowledge in this fun and challenging quiz!",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Music className="h-6 w-6" />,
    category: "Music",
    date: "June 20, 2025",
    prizeAmount: "₹7,500",
  },
  {
    id: 4,
    title: "TV Series Marathon",
    description:
      "Binge-watch the most popular TV series with fellow enthusiasts!",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Tv className="h-6 w-6" />,
    category: "TV",
    date: "June 22, 2025",
    prizeAmount: "₹3,000",
  },
  {
    id: 5,
    title: "Cosplay Contest",
    description: "Show off your best costume and win exciting prizes!",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Users className="h-6 w-6" />,
    category: "Cosplay",
    date: "June 25, 2025",
    prizeAmount: "₹12,000",
  },
];

const EventGrid = () => {
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      className="relative py-16 overflow-hidden w-full"
      ref={containerRef}
      style={{
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Replicated JoinSection orb animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full backdrop-blur-md"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,107,0.12), rgba(77,159,255,0.12))",
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              border: `1px solid rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
                Math.random() * 255
              )}, 255, 0.1)`,
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

        {/* Static stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            style={{
              position: "absolute",
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: "white",
              borderRadius: "50%",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}

        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%234d9fff20' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
            opacity: 0.15,
          }}
        />
      </div>

      {/* Foreground content */}
      <div className="container mx-auto px-4 space-y-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "2rem",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventGrid;
