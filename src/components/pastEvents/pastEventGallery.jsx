import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Sample past events data
const pastEvents = [
  {
    id: 1,
    title: "Gaming Tournament 2024",
    description: "Our annual gaming tournament with over 200 participants!",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Movie Marathon Night",
    description: "12-hour movie marathon featuring the best sci-fi films!",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Cosplay Competition",
    description: "Amazing costumes and performances by talented cosplayers!",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Meme Contest 2024",
    description: "The funniest meme competition with viral entries!",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Music Festival",
    description: "Live performances by local bands and artists!",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Tech Expo",
    description: "Showcasing the latest in gaming and entertainment technology!",
    image: "/placeholder.svg",
  },
  {
    id: 7,
    title: "Anime Convention",
    description: "Celebrating Japanese animation and culture!",
    image: "/placeholder.svg",
  },
  {
    id: 8,
    title: "Board Game Night",
    description: "Strategic fun with classic and modern board games!",
    image: "/placeholder.svg",
  },
  {
    id: 9,
    title: "VR Experience Day",
    description: "Immersive virtual reality experiences for all attendees!",
    image: "/placeholder.svg",
  },
];

export default function PastEventsGallery() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [view, setView] = useState("grid");

  const handleEventClick = (id) => setSelectedEvent(id);
  const handleClose = () => setSelectedEvent(null);

  const handlePrev = () => {
    if (selectedEvent === null) return;
    const index = pastEvents.findIndex((e) => e.id === selectedEvent);
    const prevIndex = (index - 1 + pastEvents.length) % pastEvents.length;
    setSelectedEvent(pastEvents[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedEvent === null) return;
    const index = pastEvents.findIndex((e) => e.id === selectedEvent);
    const nextIndex = (index + 1) % pastEvents.length;
    setSelectedEvent(pastEvents[nextIndex].id);
  };

  const selectedEventData = pastEvents.find((e) => e.id === selectedEvent);

  return (
    <div className="space-y-8">
      {/* View Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 rounded-full p-1 flex">
          <button
            onClick={() => setView("grid")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              view === "grid"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                : "text-white hover:bg-white/10"
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setView("carousel")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              view === "carousel"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                : "text-white hover:bg-white/10"
            }`}
          >
            Carousel View
          </button>
        </div>
      </div>

      {/* Grid View */}
      {view === "grid" && (
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {pastEvents.map((event) => (
            <motion.div
              key={event.id}
              layoutId={`event-${event.id}`}
              onClick={() => handleEventClick(event.id)}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer group"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white font-poppins">{event.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-300">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Carousel View */}
      {view === "carousel" && (
        <div className="relative overflow-hidden rounded-xl">
          <div className="flex items-center">
            <button
              onClick={handlePrev}
              className="absolute left-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 p-4">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleEventClick(event.id)}
                    className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer group"
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white font-poppins">{event.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && selectedEventData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              layoutId={`event-${selectedEvent}`}
              className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 backdrop-blur-lg rounded-xl overflow-hidden max-w-3xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={selectedEventData.image}
                  alt={selectedEventData.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-poppins">
                    {selectedEventData.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 text-lg">{selectedEventData.description}</p>
                <div className="mt-6 flex justify-between">
                  <button
                    onClick={handlePrev}
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
