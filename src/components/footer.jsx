import { motion } from "framer-motion";
import { CuboidIcon, Mail, MapPin, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black/50 backdrop-blur-lg pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-2 mb-4">
              <CuboidIcon className="h-8 w-8 text-[#ff6b6b]" /> {/* Updated icon color */}
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] font-poppins">
                TESSERACT
              </span>
            </Link>
            <p className="text-[#ffb3b3] mb-4"> {/* Soft light pink text */}
              The ultimate entertainment club for gamers, movie buffs, meme lords, and everyone in between!
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/tesseract"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffb3b3] hover:text-[#ff6b6b] transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="https://twitter.com/tesseract"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffb3b3] hover:text-[#ff6b6b] transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="https://youtube.com/tesseract"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffb3b3] hover:text-[#ff6b6b] transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#ffb3b3] hover:text-[#ff6b6b] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tesserex" className="text-[#ffb3b3] hover:text-[#ff6b6b] transition-colors">
                  TESSEREX
                </Link>
              </li>
              <li>
                <Link to="/past-events" className="text-[#ffb3b3] hover:text-[#ff6b6b] transition-colors">
                  Past Events
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-[#ffb3b3] hover:text-[#ff6b6b] transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/helpdesk" className="text-[#ffb3b3] hover:text-[#ff6b6b] transition-colors">
                  Helpdesk
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-4 font-poppins">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#ff6b6b] mr-2 mt-0.5" /> {/* Updated icon color */}
                <span className="text-[#ffb3b3]">hello@tesseractfest.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#ff6b6b] mr-2 mt-0.5" /> {/* Updated icon color */}
                <span className="text-[#ffb3b3]">TESSERACT HQ, Entertainment District, Digital City, Metaverse</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-4 font-poppins">Newsletter</h3>
            <p className="text-[#ffb3b3] mb-4">
              Subscribe to our newsletter for the latest updates on events and activities!
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-[#ffb3b3] focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
                required
              />
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] hover:from-[#ff6b6b] hover:to-[#4d9fff] text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white/10 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-[#ffb3b3]">
            © {currentYear} TESSERACT Fest. All rights reserved. Made with
            <span className="text-[#ff6b6b] mx-1">♥</span>
            for entertainment enthusiasts.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
