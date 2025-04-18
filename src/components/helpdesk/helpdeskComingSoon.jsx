import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Bot, MessageSquare, Zap } from "lucide-react"

export default function HelpdeskComingSoon() {
  const [currentPanel, setCurrentPanel] = useState(0)
  const [typingText, setTypingText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const comicPanels = [
    {
      image: <Bot className="h-24 w-24 text-blue-400" />,
      text: "Hi there! I'm the TESSERACT helpdesk bot. I'm still learning jokes before I can help you...",
    },
    {
      image: <MessageSquare className="h-24 w-24 text-purple-400" />,
      text: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      image: <Bot className="h-24 w-24 text-blue-400" />,
      text: "Hmm, I need to work on my humor. Let me try again...",
    },
    {
      image: <MessageSquare className="h-24 w-24 text-purple-400" />,
      text: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      image: <Bot className="h-24 w-24 text-blue-400" />,
      text: "I think I'm getting better! Our helpdesk will be ready soon to assist you with all your TESSERACT questions!",
    },
  ]

  useEffect(() => {
    const text = comicPanels[currentPanel].text
    let currentIndex = 0
    setTypingText("")
    setIsTyping(true)

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypingText((prev) => prev + text.charAt(currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)

        const timer = setTimeout(() => {
          setCurrentPanel((prev) => (prev + 1) % comicPanels.length)
        }, 3000)

        return () => clearTimeout(timer)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [currentPanel])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Comic panel */}
          <motion.div
            key={currentPanel}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-gradient-to-br from-[#1a0000]/30 to-[#000919]/30 rounded-2xl overflow-hidden border border-[#E60000]/10 p-6 flex flex-col items-center justify-center min-h-[300px]"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-6"
            >
              {comicPanels[currentPanel].image}
            </motion.div>

            <div className="text-center">
              <p className="text-lg text-white">
                {typingText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                )}
              </p>
            </div>
          </motion.div>

          {/* Coming soon info */}
          <div className="bg-gradient-to-br from-[#000919]/30 to-[#1a0000]/30 rounded-2xl overflow-hidden border border-[#0066CC]/10 p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-white font-poppins">Coming Soon!</h3>
            <p className="text-gray-300 mb-6">
              Our helpdesk is currently under construction. We're training our support team (and our AI) to provide you
              with the best assistance possible!
            </p>

            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-[#E60000]" />
                <p className="text-white font-medium">Features coming soon:</p>
              </div>
              <ul className="space-y-2 pl-6 text-gray-300">
                <li>• 24/7 Chat Support</li>
                <li>• Event Registration Help</li>
                <li>• Technical Assistance</li>
                <li>• FAQ Section</li>
              </ul>
            </div>

            <p className="text-gray-400 text-sm">
              In the meantime, you can reach us at <span className="text-[#0066CC]">help@tesseractfest.com</span>
            </p>
          </div>
        </div>

        {/* Panel navigation dots */}
        <div className="flex justify-center mt-6 gap-2">
          {comicPanels.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentPanel(index)}
              className={`w-3 h-3 rounded-full ${
                currentPanel === index ? "bg-[#E60000]" : "bg-white/30"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
