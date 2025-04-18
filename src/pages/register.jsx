import React, { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Send, CheckCircle } from "lucide-react"
import Footer from "../components/footer"

// Sample event data (would normally come from a database)
const events = [
  {
    id: 1,
    title: "Gaming Tournament",
    description: "Compete in our multiplayer gaming tournament with amazing prizes!",
    category: "Gaming",
  },
  {
    id: 2,
    title: "Movie Night",
    description: "Join us for a special screening of the latest blockbuster!",
    category: "Movies",
  },
  {
    id: 3,
    title: "Music Quiz",
    description: "Test your music knowledge in this fun and challenging quiz!",
    category: "Music",
  },
  {
    id: 4,
    title: "TV Series Marathon",
    description: "Binge-watch the most popular TV series with fellow enthusiasts!",
    category: "TV",
  },
  {
    id: 5,
    title: "Cosplay Contest",
    description: "Show off your best costume and win exciting prizes!",
    category: "Cosplay",
  },
  {
    id: 6,
    title: "Meme Competition",
    description: "Create and share your funniest memes for a chance to win!",
    category: "Memes",
  },
  {
    id: 7,
    title: "Talent Show",
    description: "Showcase your unique talents on stage!",
    category: "Talent",
  },
  {
    id: 8,
    title: "Quiz Night",
    description: "Test your knowledge across various entertainment categories!",
    category: "Quiz",
  },
  {
    id: 9,
    title: "Tech Showcase",
    description: "Experience the latest in entertainment technology!",
    category: "Tech",
  },
]

export default function RegisterPage() {
  const location = useLocation()
  const eventId = new URLSearchParams(location.search).get("event")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const event = events.find((e) => e.id === Number(eventId)) || events[0]

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-purple-950 text-white pt-20">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link
            to="/tesserex"
            className="inline-flex items-center text-purple-300 hover:text-purple-400 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>

          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 p-8 mb-8">
                <h1 className="text-3xl font-bold mb-2 text-white font-poppins">{event.title}</h1>
                <p className="text-purple-200 mb-6">{event.description}</p>
                <div className="inline-block bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {event.category}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 p-8">
                <h2 className="text-2xl font-bold mb-6 text-white font-poppins">Registration Form</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-purple-200 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-purple-200 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-purple-200 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-purple-200 mb-1">
                      Additional Comments
                    </label>
                    <textarea
                      id="comments"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-purple-200">
                      I agree to the{" "}
                      <a href="#" className="text-purple-400 hover:underline">
                        terms and conditions
                      </a>
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
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
                        <Send className="ml-2 h-4 w-4" />
                      </div>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mx-auto w-20 h-20 mb-6 text-green-400"
              >
                <CheckCircle className="w-full h-full" />
              </motion.div>

              <h2 className="text-3xl font-bold mb-4 text-white font-poppins">Registration Successful!</h2>
              <p className="text-xl text-purple-200 mb-6">Thank you for registering for {event.title}!</p>
              <p className="text-purple-200 mb-8">
                We've sent a confirmation email with all the details. We look forward to seeing you at the event!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/tesserex"
                  className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Explore More Events
                </Link>
                <Link
                  to="/"
                  className="inline-block bg-transparent border-2 border-purple-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-purple-500/20"
                >
                  Return to Home
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
