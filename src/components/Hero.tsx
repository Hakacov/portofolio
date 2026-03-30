import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 relative overflow-hidden">
      {/* Background Clouds */}
      <motion.div 
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 left-10 w-24 h-12 bg-white rounded-full opacity-80 shadow-[10px_10px_0px_rgba(0,0,0,0.1)]"
      />
      <motion.div 
        animate={{ x: [0, -150, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-64 right-20 w-32 h-16 bg-white rounded-full opacity-80 shadow-[10px_10px_0px_rgba(0,0,0,0.1)]"
      />

      <div className="max-w-5xl z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs md:text-sm uppercase tracking-widest mb-8 mt-8 text-mario-yellow drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
        >
          My name is
        </motion.p>
        <motion.h1 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-4xl md:text-7xl lg:text-8xl font-pixel leading-tight mb-12 drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]"
        >
          Muhamad Akbar <br />
          <span className="text-mario-red">Fauzy.</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row gap-8 md:items-end justify-between"
        >
          <p className="max-w-md text-sm md:text-lg leading-loose bg-black/20 p-4 pixel-border">
            Meningkatkan pengalaman digital dengan kode yang presisi dan desain yang terinspirasi gaya retro. Tekan START untuk memulai.
          </p>
          <div className="flex gap-4">
            <button className="pixel-button text-sm md:text-base">
              START GAME
            </button>
          </div>
        </motion.div>
      </div>

      {/* Ground at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 ground-pattern border-t-4 border-black" />
    </section>
  );
}
