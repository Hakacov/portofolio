import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden mb-6 pixel-border bg-mario-blue">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-mario-yellow text-black text-[8px] px-2 py-1 pixel-border">
            LVL {project.year.slice(-2)}
          </span>
        </div>
      </div>
      <div className="bg-black/30 p-4 pixel-border">
        <h3 className="text-sm md:text-base font-pixel mb-2 text-mario-yellow">{project.title}</h3>
        <p className="text-[8px] uppercase tracking-tighter opacity-70">{project.category}</p>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex gap-1">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-2 h-2 bg-mario-red pixel-border" />
            ))}
          </div>
          <span className="text-[10px]">SELECT</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
