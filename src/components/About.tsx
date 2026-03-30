import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-32 bg-sky-blue relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative w-40 h-40 md:w-56 md:h-56 overflow-hidden pixel-border bg-mario-green mx-auto lg:mx-0">
          <img 
            src="src/assets/my.jpeg" 
            alt="Portrait"
            className="w-full h-full object-cover pixelated"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 right-4 bg-mario-yellow text-black p-2 pixel-border animate-pulse">
            P1
          </div>
        </div>
        <div className="bg-black/40 p-8 pixel-border">
          <h2 className="text-2xl md:text-4xl font-pixel mb-12 text-mario-red drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">PROFILE</h2>
          <div className="space-y-8 text-xs md:text-sm leading-loose">
            <p>
              Saya tertarik pada Data Analysis, Backend Development, dan Graphic Design. Saya memiliki pengalaman dalam pengolahan data, pengembangan aplikasi website.
            </p>
            <p>
              Saya terbiasa bekerja dengan cara yang analitis, teliti, dan efektif.
            </p>
          </div>
          <div className="mt-12 pt-12 border-t-4 border-black grid grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] text-mario-yellow mb-4">Keterampilan</p>
              <ul className="space-y-2 text-[8px] md:text-[10px]">
                <li>+ Data Analysis & Data</li>
                <li>&nbsp;&nbsp;Processing (Excel dan Google</li>
                <li>&nbsp;&nbsp;sheets</li>
                <li>+ Backend Development (NODE JS)</li>
                <li>+ Graphic Design (Affinity)</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] text-mario-yellow mb-4">Sertifikat</p>
              <ul className="space-y-2 text-[8px] md:text-[10px]">
                <li>* TOEFL Certificate</li>
                <li>* Sertifikat Seni Budaya Bidang</li>
                <li>&nbsp;&nbsp;Videografi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Some floating coins */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-10 right-1/4 w-8 h-10 bg-mario-yellow pixel-border rounded-lg flex items-center justify-center text-black text-xs"
      >
        $
      </motion.div>
    </section>
  );
}
