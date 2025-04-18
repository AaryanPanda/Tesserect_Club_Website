import { motion } from "framer-motion"
import { MessageSquare, Send, Sparkles } from "lucide-react"

export default function JoinSection() {
  return (
    <section id="join" className="py-20 relative bg-gradient-to-b from-[#1a0000]/30 to-[#000919]/50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#4d9fff]/10 blur-xl"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] font-poppins">
            Join The TESSERACT Community
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Connect with fellow entertainment enthusiasts, participate in events, and be part of our growing community!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#1a0000]/50 to-[#000919]/50 backdrop-blur-lg rounded-xl p-8 border border-[#ff6b6b]/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(255, 107, 107, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex items-center mb-6">
              <MessageSquare className="h-8 w-8 text-[#ff6b6b] mr-3" />
              <h3 className="text-2xl font-bold text-white font-poppins">Discord</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Join our Discord server for real-time chats, voice channels, game nights, and more!
            </p>
            <motion.a
              href="https://discord.gg/tesseract"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#ff6b6b] hover:bg-[#ff8f8f] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Discord</span>
              <Send className="ml-2 h-4 w-4" />
            </motion.a>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#000919]/50 to-[#1a0000]/50 backdrop-blur-lg rounded-xl p-8 border border-[#4d9fff]/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(77, 159, 255, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex items-center mb-6">
              <MessageSquare className="h-8 w-8 text-[#4d9fff] mr-3" />
              <h3 className="text-2xl font-bold text-white font-poppins">WhatsApp</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Join our WhatsApp group for quick updates, memes, and casual conversations!
            </p>
            <motion.a
              href="https://chat.whatsapp.com/tesseract"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#4d9fff] hover:bg-[#66b3ff] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join WhatsApp</span>
              <Send className="ml-2 h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-[#ff6b6b]/20 to-[#4d9fff]/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
            <Sparkles className="h-5 w-5 text-yellow-400 mr-2" />
            <p className="text-white">
              <span className="font-bold">Pro tip:</span> Join both platforms for the full TESSERACT experience!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}