import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CuboidIcon as Cube3d } from "lucide-react";
import { Link } from "react-router-dom"; 

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <Cube3d className="h-8 w-8 text-[#ff6b6b]" /> 
          </motion.div>
          <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff]">
            TESSERACT
          </span>
        </Link>

        <nav>
          <ul className="flex gap-6 items-center">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="#about" className="text-lg font-medium hover:text-[#ff6b6b] transition-colors">
                About
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="#join" className="text-lg font-medium hover:text-[#ff6b6b] transition-colors">
                Join Us
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="#contact" className="text-lg font-medium hover:text-[#ff6b6b] transition-colors">
                Contact
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
