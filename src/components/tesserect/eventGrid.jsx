import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Using React Router's useNavigate instead of Next.js router
import EventCard from "./eventCard"; // Make sure the path matches your file structure
import { GamepadIcon, Film, Music, Tv, Users } from "lucide-react";
import bgmi from "./BGMI.png";
import ff from './Free-Fire.png';
import carnival from './Carnival.png';
import clashroyale from './Clash-Royale.png';
import cod from './COD.png';

// Sample events data with additional properties for the register page
const events = [
  {
    id: 1,
    title: "BGMI",
    description: "From Pochinki to Paradise, we slay every single zone.",
    image: bgmi,
    icon: <GamepadIcon className="h-6 w-6" />,
    category: "Team E-Sport",
    date: "May 10, 2025",
    prizeAmount: "₹3,000",
    guidelines: "https://example.com/gaming-guidelines",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdGJxMkdJV-TzCY-xM-5UEMnUfJG9YuEK0PV5UAIQQZrXJHFQ/viewform?embedded=true",
    rules: [
      "Participants must be 18 years or older",
      "Teams of 4 players maximum",
      "Own gaming peripherals allowed",
      "Tournament format will be double elimination",
      "Judges' decisions are final",
      "No cheating or exploits allowed",
      "Be respectful to all participants",
    ],
    startTime: "10:00 AM",
    endTime: "6:00 PM",
    venue: "Main Auditorium, Block A",
  },
  {
    id: 2,
    title: "Free Fire",
    description: "Clutching in style, dropping bodies with every booyah earned.",
    image: ff,
    icon: <GamepadIcon className="h-6 w-6" />,
    category: "Team E-Sport",
    date: "May 11, 2025",
    prizeAmount: "₹2,500",
    guidelines: "https://example.com/movie-guidelines",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdGJxMkdJV-TzCY-xM-5UEMnUfJG9YuEK0PV5UAIQQZrXJHFQ/viewform?embedded=true",
    rules: [
      "Seating is on a first-come, first-served basis",
      "No recording devices allowed",
      "Please silence all mobile phones during the screening",
      "No outside food or beverages",
      "Arrive at least 15 minutes before showtime",
    ],
    startTime: "7:00 PM",
    endTime: "10:00 PM",
    venue: "Cinema Hall, Block B",
  },
  {
    id: 3,
    title: "Carnival",
    description: "Every card counts when victory’s just one tower away.",
    image: carnival,
    icon: <GamepadIcon className="h-6 w-6" />,
    category: "Solo E-Sport",
    date: "May 15, 2025",
    prizeAmount: "₹1,000",
    guidelines: "https://example.com/music-guidelines",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdGJxMkdJV-TzCY-xM-5UEMnUfJG9YuEK0PV5UAIQQZrXJHFQ/viewform?embedded=true",
    rules: [
      "Teams of 2-4 members",
      "No use of mobile phones or internet during the quiz",
      "Multiple rounds covering different music genres",
      "Tie-breaker rounds will be available if needed",
      "Judges' decisions are final",
      "Registration required for all participants",
    ],
    startTime: "6:00 PM",
    endTime: "9:00 PM",
    venue: "Music Hall, Block C",
  },
  {
    id: 4,
    title: "Clash Royale",
    description: "Guns loaded, squad locked, missions clear — no mercy given.",
    image: clashroyale,
    icon: <GamepadIcon className="h-6 w-6" />,
    category: "Solo E-Sport",
    date: "May 10, 2025",
    prizeAmount: "₹1,500",
    guidelines: "https://example.com/tv-guidelines",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdGJxMkdJV-TzCY-xM-5UEMnUfJG9YuEK0PV5UAIQQZrXJHFQ/viewform?embedded=true",
    rules: [
      "Open to all TV enthusiasts",
      "Comfortable seating provided",
      "Snacks and refreshments available",
      "Discussion sessions between episodes",
      "No spoilers for future episodes",
      "Please be respectful of others' opinions", 
    ],
    startTime: "12:00 PM",
    endTime: "8:00 PM",
    venue: "Lounge Area, Block D",
  },
  {
    id: 5,
    title: "COD-M",
    description: "From chaos to crown, fun’s the only rule here.",
    image: cod,
    icon: <GamepadIcon className="h-6 w-6" />,
    category: "Team E-Sport",
    date: "May 11, 2025",
    prizeAmount: "₹2,000",
    guidelines: "https://example.com/cosplay-guidelines",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdGJxMkdJV-TzCY-xM-5UEMnUfJG9YuEK0PV5UAIQQZrXJHFQ/viewform?embedded=true",
    rules: [
      "Original and purchased costumes allowed",
      "Pre-registration required with costume details",
      "Weapons must be peace-bonded",
      "No offensive or inappropriate costumes",
      "Judging based on accuracy, craftsmanship, and performance",
      "Photo booth available for all participants",
      "Winners announced at the end of the event",
    ],
    startTime: "2:00 PM",
    endTime: "7:00 PM",
    venue: "Main Hall, Block E",
  },
];

const EventGrid = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate(); // Using React Router's navigate

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Handle register button click to navigate to register page with event data
  const handleRegisterClick = (event) => {
    // Navigate to register page with event ID
    navigate(`/register/${event.id}`, { 
      state: { eventData: event } // Pass event data through state
    });
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
      {/* Animated background orbs */}
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
              repeat: Infinity,
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
                <EventCard 
                  key={event.id} 
                  event={event} 
                  onRegisterClick={() => handleRegisterClick(event)} 
                />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventGrid;