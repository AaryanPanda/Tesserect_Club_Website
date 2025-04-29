import React, { useState, useRef, useEffect } from "react";
import { Calendar, ArrowRight, Zap } from "lucide-react";

// Define event type (for props)
/**
 * @typedef {Object} Event
 * @property {number} id
 * @property {string} title
 * @property {string} category
 * @property {string} date
 * @property {string} prizeAmount
 * @property {string} description
 * @property {string} image
 */

/**
 * Event card component with enhanced sci-fi theme and more subtle animations
 * @param {Object} props
 * @param {Event} props.event - Event data
 */
const EventCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const particlesRef = useRef([]);

  // Initialize particles
  useEffect(() => {
    particlesRef.current = Array(15)
      .fill(0)
      .map(() => ({
        x: Math.random() * 100,
        y: 100 + Math.random() * 20, // Start from bottom
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.4 + 0.2,
        color:
          Math.random() > 0.5
            ? "rgba(77, 159, 255, 0.4)"
            : "rgba(255, 107, 107, 0.4)",
      }));
  }, []);

  // Sample event data for preview
  event = event || {
    id: 1,
    title: "Cyber Gaming Tournament",
    category: "Gaming",
    date: "May 15, 2025",
    prizeAmount: "$10,000",
    description:
      "Join the ultimate gaming championship with players from around the globe competing for the grand prize.",
    image: "/api/placeholder/500/300",
  };

  // Handle mouse move for subtle spotlight effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  // Get icon based on category
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "gaming":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <rect x="6" y="11" width="12" height="8" rx="2" />
            <path d="M12 17v-6" />
            <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M15 11h-2" />
            <path d="M11 11H9" />
          </svg>
        );
      case "movies":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M7 3v18" />
            <path d="M3 7h18" />
            <path d="M3 11h18" />
            <path d="M3 15h18" />
            <path d="M7 3v18" />
            <path d="M11 3v18" />
            <path d="M15 3v18" />
            <path d="M19 3v18" />
          </svg>
        );
      case "music":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="8" cy="18" r="4" />
            <path d="M12 18V2l7 4" />
          </svg>
        );
      case "cosplay":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "tech":
        return <Zap className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative h-full rounded-xl overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsButtonHovered(false);
      }}
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 20px 30px -10px rgba(0, 0, 20, 0.5), 0 0 15px rgba(77, 159, 255, 0.3), 0 0 8px rgba(255, 107, 107, 0.3)"
          : "0 10px 15px -5px rgba(0, 0, 20, 0.3)",
      }}
    >
      {/* More subtle spotlight effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: isHovered ? 0.6 : 0,
          background: isHovered
            ? `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(77, 159, 255, 0.15), transparent 40%)`
            : "",
          transition: "opacity 300ms ease",
          zIndex: 1,
        }}
      />

      {/* Card content container with improved border */}
      <div
        className="relative h-full flex flex-col"
        style={{
          background:
            "linear-gradient(135deg, rgba(13, 6, 30, 0.95) 0%, rgba(2, 14, 35, 0.95) 100%)",
          backdropFilter: "blur(8px)",
          borderRadius: "0.75rem",
          overflow: "hidden",
          border: isHovered
            ? "1px solid rgba(77, 159, 255, 0.4)"
            : "1px solid rgba(77, 159, 255, 0.2)",
          transform: isHovered
            ? "perspective(1000px) rotateY(3deg) rotateX(-1deg)"
            : "perspective(1000px)",
          transition: "transform 0.5s ease, border 0.3s ease",
        }}
      >
        {/* Improved animated border that doesn't overlap */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "0.75rem",
            pointerEvents: "none",
            border: "1px solid transparent",
            backgroundClip: "padding-box",
            backgroundImage: isHovered
              ? `
              linear-gradient(90deg, transparent 0%, rgba(77, 159, 255, 0.6) 25%, rgba(255, 107, 107, 0.6) 75%, transparent 100%)
            `
              : "none",
            backgroundSize: "300% 1px",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            opacity: isHovered ? 1 : 0,
            animation: isHovered ? "gradientFlow 4s linear infinite" : "none",
            transition: "opacity 500ms ease",
            zIndex: 2,
          }}
        />

        {/* Fixed corner borders with better alignment */}
        <div className="absolute top-0 left-0 w-8 h-8 z-10">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "2px",
              background: isHovered
                ? "rgba(77, 159, 255, 0.7)"
                : "rgba(77, 159, 255, 0.4)",
              boxShadow: isHovered ? "0 0 6px rgba(77, 159, 255, 0.4)" : "none",
              transition: "background 300ms ease, box-shadow 300ms ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "2px",
              height: "100%",
              background: isHovered
                ? "rgba(77, 159, 255, 0.7)"
                : "rgba(77, 159, 255, 0.4)",
              boxShadow: isHovered ? "0 0 6px rgba(77, 159, 255, 0.4)" : "none",
              transition: "background 300ms ease, box-shadow 300ms ease",
            }}
          />
        </div>

        <div className="absolute top-0 right-0 w-8 h-8 z-10">
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100%",
              height: "2px",
              background: isHovered
                ? "rgba(255, 107, 107, 0.7)"
                : "rgba(255, 107, 107, 0.4)",
              boxShadow: isHovered
                ? "0 0 6px rgba(255, 107, 107, 0.4)"
                : "none",
              transition: "background 300ms ease, box-shadow 300ms ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "2px",
              height: "100%",
              background: isHovered
                ? "rgba(255, 107, 107, 0.7)"
                : "rgba(255, 107, 107, 0.4)",
              boxShadow: isHovered
                ? "0 0 6px rgba(255, 107, 107, 0.4)"
                : "none",
              transition: "background 300ms ease, box-shadow 300ms ease",
            }}
          />
        </div>

        <div className="absolute bottom-0 left-0 w-8 h-8 z-10">
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "2px",
              background: isHovered
                ? "rgba(255, 107, 107, 0.7)"
                : "rgba(255, 107, 107, 0.4)",
              boxShadow: isHovered
                ? "0 0 6px rgba(255, 107, 107, 0.4)"
                : "none",
              transition: "background 300ms ease, box-shadow 300ms ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "2px",
              height: "100%",
              background: isHovered
                ? "rgba(255, 107, 107, 0.7)"
                : "rgba(255, 107, 107, 0.4)",
              boxShadow: isHovered
                ? "0 0 6px rgba(255, 107, 107, 0.4)"
                : "none",
              transition: "background 300ms ease, box-shadow 300ms ease",
            }}
          />
        </div>

        <div className="absolute bottom-0 right-0 w-8 h-8 z-10">
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "100%",
              height: "2px",
              background: isHovered
                ? "rgba(77, 159, 255, 0.7)"
                : "rgba(77, 159, 255, 0.4)",
              boxShadow: isHovered ? "0 0 6px rgba(77, 159, 255, 0.4)" : "none",
              transition: "background 300ms ease, box-shadow 300ms ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "2px",
              height: "100%",
              background: isHovered
                ? "rgba(77, 159, 255, 0.7)"
                : "rgba(77, 159, 255, 0.4)",
              boxShadow: isHovered ? "0 0 6px rgba(77, 159, 255, 0.4)" : "none",
              transition: "background 300ms ease, box-shadow 300ms ease",
            }}
          />
        </div>

        {/* Subtle futuristic circuit pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: isHovered ? 0.15 : 0.08,
            pointerEvents: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0 L0 0 L0 25 M25 100 L0 100 L0 75 M75 0 L100 0 L100 25 M75 100 L100 100 L100 75' fill='none' stroke='%234d9fff' stroke-width='1'/%3E%3Ccircle cx='50' cy='50' r='5' fill='none' stroke='%23ff6b6b' stroke-width='1'/%3E%3Cpath d='M10 50 L40 50 M60 50 L90 50 M50 10 L50 40 M50 60 L50 90' stroke='%234d9fff' stroke-width='0.5' stroke-dasharray='2 4'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
            zIndex: 1,
            transition: "opacity 300ms ease",
          }}
        />

        {/* Image section */}
        <div className="relative h-48 overflow-hidden">
          {/* Image with enhanced zoom effect */}
          <img
            src={event.image || "/api/placeholder/500/300"}
            alt={event.title}
            className="w-full h-full object-cover"
            style={{
              transition: "transform 700ms ease",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />

          {/* Enhanced futuristic overlay with scan lines */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(2, 14, 35, 0.9), rgba(2, 14, 35, 0.5), transparent)",
              mixBlendMode: "multiply",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='%23ffffff10'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                opacity: 0.3,
              }}
            />
          </div>

          {/* Enhanced Category icon with futuristic effect */}
          <div
            className="absolute top-4 left-4 p-2 rounded-full text-white z-10 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #8e44ad, #e91e63)", 
              border: "2px solid rgba(255, 255, 255, 0.15)",
              boxShadow: isHovered
                ? "0 0 12px rgba(233, 30, 99, 0.4)" 
                : "0 0 5px rgba(233, 30, 99, 0.3)",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          >
            {getCategoryIcon(event.category)}
          </div>

          {/* Enhanced Event date with futuristic design */}
          <div
            className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full text-sm z-10"
            style={{
              backgroundColor: "rgba(2, 14, 35, 0.8)",
              backdropFilter: "blur(4px)",
              color: "white",
              border: "1px solid rgba(77, 159, 255, 0.5)",
              boxShadow: isHovered ? "0 0 8px rgba(77, 159, 255, 0.3)" : "none",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <Calendar className="h-3 w-3 text-blue-400" />
            <span>{event.date}</span>
          </div>

          {/* Enhanced title area with holographic effect */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <h3
              className="text-xl font-bold mb-1"
              style={{
                color: "white",
                fontFamily: "'Orbitron', sans-serif",
                textShadow: isHovered
                  ? "0 0 6px rgba(77, 159, 255, 0.5)"
                  : "0 0 4px rgba(77, 159, 255, 0.2)",
                transition: "text-shadow 0.3s ease",
              }}
            >
              {event.title}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm" style={{ color: "#ff6b6b" }}>
                {event.category}
              </span>
              <div className="h-4 w-px bg-white bg-opacity-20" />
              <span className="text-sm" style={{ color: "#4d9fff" }}>
                Prize: {event.prizeAmount}
              </span>
            </div>
          </div>
        </div>

        {/* Description and action section */}
        <div className="p-5 flex-grow flex flex-col">
          <p className="text-gray-300 mb-6 flex-grow">{event.description}</p>

          {/* Enhanced 3D button with improved distinct hover effect */}
          <button
            className="w-full flex items-center justify-between px-5 py-2.5 rounded-lg relative overflow-hidden"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            style={{
              background: isButtonHovered
                ? "linear-gradient(135deg, rgba(255, 100, 100, 0.12), rgba(255, 120, 120, 0.06))"
                : "linear-gradient(135deg, rgba(30, 90, 190, 0.35), rgba(25, 80, 170, 0.25))",
              border: isButtonHovered
                ? "1.5px solid rgba(255, 120, 120, 0.6)"
                : isHovered
                ? "1.5px solid rgba(40, 120, 230, 0.8)"
                : "1.5px solid rgba(40, 120, 230, 0.4)",
              outline: isButtonHovered
                ? "2px solid rgba(255, 100, 100, 0.15)"
                : "2px solid rgba(77, 159, 255, 0.08)",
              color: "white",
              backdropFilter: "blur(6px)",
              boxShadow: isButtonHovered
                ? "0 0 10px rgba(255, 100, 100, 0.2), inset 0 0 6px rgba(255, 120, 120, 0.1)"
                : isHovered
                ? "0 0 10px rgba(40, 120, 230, 0.3), inset 0 0 5px rgba(40, 120, 230, 0.15)"
                : "0 0 3px rgba(40, 120, 230, 0.08)",
              transition: "all 0.35s ease",
            }}
          >
            {/* Sliding shine */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                width: "33%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.30)",
                transform: isButtonHovered
                  ? "skewX(15deg) translateX(250%)"
                  : "skewX(15deg) translateX(-100%)",
                transition: "transform 0.8s ease-in-out",
              }}
            />

            {/* Radial glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: isButtonHovered ? 1 : 0,
                background:
                  "radial-gradient(circle at center, rgba(255, 120, 120, 0.1), transparent 75%)",
                transition: "opacity 0.5s ease",
                pointerEvents: "none",
              }}
            />

            {/* Border ring glow */}
            <div
              style={{
                position: "absolute",
                inset: "-2px",
                borderRadius: "inherit",
                border: isButtonHovered
                  ? "1px solid rgba(255, 120, 120, 0.3)"
                  : "1px solid rgba(77, 159, 255, 0.15)",
                boxShadow: isButtonHovered
                  ? "0 0 8px 1.5px rgba(255, 120, 120, 0.25)"
                  : "0 0 6px 1px rgba(77, 159, 255, 0.08)",
                transition: "all 0.4s ease",
                pointerEvents: "none",
              }}
            />

            <span
              className="font-semibold tracking-wide"
              style={{ fontFamily: "'Orbitron', sans-serif", zIndex: 1 }}
            >
              REGISTER NOW
            </span>

            <div
              style={{
                transform: isButtonHovered
                  ? "translateX(6px)"
                  : "translateX(0)",
                transition: "transform 0.3s ease",
                zIndex: 1,
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </div>
          </button>
        </div>

        {/* Always present continuously floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          {particlesRef.current.map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: particle.color,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.x}%`,
                top: `${
                  particle.y - ((Date.now() / (3000 / particle.speed)) % 120)
                }%`, // Continuous movement
                opacity: 0.3 + (Math.sin(Date.now() / 1000 + i) + 1) * 0.15, // Subtle pulsing
                boxShadow: `0 0 ${particle.size * 1.5}px ${particle.color}`,
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% top;
          }
          100% {
            background-position: 300% top;
          }
        }

        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap");
      `}</style>
    </div>
  );
};

export default EventCard;
