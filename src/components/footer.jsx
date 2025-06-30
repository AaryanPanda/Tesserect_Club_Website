"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/Tesseract_Logo-removebg.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#000919] to-[#1a0000] pt-12 pb-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZDlmZmYxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20" />

        {/* Glowing orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#ff6b6b]/5 to-[#4d9fff]/5 blur-xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              border: `1px solid rgba(${Math.random() * 255}, ${
                Math.random() * 255
              }, 255, 0.05)`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-8 flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Column 1: Logo and Social - Now centered */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff6b6b]/30 to-[#4d9fff]/30 blur-sm" />
                <img
                  src={logo}
                  alt="Tesseract Logo"
                  className="w-10 h-10 object-contain relative z-10"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff]">
                  TESSERACT
                </span>
              </div>
            </a>
            <p className="text-gray-400 mb-6">
              Your go-to space for fun, friendship, and unforgettable memories!
              Designed exclusively for entertainment enthusiasts.
            </p>
            <div className="flex space-x-4">
              {/* Social icons with hover effects */}
              {[
                { name: "YouTube", icon: "youtube.svg" }, // Replaced Discord with YouTube
                { name: "Instagram", icon: "instagram.svg" },
                { name: "LinkedIn", icon: "linkedin.svg" }, // Replaced Twitter with LinkedIn
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={
                    social.name === "YouTube"
                      ? "https://www.youtube.com/@Tesseract-i5t" // TODO: Replace with your YouTube channel link (e.g., https://youtube.com/c/yourchannel)
                      : social.name === "Instagram"
                      ? "https://www.instagram.com/tesseract_iitm" // TODO: Replace with your Instagram profile link (e.g., https://instagram.com/yourprofile)
                      : "https://www.linkedin.com/company/tesseract-iitm" // TODO: Replace with your LinkedIn profile link (e.g., https://linkedin.com/in/yourprofile)
                  }
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-[#ff6b6b]/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  rel="noopener noreferrer" // Security best practice for external links
                >
                  <span className="sr-only">{social.name}</span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {social.name === "YouTube" && (
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    )}
                    {social.name === "Instagram" && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    )}
                    {social.name === "LinkedIn" && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced divider with brighter, more vibrant glowing effect */}
        <div className="relative h-px w-full my-8 overflow-hidden">
          {/* Base gradient line - now brighter */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1EAEDB] to-transparent"></div>

          {/* Moving light effect - now more vibrant and eye-catching */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D946EF] to-transparent opacity-70 h-[3px] -mt-[1px]"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          ></motion.div>

          {/* Secondary moving light for extra glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 h-[2px] -mt-[0.5px]"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 0.5,
            }}
          ></motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} TESSERACT Fest. All rights reserved. Made with{" "}
            <span className="text-[#ff6b6b]">♥</span> for entertainment
            enthusiasts.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
