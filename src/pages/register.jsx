"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowLeft,
  ExternalLink,
  Info,
  FileText,
  Trophy,
  Clock,
} from "lucide-react";
import { BookOpen } from "lucide-react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { events } from "./events.jsx";
import saranda from "./Saranda-House.png";
import namdafa from "./namdapha.png";
import nilgiri from "./nilgiri.png";
import nexGen from "./NexGen-Club.png";
import tesserect from "./Tesseract.png";
import rampage from "./Rampage-house.png";
import { ArrowDownCircle } from 'lucide-react';


const RegisterPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const location = useLocation();
  const { id } = useParams();
  const event = events.find((e) => e.id.toString() === id);
  const allLogos = [
    { icon: saranda, size: 80 },
    { icon: namdafa, size: 80 },
    { icon: nilgiri, size: 80 },
    { icon: nexGen, size: 80 },
    { icon: tesserect, size: 80 },
    { icon: rampage, size: 80 },
  ];

  // Initialize particles
  useEffect(() => {
    particlesRef.current = Array(20)
      .fill(0)
      .map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.4 + 0.2,
        color:
          Math.random() > 0.5
            ? "rgba(77, 159, 255, 0.4)"
            : "rgba(255, 107, 107, 0.4)",
      }));
  }, []);

  // Handle mouse move for spotlight effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full relative overflow-hidden"
    >
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full backdrop-blur-md"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,107,107,0.12), rgba(77,159,255,0.12))",
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              border: `1px solid rgba(${Math.floor(
                Math.random() * 255
              )}, ${Math.floor(Math.random() * 255)}, 255, 0.1)`,
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%234d9fff20' strokeWidth='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
            opacity: 0.15,
          }}
        />
      </div>

      {/* Particles */}
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

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Back button */}
        <Link
          href="/events"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors group"
        >
          <div className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">
            <ArrowLeft className="h-5 w-5" />
          </div>
          <span>Back to Events</span>
        </Link>

        {/* Event title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="text-center mb-2 py-8">
            <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-4">
              {/* Logos to the left of the title */}
              {allLogos.slice(0, 3).map((logo, index) => (
                <motion.img
                  key={`logo-left-${index}`}
                  src={logo.icon}
                  alt={`logo-${index}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  style={{ height: `${logo.size + 20}px`, width: "auto" }}
                  className="rounded-full mx-4"
                />
              ))}

              {/* Dynamic Title in the center */}
              <motion.h1
                className="text-5xl md:text-5xl font-extrabold mx-28 md:mx-6 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                  background: "linear-gradient(135deg, #4d9fff, #ff6b6b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 20px rgba(77, 159, 255, 0.3)",
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                {event.title}
                <motion.span
                  className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-[3px] w-[120%] bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                  style={{
                    boxShadow:
                      "0 0 8px rgba(255,107,107,0.4), 0 0 12px rgba(77,159,255,0.3)",
                  }}
                />
              </motion.h1>

              {/* Logos to the right of the title */}
              {allLogos.slice(3).map((logo, index) => (
                <motion.img
                  key={`logo-right-${index}`}
                  src={logo.icon}
                  alt={`logo-${index + 3}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  style={{ height: `${logo.size + 20}px`, width: "auto" }}
                  className="rounded-full mx-4"
                />
              ))}
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-lg max-w-2xl mx-auto text-[#d4d4d8] mt-6"
            >
              The ultimate esports tournament — register solo or squad, and make
              your mark.
            </motion.p>
          </div>

          <motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="md:hidden flex justify-center mb-4 w-full" // This will hide it on medium and larger screens
>
  <div className="relative">
    {/* Glowing animated background */}
    <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b6b]/40 to-[#4d9fff]/40 rounded-xl blur-md animate-pulse"></div>

    {/* Foreground content */}
    <div className="relative flex items-center gap-3 px-4 py-3 bg-[#131b2e] border border-[#2a3652]/60 rounded-xl shadow-lg">
      <ArrowDownCircle className="text-pink-400 animate-bounce" size={20} />
      <span className="text-sm text-white font-medium">
        Scroll down to register!
      </span>
      <ArrowDownCircle className="text-blue-400 animate-bounce" size={20} />
    </div>
  </div>
</motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center mb-6"
          >
            <div className="relative mt-6 mb-2">
              {/* Continuous glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400/70 to-red-600/70 rounded-full blur-sm opacity-80 animate-pulse"></div>

              {/* Outer glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400/50 to-red-600/50 rounded-full blur-md opacity-100 transition-opacity duration-500"></div>

              {/* Main content */}
              <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#131b2e] border border-[#2a3652]/60 shadow-md hover:shadow-red-400/30 transition-all">
                <BookOpen className="text-red-400" size={18} />
                <span className="text-base text-[#d4d4d8] font-medium">
                  Rule Book -
                </span>
                <a
                  href="https://docs.google.com/document/d/1Q3b9F0-zv2GfmZhh5r5DSynrF-c2Zrz5OCWzNVjeHmo/edit?usp=drivesdk"
                  rel="noopener noreferrer"
                  className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 hover:from-red-600 hover:to-red-400 transition-all underline decoration-red-400/30 hover:decoration-red-400 decoration-1 underline-offset-2"
                >
                  Click here
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {!isSubmitted ? (
          // Two-column layout
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Event details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div
                className="relative rounded-xl overflow-hidden border p-6 h-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(13, 6, 30, 0.95) 0%, rgba(2, 14, 35, 0.95) 100%)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(77, 159, 255, 0.3)",
                }}
              >
                {/* Corner borders */}
                <div className="absolute top-0 left-0 w-8 h-8 z-10">
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      background: "rgba(77, 159, 255, 0.7)",
                      boxShadow: "0 0 6px rgba(77, 159, 255, 0.4)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "2px",
                      height: "100%",
                      background: "rgba(77, 159, 255, 0.7)",
                      boxShadow: "0 0 6px rgba(77, 159, 255, 0.4)",
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
                      background: "rgba(255, 107, 107, 0.7)",
                      boxShadow: "0 0 6px rgba(255, 107, 107, 0.4)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "2px",
                      height: "100%",
                      background: "rgba(255, 107, 107, 0.7)",
                      boxShadow: "0 0 6px rgba(255, 107, 107, 0.4)",
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
                      background: "rgba(255, 107, 107, 0.7)",
                      boxShadow: "0 0 6px rgba(255, 107, 107, 0.4)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "2px",
                      height: "100%",
                      background: "rgba(255, 107, 107, 0.7)",
                      boxShadow: "0 0 6px rgba(255, 107, 107, 0.4)",
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
                      background: "rgba(77, 159, 255, 0.7)",
                      boxShadow: "0 0 6px rgba(77, 159, 255, 0.4)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: "2px",
                      height: "100%",
                      background: "rgba(77, 159, 255, 0.7)",
                      boxShadow: "0 0 6px rgba(77, 159, 255, 0.4)",
                    }}
                  />
                </div>

                {/* Event image */}
                <div className="relative h-48 md:h-64 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
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

                  {/* Category icon */}
                  <div
                    className="absolute top-4 left-4 p-2 rounded-full text-white z-10 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #8e44ad, #e91e63)",
                      border: "2px solid rgba(255, 255, 255, 0.15)",
                      boxShadow: "0 0 12px rgba(233, 30, 99, 0.4)",
                    }}
                  >
                    {event.icon}
                  </div>

                  {/* Prize amount */}
                  <div
                    className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-sm z-10"
                    style={{
                      backgroundColor: "rgba(2, 14, 35, 0.8)",
                      backdropFilter: "blur(4px)",
                      color: "white",
                      border: "1px solid rgba(255, 107, 107, 0.5)",
                      boxShadow: "0 0 8px rgba(255, 107, 107, 0.3)",
                    }}
                  >
                    <Trophy className="h-3 w-3 text-red-400 inline mr-1" />
                    <span>Prize: {event.prizeAmount}</span>
                  </div>
                </div>

                {/* Event details */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Info className="h-5 w-5 text-blue-400" />
                      <span>Event Details</span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h3 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Date & Venue</span>
                      </h3>
                      <p className="text-white mt-4 mb-1">{event.date}</p>
                      <p className="text-white mb-1">{event.venue}</p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h3 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>Time</span>
                      </h3>
                      <p className="text-white">
                        {event.timeSlots.map((timeSlot, index) => (
                          <span key={index} className="block">
                            {timeSlot}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-400" />
                      <span>Rules & Guidelines</span>
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {event.rules?.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  </div>

                  {event.guidelines && (
                    <a
                      href={event.guidelines}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mt-4"
                    >
                      <span>View Complete Structure</span>
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right column - Registration form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div
                className="relative rounded-xl overflow-hidden border h-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(2, 14, 35, 0.95) 0%, rgba(13, 6, 30, 0.95) 100%)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 107, 107, 0.3)",
                }}
              >
                {/* Corner borders */}
                <div className="absolute top-0 left-0 w-8 h-8 z-10">
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      background: "rgba(255, 107, 107, 0.7)",
                      boxShadow: "0 0 6px rgba(255, 107, 107, 0.4)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "2px",
                      height: "100%",
                      background: "rgba(255, 107, 107, 0.7)",
                      boxShadow: "0 0 6px rgba(255, 107, 107, 0.4)",
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
                      background: "rgba(77, 159, 255, 0.7)",
                      boxShadow: "0 0 6px rgba(77, 159, 255, 0.4)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "2px",
                      height: "100%",
                      background: "rgba(77, 159, 255, 0.7)",
                      boxShadow: "0 0 6px rgba(77, 159, 255, 0.4)",
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
                      background: "rgba(77, 159, 255, 0.7)",
                      boxShadow: "0 0 6px rgba(77, 159, 255, 0.4)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "2px",
                      height: "100%",
                      background: "rgba(77, 159, 255, 0.7)",
                      boxShadow: "0 0 6px rgba(77, 159, 255, 0.4)",
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
                      background: "rgba(255, 107, 107, 0.7)",
                      boxShadow: "0 0 6px rgba(255, 107, 107, 0.4)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: "2px",
                      height: "100%",
                      background: "rgba(255, 107, 107, 0.7)",
                      boxShadow: "0 0 6px rgba(255, 107, 107, 0.4)",
                    }}
                  />
                </div>

                {/* Form header */}
                <div className="p-6 border-b border-white/10">
                  <h2
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                    }}
                  >
                    Registration Form
                  </h2>
                  <p className="text-gray-400 mt-1">
                    Fill out the form below to register for this event
                  </p>
                </div>

                {/* Embedded Google Form */}
                {event.formUrl ? (
                  <div className="p-0 h-96 md:h-[600px] overflow-hidden">
                    <iframe
                      src={event.formUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      className="bg-white"
                    >
                      Loading form...
                    </iframe>
                  </div>
                ) : (
                  <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-blue-300 mb-1"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-blue-300 mb-1"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-blue-300 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-blue-300 mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="comments"
                          className="block text-sm font-medium text-blue-300 mb-1"
                        >
                          Additional Comments
                        </label>
                        <textarea
                          id="comments"
                          rows={4}
                          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="terms"
                          required
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="terms"
                          className="ml-2 block text-sm text-blue-300"
                        >
                          I agree to the{" "}
                          <a href="#" className="text-blue-400 hover:underline">
                            terms and conditions
                          </a>
                        </label>
                      </div>

                      <motion.button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            Register Now
                            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                          </div>
                        )}
                      </motion.button>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        ) : (
          // Success state
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mx-auto w-20 h-20 mb-6 text-green-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </motion.div>

            <h2
              className="text-3xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Registration Successful!
            </h2>
            <p className="text-xl text-blue-200 mb-6">
              Thank you for registering for {event.title}!
            </p>
            <p className="text-blue-300 mb-8">
              We've sent a confirmation email with all the details. We look
              forward to seeing you at the event!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/events"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Explore More Events
              </a>
              <a
                href="/"
                className="inline-block bg-transparent border-2 border-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-blue-500/20"
              >
                Return to Home
              </a>
            </div>

            <style jsx="true" global="true">{`
              @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap");

              body {
                background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
                color: white;
              }
            `}</style>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
