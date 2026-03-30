import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-12 py-32 bg-black text-white relative overflow-hidden">
      {/* Flag Pole Decoration */}
      <div className="absolute left-10 bottom-0 w-2 h-64 bg-stone-400 border-x-2 border-black">
        <motion.div 
          animate={{ y: [0, 200, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -left-4 top-4 w-8 h-6 bg-mario-green pixel-border"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-32">
          <div>
            <h2 className="text-2xl md:text-5xl font-pixel mb-8 text-mario-yellow drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              THANK YOU <br />
              BUT OUR PORTOFOLIO <br />
              IS IN ANOTHER CASTLE!
            </h2>
            <p className="text-xs mb-8 opacity-70 italic">JUST KIDDING, LET'S TALK:</p>
            <a 
              href="mailto:mario@example.com" 
              className="pixel-button inline-block"
            >
              SEND MESSAGE
            </a>
          </div>
          <div className="flex flex-col gap-4 font-pixel text-[8px] md:text-[10px]">
            <p className="text-mario-red">SOCIAL LINKS</p>
            <a href="https://www.instagram.com/akbarfauzy10/" className="hover:text-mario-yellow transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-mario-yellow transition-colors">LINKEDIN</a>
            <a href="https://github.com/Hakacov" className="hover:text-mario-yellow transition-colors">GITHUB</a>
          </div>
        </div>
        <div className="pt-12 border-t-4 border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] uppercase tracking-widest opacity-40">
          <p>© 2025 SUPER PORTFOLIO BROS.</p>
          <p>MADE WITH 1-UP MUSHROOMS.</p>
        </div>
      </div>
    </footer>
  );
}
