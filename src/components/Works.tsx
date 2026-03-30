import ProjectCard from './ProjectCard';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Mbappe',
    category: 'Football',
    description: 'A complete rebranding for a heritage luxury brand.',
    imageUrl: 'src/assets/Mbappe.png',
    year: '2024'
  },
  {
    id: '2',
    title: 'Football Shoes',
    category: 'Football',
    description: 'A digital publication dedicated to classical architecture.',
    imageUrl: 'src/assets/FOOTBALL.png',
    year: '2024'
  },
  {
    id: '3',
    title: 'Curry',
    category: 'Basketball',
    description: 'An immersive digital gallery for contemporary art.',
    imageUrl: 'src/assets/curry.png',
    year: '2023'
  },
];

export default function Works() {
  return (
    <section id="works" className="px-6 md:px-12 py-32 bg-brick-pattern">
      <div className="bg-sky-blue p-8 pixel-border mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-2xl md:text-5xl font-pixel drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">STAGE 1-1</h2>
          <p className="max-w-xs text-[10px] md:text-xs leading-loose text-center md:text-right">
            COLLECT ALL THE PROJECTS TO UNLOCK THE NEXT LEVEL.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
