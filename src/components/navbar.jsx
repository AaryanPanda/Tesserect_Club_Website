import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogOut } from "lucide-react";
import logo from "../assets/Tesseract_Logo-removebg.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Arena-X", path: "/tesserex" },
  { name: "Past Events", path: "/past-events" },
  { name: "Team", path: "/team" },
  { name: "Helpdesk", path: "/helpdesk" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const UserProfile = () => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <span className="text-white text-sm">{user?.email?.split("@")[0]}</span>
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
      >
        <LogOut className="w-4 h-4" />
        <span className="text-sm">Logout</span>
      </button>
    </div>
  );

  const LoginButton = () => (
    <Link
      to="/login"
      className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] text-white font-medium text-sm hover:opacity-90 transition-opacity"
    >
      Login
    </Link>
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1a0000]/80 backdrop-blur-md py-2 shadow-lg shadow-white/10
  after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent
`}
    >
      <div className="container mx-auto px-4 py-[5px]">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              transition={{ duration: 0.5 }}
              className="text-[#ff6b6b]"
            >
              <img
                src={logo}
                alt="Tesseract Logo"
                className="h-10 w-10 object-contain"
              />
            </motion.div>
            <span className="text-2xl font-bold text-[#e4e4e7]">TESSERACT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative ${
                  index === 1
                    ? "font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] text-lg "
                    : "font-semibold"
                } text-md transition-colors ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-[#d4d4d8] hover:text-white"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            {user ? <UserProfile /> : <LoginButton />}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1a0000]/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-2 text-lg font-medium ${
                        location.pathname === link.path
                          ? "text-[#ff6b6b]"
                          : "text-[#d4d4d8]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  {user ? <UserProfile /> : <LoginButton />}
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
