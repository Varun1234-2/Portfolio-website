"use client";

import { motion } from "framer-motion";

// Here is some placeholder data to get the grid looking realistic.
// You can swap these out with your actual projects later!
const projects = [
  {
    id: 1,
    title: "Project 1",
    category: "Engineering",
    description: "Project",
  },
  {
    id: 2,
    title: "Project 2",
    category: "Python Development",
    description: "Project",
  },
  {
    id: 3,
    title: "Project 3",
    category: "Mathematics",
    description: "Project",
  },
  {
    id: 4,
    title: "Project 4",
    category: "Research / Presentation",
    description: "Project",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen w-full bg-black px-10 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-5xl font-black uppercase italic tracking-tighter md:text-7xl"
        >
          Selected Works.
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex h-[400px] cursor-pointer flex-col justify-end overflow-hidden border border-white/10 bg-zinc-900 p-8 transition-colors hover:border-white/30 hover:bg-zinc-800"
            >
              {/* Subtle hover effect background */}
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 to-transparent transition-opacity group-hover:opacity-70" />
              
              <div className="z-10">
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-500">
                  {project.category}
                </p>
                <h3 className="mb-4 text-3xl font-bold">{project.title}</h3>
                <p className="max-w-md text-sm text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;