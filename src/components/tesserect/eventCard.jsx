import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function EventCard({ event }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-[#1a0000]/40 to-[#000919]/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-4 left-4 bg-[#ff6b6b] text-white p-2 rounded-full">
          {event.icon}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white font-poppins">{event.title}</h3>
          <span className="text-sm text-[#ff6b6b]">{event.category}</span>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-300 mb-4">{event.description}</p>
        <Link to={`/tesserex/register?event=${event.id}`}>
          <motion.div
            className="flex items-center justify-between bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] hover:from-[#ff6b6b]/90 hover:to-[#4d9fff]/90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Register Now</span>
            <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.3 }}>
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
