import { useState } from "react";
import { motion } from "framer-motion";
import EventCard from "./eventCard";
import { GamepadIcon, Film, Music, Tv, Users, Sparkles, Zap, Trophy, Rocket } from "lucide-react";

// Sample event data
const events = [
  {
    id: 1,
    title: "Gaming Tournament",
    description: "Compete in our multiplayer gaming tournament with amazing prizes!",
    image: "/placeholder.svg?height=400&width=600",
    icon: <GamepadIcon className="h-6 w-6" />,
    category: "Gaming",
  },
  {
    id: 2,
    title: "Movie Night",
    description: "Join us for a special screening of the latest blockbuster!",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Film className="h-6 w-6" />,
    category: "Movies",
  },
  {
    id: 3,
    title: "Music Quiz",
    description: "Test your music knowledge in this fun and challenging quiz!",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Music className="h-6 w-6" />,
    category: "Music",
  },
  {
    id: 4,
    title: "TV Series Marathon",
    description: "Binge-watch the most popular TV series with fellow enthusiasts!",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Tv className="h-6 w-6" />,
    category: "TV",
  },
  {
    id: 5,
    title: "Cosplay Contest",
    description: "Show off your best costume and win exciting prizes!",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Users className="h-6 w-6" />,
    category: "Cosplay",
  },
  {
    id: 6,
    title: "Meme Competition",
    description: "Create and share your funniest memes for a chance to win!",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Sparkles className="h-6 w-6" />,
    category: "Memes",
  },
  {
    id: 7,
    title: "Talent Show",
    description: "Showcase your unique talents on stage!",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Zap className="h-6 w-6" />,
    category: "Talent",
  },
  {
    id: 8,
    title: "Quiz Night",
    description: "Test your knowledge across various entertainment categories!",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Trophy className="h-6 w-6" />,
    category: "Quiz",
  },
  {
    id: 9,
    title: "Tech Showcase",
    description: "Experience the latest in entertainment technology!",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Rocket className="h-6 w-6" />,
    category: "Tech",
  },
];

// Categories for filtering
const categories = ["All", "Gaming", "Movies", "Music", "TV", "Cosplay", "Memes", "Talent", "Quiz", "Tech"];

export default function EventGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents =
    selectedCategory === "All" ? events : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Event grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </motion.div>
    </div>
  );
}
