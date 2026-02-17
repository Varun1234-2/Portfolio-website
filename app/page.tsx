"use client"; // We need this because we are using animations

import { motion } from "framer-motion";
import Scene from "../components/canvas/Scene";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <Scene /> 
      
      <section className="flex h-screen w-full flex-col items-center justify-center p-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="z-10 text-6xl font-black uppercase italic tracking-tighter md:text-9xl">
            I Build Stuff
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <p className="mt-6 max-w-lg text-lg text-gray-400">
            code • create • innovate
          </p>
        </motion.div>
      </section>

      {/* The new Projects Section replaces the temporary box! */}
      <Projects />
      
      {/* New Contact Section! */}
      <Contact />
    </main>
  );
}