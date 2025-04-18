import { motion } from "framer-motion";
import { GamepadIcon, Film, Laugh, Music, Tv, Users } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <GamepadIcon className="h-10 w-10 text-fuchsia-400" />,
      title: "Gaming",
      description: "From casual mobile games to competitive eSports tournaments",
    },
    {
      icon: <Film className="h-10 w-10 text-cyan-400" />,
      title: "Movies",
      description: "Movie nights, discussions, and fan theories about the latest releases",
    },
    {
      icon: <Laugh className="h-10 w-10 text-fuchsia-400" />,
      title: "Memes",
      description: "The freshest, dankest memes shared among friends",
    },
    {
      icon: <Music className="h-10 w-10 text-cyan-400" />,
      title: "Music",
      description: "Playlists, recommendations, and live performances",
    },
    {
      icon: <Tv className="h-10 w-10 text-fuchsia-400" />,
      title: "TV Shows",
      description: "Binge-watching parties and episode discussions",
    },
    {
      icon: <Users className="h-10 w-10 text-cyan-400" />,
      title: "Community",
      description: "A welcoming space for all entertainment enthusiasts",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">
            What is TESSERACT?
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-fuchsia-100">
            TESSERACT is more than just a club - it's a multidimensional space where entertainment enthusiasts come
            together to celebrate everything from gaming and movies to memes and music!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-500/10 border border-white/10"
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-fuchsia-100">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-fuchsia-900/30 z-10" />
    </section>
  );
}
